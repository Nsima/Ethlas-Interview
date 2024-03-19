const { ethers } = require("hardhat");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

function main() {
  try {
    ethers.getSigners().then(async ([deployer]) => {
      console.log("Deploying Wallet.sol...");
    
      // Deploy the Wallet contract
      const Wallet = await ethers.getContractFactory("Wallet");
      const wallet = await Wallet.deploy("0x12069CBd2e01F2B6E78818Bad2bb83E629933c90");
      await wallet.deployed();
      console.log("Wallet deployed to:", wallet.address);
    });
  } catch (error) {
    console.error("Error deploying Wallet:", error);
  }
}

module.exports = buildModule("Wallet", main);
