const { ethers } = require("hardhat");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

function main() {
  let TokenERC20Address;

  try {
    ethers.getSigners().then(async ([deployer]) => {
      console.log("Deploying MockERC20...");
    
      // Deploy the ERC20 token contract
      const MockERC20 = await ethers.getContractFactory("MockERC20");
      const myToken = await MockERC20.deploy("Test Token", "TEST");
      //console.log(MockERC20);
      console.log(myToken);
      //const TokenERC20 = ethers.getContractFactory("MockERC20");
      //console.log("MyToken has been deployed to:", TokenERC20.address);
    
      // Set the contract address
      //TokenERC20Address = TokenERC20.address;
    });
  } catch (error) {
    console.error("Error deploying MyToken:", error);
  }

  return TokenERC20Address;
}

module.exports = buildModule("deployMyToken", main);