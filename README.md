## archticture of PCT 
Perpetual Copy Trading (PCT) Using GMX involves the use of GMX platform to automate the process of copying trades from a selected trader from GMX platform,  known as the "Whale Trader" to a "Copiers" account

The architecture of perpetual copy trading using GMX can be broken down into four main components: 



The Vault (Smart Contracts) - 
    Manages the copiers Account
    to execute the copy trade from the whale to copier
    Solidity
    A smart contract called Vault created per user, who can manage his account to copy which trader, or copy the copier, only longs/shorts, only selective instruments, only selective time for trades, different Stoploss/TP levels, etc., ( a contract that can manage all the activities needed).
UI - 
    An UI is developed to show the copier’s Position, Order book, Assets, and Market
    A trade Page where to watch the Whale’s trade and copy & execute his trade 
Backend Job-
    Create a backend job to track the whale that needed to be copied so, you can execute that action in the next block for an array of copier accounts
    Node Js
API - 
    create a subgraph to track all the activities with tx events and show em in UI.
    Node Js










## to learn more on UUPS
- https://github.com/nuthan2x/uups-feb23

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


## steps

- clone the repo to the local folder
```
npm init -y
```
```
npm i
```

then fork Arbitrum locally to deploy/ interact with contract.

```
npx hardhat node --fork https://rpc.ankr.com/arbitrum
```


then see forkArbitrum.md for more details on fork node data or see in command line 
or fork with anvil.

```
anvil --fork-url https://rpc.ankr.com/arbitrum
```

