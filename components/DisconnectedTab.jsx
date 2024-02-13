import React from "react";
import { ConnectButton } from "../components";
import Image from "next/image";
import { metamask } from "../assets";

const DisconnectedTab = () => {
  return (
    <div className="px-2 md:px-16 -mt-10 bg-gradient-to-r from-white to-sky-600 w-full">
      <div className=" md:flex  md:justify-around p-5 my-4 items-center">
        <div className="md:text-[45px] text-[24px] text-sky-800 text-center mx-10 font-bold my-5 max-w-[500px]"> Crypto Lending made easy, borrow with easy with DefiConnect</div>
         <Image src={metamask} alt="Only-layer" className="md:w-[520px] md:h-[245px] h-[150px] w-[300px] shadow-md opacity-90 mx-4 rounded-md" /> 
      </div>
      <div className="flex items-center ml-10 p-4">
        <div className="mr-5 text-white bg-black rounded-full p-3 hover:bg-gray-800 cursor-pointer"> Get started</div>
      <ConnectButton />
      </div>

      <div className="bg-black/60 p-4 rounded-lg w-full flex justify-around md:max-w-[1100px] text-center max-w-[400px] font-bold mx-auto md:my-5 mt-20 text-white text-[16px] ">
        <div className="p-6 border-r-sky-600 border-r-2">  Earn Interest % </div>
        <div className="p-6 border-r-sky-600 border-r-2">  Lending $ </div>
        <div className="p-6 border-r-sky-600 border-r-2">  Low transaction </div>
      </div>
    </div>
  );
};

export default DisconnectedTab;
