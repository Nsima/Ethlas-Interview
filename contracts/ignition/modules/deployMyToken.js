require("@nomicfoundation/hardhat-ignition-ethers");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-ignition");
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying MyToken...");

  // Deploy the ERC20 token contract
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy("Test Token", "TEST");

  console.log("MyToken deployed to:", myToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });