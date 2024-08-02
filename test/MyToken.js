const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let MyToken;
  let nftContract;
  let owner;
  let addr1;
  let deployer;

  beforeEach(async function () {
    MyToken = await ethers.getContractFactory("MyToken");
    [owner, addr1] = await ethers.getSigners();
    nftContract = await MyToken.deploy(owner.address);
    await nftContract.waitForDeployment();
  });

  it("should create an NFT and assign it to the recipient", async function () {
    await nftContract.createNFT(addr1.address);
    expect(await nftContract.ownerOf(0)).to.equal(addr1.address);
  });

  it("should increment the tokenCounter after creating an NFT", async function () {
    await nftContract.createNFT(addr1.address);
    expect(await nftContract.tokenCounter()).to.equal(1);
  });
});
