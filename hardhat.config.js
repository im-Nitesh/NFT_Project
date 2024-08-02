require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/{........}",
      accounts: [`0x${"YOUR_PRIVITE_KEY"}`],
    },
  },
  etherscan: {
    apiKey: "YOUR_API_KEY"
  }
};
