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
API - create a subgraph to track all the activities with tx events and show em in UI.
Node Js





