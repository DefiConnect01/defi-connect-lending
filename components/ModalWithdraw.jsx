import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdLocalGasStation } from "react-icons/md";
import { BiError } from "react-icons/bi";

const ModalWithdraw = ({ name, balance, image, remainingSupply, onClose }) => {
  const [dollerPrice, setDollerPrice] = useState(0);

  const [inputValue, setInputValue] = useState();

  const setMax = () => {
    setInputValue(balance);
  };

  return (
    <div>
      <div className="flex justify-between mb-3">
        <h1 className="text-[18px] font-semibold ">Withdraw {name}</h1>
        <button className=" text-xl" onClick={() => onClose()}>
          &#10006;
        </button>
      </div>

      <div className="flex flex-col mb-5">
        <h1 className="text-sm font-normal text text-[#A5A8B6] pb-[3px]">
          Amount
        </h1>
        <div className="border border-[#A5A8B6] border-opacity-20 p-2 rounded  flex flex-col">
          <div className="flex flex-row justify-between  mb-1">
            <input
              type="text"
              value={inputValue}
              onKeyPress={(event) => {
                var pattern = new RegExp(/^\d*\.?\d*$/);
                if (!pattern.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-transparent outline-none text-xl font-semibold w-1/2"
              placeholder="0.00"
            />
            <div className="font-semibold flex flex-row items-center justify-end w-1/2">
              <Image
                src={image}
                width={22}
                height={22}
                className="card-img-top"
                alt="coin-image"
              />{" "}
              <p className="text-md pl-2 text-[#F1F1F3]">{name}</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between text-xs text-[#8E92A3]">
            <p className="w-1/3">$ {dollerPrice}</p>
            <p className="justify-end">
              Wallet Balance{" "}
              {Number(balance).toFixed(2).toString(2).length < 10
                ? Number(balance).toFixed(2).toString().slice(0, 10)
                : `${Number(balance)
                    .toFixed(2)
                    .toString()
                    .slice(0, 10)}...`}{" "}
              <button
                className="font-bold text-[10px] text-[#F1F1F3]"
                onClick={() => setMax()}
              >
                MAX
              </button>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <h1 className="text-sm font-normal text text-[#A5A8B6] pb-[3px]">
          Transaction overview
        </h1>
        <div className="border border-[#A5A8B6] border-opacity-20 p-2 rounded  flex flex-col">
          <div className="flex flex-row items-center justify-between text-[13px] text-[#F1F1F3]">
            <p className="">Remaining Supply</p>
            <p className="justify-end">
              {Number(remainingSupply).toFixed(2).toString(2).length < 10
                ? Number(remainingSupply).toFixed(2).toString().slice(0, 10)
                : `${Number(remainingSupply)
                    .toFixed(2)
                    .toString()
                    .slice(0, 10)}...`}{" "}
              <span className="text-[#A5A8B6]">{name}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5 flex items-center">
        <MdLocalGasStation />
        <p className="text-sm text-[#A5A8B6] pl-1">
          $<span className="pl-[2px]">0.00</span>
        </p>
      </div>

      <div className="flex justify-center items-center text-xs p-2 bg-[#2E0C0A] text-[#FBB4AF] rounded mb-5">
        <BiError className="text-3xl pr-2 " />

        <div className="flex flex-col">
          <p className="font-medium text-[10px] tracking-[0.005rem]">
            Withdrawing this amount will increase risk of liquidation.
          </p>
        </div>
      </div>

      <div className="">
        <button className="w-full bg-[#F1F1F3] p-2 rounded text-black tracking-wide text-opacity-80 font-semibold mb-2">
          Approve to continue
        </button>
        <button className="w-full bg-[#EBEBEF] bg-opacity-10 p-2 rounded text-[#EBEBEF] tracking-wide text-opacity-30 font-semibold">
          Withdraw {name}
        </button>
      </div>
    </div>
  );
};

export default ModalWithdraw;
