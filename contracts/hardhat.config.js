require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config({ path: ".env" });

//const ALCHEMY_API_KEY = vars.get("SEPOLIA_API_KEY");

module.exports = {
  /*
  networks: { 
    sepolia: {
       url: `https://eth-sepolia.g.alchemy.com/v2/FthhIZLt21hwLO-GlNdTeKCS3Jbx_YsW`,
       accounts: [vars.get("TEST_PK")],
     },
  },
  */
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
