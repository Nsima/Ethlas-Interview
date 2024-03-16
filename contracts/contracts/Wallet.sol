// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
//To prevent Reentrancy, You can use the Open Zeppelin Contract library
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Wallet is ReentrancyGuard{

    using Math for uint256;
    address public owner;
    mapping(address => uint256) balances;

    IERC20 public token; // ERC20 token contract address

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }
    // Deposit function: Users can deposit ERC20 Tokens
    function deposit(uint256 amount) public payable {
        require(amount > 0, "Amount must be greater than 0");
        require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");
        balances[msg.sender] += amount;
    }

    // Withdraw function: Users can withdraw their deposited Ether
    function withdraw(uint256 amount) public nonReentrant() {
        require(amount > 0, "Amount must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        // Update the balance before sending Ether to prevent reentrancy
        // balances[msg.sender] = balances[msg.sender].sub(amount);
        balances[msg.sender] = 0;

        require(token.transfer(msg.sender, amount), "Token transfer failed");

    }

    // View function to check user balance
    function getUserBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

}