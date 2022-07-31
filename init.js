const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const fs = require('fs');
const myEnv = require('dotenv').config()
const apiKey = myEnv.parsed.API_KEY;
const fetch = require('node-fetch');



// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
);

module.exports = {fs, myEnv, apiKey, fetch, web3}