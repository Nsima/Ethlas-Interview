const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Wallet", function () {
  let owner;
  let user;
  let wallet;
  let token;

  before(async function () {
    [owner, user] = await ethers.getSigners();

    // Deploy the ERC20 token
    const ERC20Token = await ethers.getContractFactory("MyToken");
    token = await ERC20Token.deploy("Test Token", "TEST");

    // Deploy the Wallet contract
    const Wallet = await ethers.getContractFactory("Wallet");
    wallet = await Wallet.deploy(token.address);

    // Transfer some tokens to the user
    await token.transfer(user.address, ethers.utils.parseEther("100"));
  });

  it("Should deposit tokens to the wallet", async function () {
    const amount = ethers.utils.parseEther("10");
    await token.connect(user).approve(wallet.address, amount);
    await wallet.connect(user).deposit(amount);

    const balance = await token.balanceOf(wallet.address);
    expect(balance).to.equal(amount);
  });

  it("Should withdraw tokens from the wallet", async function () {
    const initialBalance = await token.balanceOf(user.address);
    const amount = ethers.utils.parseEther("5");

    await wallet.connect(user).withdraw(amount);

    const finalBalance = await token.balanceOf(user.address);
    expect(finalBalance.sub(initialBalance)).to.equal(amount);
  });

  it("Should not allow withdrawal of more tokens than deposited", async function () {
    const initialBalance = await token.balanceOf(user.address);
    const amount = ethers.utils.parseEther("20");

    await expect(wallet.connect(user).withdraw(amount)).to.be.revertedWith("Insufficient balance");

    const finalBalance = await token.balanceOf(user.address);
    expect(finalBalance).to.equal(initialBalance);
  });

  it("Should return user's balance correctly", async function () {
    const userBalance = await wallet.connect(user).getUserBalance();
    expect(userBalance).to.equal(ethers.utils.parseEther("5"));
  });
});
