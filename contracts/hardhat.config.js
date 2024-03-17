require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  networks: { 
    sepolia: {
       url: `https://eth-sepolia.g.alchemy.com/v2/FthhIZLt21hwLO-GlNdTeKCS3Jbx_YsW`,
       accounts: [process.env.PRIVATE_KEY],
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
