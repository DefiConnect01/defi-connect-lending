import React from "react";
import { defi_connectlogo } from "../assets";
import Image from "next/image";

import { BiWallet } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";

const MainCard = () => {
  return (
    <div className="px-8 md:px-20 md:py-6 py-10 bg-gradient-to-r from-white to-sky-600">
      <div className="flex items-center md:pb-4 justify-center">
        
        <h1 className="pl-2 font-bold md:text-3xl text-[20px] md:text-4xl text-black">
          DeFiConnect <span className="text-white">Lend & Borrow</span>
        </h1>
      </div>
      {/* <div className="flex gap-6">
        <div className="flex justify-start items-center">
          <div className="icon-box border border-spacing-3  border-gray-600 p-3 rounded-2xl bg-[#383D51]  hidden md:block">
            <BiWallet className="text-[#cfcece] text-xl" />
          </div>
          <div className="flex flex-col ml-2 text-[#CCCCCC]">
            <p className="text-sm">Net worth</p>
            <p className="font-semibold">
              $<span className="text-white pl-[2px]">0</span>
            </p>
          </div>
        </div> */}

      {/* <div className="flex justify-start items-center">
          <div className="icon-box border border-spacing-3 border-gray-600 p-3 rounded-2xl bg-[#383D51]  hidden md:block">
            <BsBarChart className="text-[#cfcece] text-xl" />
          </div>
          <div className="flex flex-col ml-2 text-[#CCCCCC]">
            <p className="text-sm">Net APY</p>
            <p className="font-semibold">__</p>
          </div>
        </div>
       </div> */}
    </div>
  );
};

export default MainCard;
