import { ethIcon, usdcIcon, daiIcon, usdtIcon, btcIcon } from "./assets";

// For localhost
import {
  ETHAddress,
  DDAITokenAddress,
  DUSDTTokenAddress,
  DUSDCTokenAddress,
  DWBTCTokenAddress,
} from "./addresses";

export const tokensList = (chainId) => {
  return [
    {
      image: btcIcon,
      name: "BTC",
      address: DWBTCTokenAddress[chainId],
      decimal: "18",
      apy: 3,
      isCollateral: true,
    },
    {
      image: daiIcon,
      name: "DAI",
      address: DDAITokenAddress[chainId],
      decimal: "18",
      apy: 3,
      isCollateral: true,
    },
    {
      image: usdcIcon,
      name: "USDC",
      address: DUSDCTokenAddress[chainId],
      decimal: "18",
      apy: 3,
      isCollateral: true,
    },
    {
      image: usdtIcon,
      name: "USDT",
      address: DUSDTTokenAddress[chainId],
      decimal: "18",
      apy: 3,
      isCollateral: true,
    },

    {
      image: btcIcon,
      name: "WBTC",
      address: ETHAddress[chainId],
      decimal: "18",
      apy: 3,
      isCollateral: true,
    },
  ];
};
