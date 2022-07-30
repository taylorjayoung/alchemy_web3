// alchemy-token-api/alchemy-web3-script.js
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const myEnv = require('dotenv').config()

// Replace with your Alchemy api key:

// // Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.g.alchemy.com/v2/${myEnv.parsed.API_KEY}`,
);

let temp

// The token address we want to query for metadata:
async function test(){
    const metadata = await web3.alchemy.getTokenMetadata("0x1985365e9f78359a9B6AD760e32412f4a445E862")
    temp = metadata
}

test().then((result) => console.log(`result: ${reuslt}`), e => { console.error(e); process.exit(1) })

