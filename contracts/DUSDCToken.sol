//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DUSDCToken is ERC20{
    constructor() ERC20("DUSDC Token","DUSDC"){
        _mint(msg.sender,1000000*10**18);
    }
}