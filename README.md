## Technolgies Used
-   Solidity
-   TypeScript
-   Hardhat
-   Node
-   Reactjs
-   TailwindCSS

## **Prerequisites**
-   npm
-   hardhat
-   nextjs

## Getting Started

First, install dependencies and then run the development server:
1.  Clone the repository

```sh
git clone --branch <branch_name> https://github.com/interview/interview.git
```

2.  Navigate to `interview` directory

```sh
cd interview
```

```bash
npm install
npm run dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# **Technical Interview  for Ethlas**

<img alt="Solidity" src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black"> <img alt="Typescipt" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">

This repo contains a Smart Contract for Depositing and Withdrawing an ERC20token.


## **Getting started**



3.  Install dependencies

```sh
npm install
```

4.  Configure project (Will add later when deploying to testnet)

```sh
cp .env.example .env
```

## **Compile Smart Contracts**


To compile every smart contract run the following command in your terminal:

Navigate to the 'contracts' folder /interview/contracts

```sh
npx hardhat compile
```



## **Run tests**

To run the tests in the test folder run the following command in your terminal:

Navigate to the 'contracts' folder /interview/contracts

Note: Running tests automatically compiles any smart contracts

-   To run all tests
```sh
npx hardhat test
```


## **Deploy to Blockchain Network** (Sepolia)

-   To a specific testnet

```sh
npx hardhat --network <network-name-in-tsconfig> deploy -- tags <deploy-script-tags>
```

-   To local development network (to test deployment)

```sh
npx hardhat deploy -- tags <deploy-script-tags>
```
