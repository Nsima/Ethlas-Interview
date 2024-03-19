require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-ignition");

require("dotenv").config({ path: ".env" });

const { Network, Alchemy } = require('alchemy-sdk');


module.exports = {
  
  networks: { 
    localhost: {
      url: `http://127.0.0.1:8545`,
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`],
    },
    //Alchemy network configuration
    alchemy: {
      url: "https://eth-mainnet.g.alchemy.com/v2/uD6AlkAM4XTp69g3PI0A2rAHkEK29mrZ", // The Alchemy API endpoint
      accounts: [`0xf46e8fadd26158add3999af13b060f53e6d8f1ac98fa7048f06cfda41716411c`], // The Sepolia account private key
    },
  },
  
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
