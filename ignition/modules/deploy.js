async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const MyToken = await ethers.getContractFactory("MyToken");
  
    // Deploy the contract with the deployer's address as the initial owner
    const myToken = await MyToken.deploy(deployer.address);
  
    // Wait for the contract to be deployed
    await myToken.waitForDeployment();
  
    // Log the contract address
    console.log("MyToken deployed to:", await myToken.getAddress());
    
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

// Deploying contracts with the account: 0xC726d342720c67801b89eEbe73bD7358A171D603
// MyToken deployed to: 0x7F2AD15021266d801AF3285660E27A29AA6D9a41
// Verified contract address - https://sepolia.etherscan.io/address/0x7F2AD15021266d801AF3285660E27A29AA6D9a41#code