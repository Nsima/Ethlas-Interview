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
      accounts: [process.env.TEST_PK],
    },
    //Alchemy network configuration
    alchemy: {
      url: "https://eth-mainnet.g.alchemy.com/v2/uD6AlkAM4XTp69g3PI0A2rAHkEK29mrZ", // The Alchemy API endpoint
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`], // The Sepolia account private key
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
