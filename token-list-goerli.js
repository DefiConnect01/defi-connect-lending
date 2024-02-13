import { ethIcon, usdcIcon, daiIcon, usdtIcon } from "./assets";

// For localhost
import {
  ETHAddress,
  DDAITokenAddress,
  DUSDTTokenAddress,
  DUSDCTokenAddress,

} from "./addresses";

export const token = [
  // {
  //   image: ethIcon,
  //   name: "ETH",
  //   address: ETHAddress,
  //   decimal: "18",
  //   apy: 3,
  //   isCollateral: true,
  // },

  {
    image: daiIcon,
    name: "DDAI",
    address: DDAITokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: usdcIcon,
    name: "DUSDC",
    address: DUSDCTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  {
    image: usdtIcon,
    name: "DUSDT",
    address: DUSDTTokenAddress,
    decimal: "18",
    apy: 3,
    isCollateral: true,
  },
  
];
