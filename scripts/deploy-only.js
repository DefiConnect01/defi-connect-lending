const { ethers } = require("hardhat");
const {

  ETH_USD_PF_ADDRESS,
  DAI_USD_PF_ADDRESS,
  USDC_USD_PF_ADDRESS,
  USDT_USD_PF_ADDRESS,
  FEEWALLET,
  ETHAddress,
 

} = require("../addresses");


const numberToEthers = (number) => {
    return ethers.utils.parseEther(number.toString());
  };
  
  async function main() {
    const INTEREST_RATE = 3;
    const BORROW_RATE = 4;
  

    //   /********************** Deploy wETH *************************/
    //   const WETH = await ethers.getContractFactory("WETH9");
    //   const weth = await WETH.deploy();
    //   await weth.deployed();
    //   const ETHAddress = weth.address;
    //   console.log('const ETHAddress = "' + ETHAddress + '"');
    // /********************** Deploy DAIToken *************************/
    const DDAIToken = await ethers.getContractFactory("DDAIToken");
    const ddaiToken = await DDAIToken.deploy();
    await ddaiToken.deployed();
    const DDAI_ADDRESS = ddaiToken.address;
    console.log('const DDAITokenAddress = "' + DDAI_ADDRESS + '"');
  
    // /********************** Deploy USDOToken *************************/
    const DUSDTToken = await ethers.getContractFactory("DUSDTToken");
    const dusdtToken = await DUSDTToken.deploy();
    await dusdtToken.deployed();
    const DUSDT_ADDRESS = dusdtToken.address;
    console.log('const DUSDTTokenAddress = "' + DUSDT_ADDRESS + '"');
  
    // /********************** Deploy DUSDCToken *************************/
    const DUSDCToken = await ethers.getContractFactory("DUSDCToken");
    const dusdcToken = await DUSDCToken.deploy();
    await dusdcToken.deployed();
    const DUSDC_ADDRESS = dusdcToken.address;
    console.log('const DUSDCTokenAddress = "' + DUSDC_ADDRESS + '"');

    //  /********************** Deploy DUSDCToken *************************/
    //  const DBTCToken = await ethers.getContractFactory("DBTCToken");
    //  const dbtcToken = await DBTCToken.deploy();
    //  await dbtcToken.deployed();
    //  const DBTC_ADDRESS = dbtcToken.address;
    //  console.log('const USDCTokenAddress = "' + DBTC_ADDRESS + '"');
    
  
    /********************** Deploy AddressToTokenMap *************************/
    const AddressToTokenMap = await ethers.getContractFactory(
      "AddressToTokenMap"
    );
    const addressToTokenMap = await AddressToTokenMap.deploy();
    await addressToTokenMap.deployed();
    console.log(
      'const AddressToTokenMapAddress = "' + addressToTokenMap.address + '"'
    );
  
    /********************** Deploy LendingConfig *************************/
    const LendingConfig = await ethers.getContractFactory("LendingConfig");
    const lendingConfig = await LendingConfig.deploy(INTEREST_RATE, BORROW_RATE);
    await lendingConfig.deployed();
    console.log('const LendingConfigAddress = "' + lendingConfig.address + '"');
  
    /********************** Deploy LendingHelper *************************/
    const LendingHelper = await ethers.getContractFactory("LendingHelper");
    const lendingHelper = await LendingHelper.deploy(
      addressToTokenMap.address,
      lendingConfig.address
    );
    await lendingHelper.deployed();
    console.log('const LendingHelperAddress = "' + lendingHelper.address + '"');
  
    /********************** Deploy LendingPoolV2 *************************/
    const LendingPool = await ethers.getContractFactory("LendingPool");
    const lendingPool = await LendingPool.deploy(
      addressToTokenMap.address,
      lendingConfig.address,
      lendingHelper.address,
      FEEWALLET
    );
    await lendingPool.deployed();
    LendingPoolAddress = lendingPool.address;
    console.log('const LendingPoolAddress = "' + lendingPool.address + '"');
  
      /****************** Adding Assets ******************/
  await addressToTokenMap._setAddress(ETHAddress, "ETH");
  await addressToTokenMap._setAddress(DDAI_ADDRESS, "DDAI");
  await addressToTokenMap._setAddress(DUSDC_ADDRESS, "DUSDC");
  await addressToTokenMap._setAddress(DUSDT_ADDRESS, "DUSDT");

  console.log("Token Address Set");

  /****************** Adding Price Feed ******************/
  await addressToTokenMap._setPriceFeedMap(DDAI_ADDRESS, DAI_USD_PF_ADDRESS);
  await addressToTokenMap._setPriceFeedMap(DUSDC_ADDRESS, USDC_USD_PF_ADDRESS);
  await addressToTokenMap._setPriceFeedMap(DUSDT_ADDRESS, USDT_USD_PF_ADDRESS);
  await addressToTokenMap._setPriceFeedMap(ETHAddress, ETH_USD_PF_ADDRESS);

  console.log("Price Feed Address Set");

    }

    main().catch((error) => {
        console.log(error);
        process.exitCode = 1;
      });