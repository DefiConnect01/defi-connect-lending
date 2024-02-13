import React, { useContext } from "react";

import lendContext from "../context/lendContext";

const ConnectButton = () => {
  const { metamaskDetails, connectWallet } = useContext(lendContext);

  return (
    <div>
      {!metamaskDetails.currentAccount ? (
        <button
          className="border-spacing-2 bg-slate-200 hover:bg-black hover:text-white p-3 rounded-full text-black text-sm font-semibold outline-none rounded-full"
          onClick={() => connectWallet()}
        >
          Connect wallet
        </button>
      ) : (
        <button className="border-spacing-2 bg-slate-200 hover:bg-black p-3 rounded-[full] text-black text-sm font-semibold outline-none hover:text-white rounded-2xl flex">
          <p className="uppercase">{metamaskDetails.networkName} - </p>
          {` ${metamaskDetails.currentAccount
            .toString()
            .substring(0, 4)}...${metamaskDetails.currentAccount
            .toString()
            .substring(38, 42)}`}
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
