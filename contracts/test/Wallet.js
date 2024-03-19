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
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    token = await MockERC20.deploy("Test Token", "TEST");

    // Deploy the Wallet contract
    const Wallet = await ethers.getContractFactory("Wallet");
    wallet = await Wallet.deploy(token.address);

    // Transfer some tokens to the user
    await token.transfer(user.address, ethers.utils.parseEther("100"));
  });

  it("Should withdraw tokens from the wallet", async function () {
    const initialBalance = await token.balanceOf(user.address);
    const amount = ethers.utils.parseEther("5");

    // Perform the withdrawal
    await wallet.connect(user).withdraw(amount);

    // Check the user balance after withdrawal
    const finalBalance = await token.balanceOf(user.address);
    expect(finalBalance.add(amount)).to.equal(initialBalance);
  });

  it("Should not allow withdrawal of more tokens than deposited", async function () {
    const initialBalance = await token.balanceOf(user.address);
    const amount = ethers.utils.parseEther("20");

    // Attempt to withdraw more tokens than deposited
    await expect(wallet.connect(user).withdraw(amount)).to.be.revertedWith("Insufficient balance");

    // Check that the user balance remains unchanged
    const finalBalance = await token.balanceOf(user.address);
    expect(finalBalance).to.equal(initialBalance);
  });

  it("Should return user's balance correctly", async function () {
    // Perform a deposit to ensure a non-zero user balance
    const depositAmount = ethers.utils.parseEther("5");
    await token.connect(user).approve(wallet.address, depositAmount);
    await wallet.connect(user).deposit(depositAmount);

    // Check the user balance
    const userBalance = await wallet.connect(user).getUserBalance();
    expect(userBalance).to.equal(depositAmount);
  });
});
