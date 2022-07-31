// alchemy-token-api/alchemy-web3-script.js
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const myEnv = require('dotenv').config()

// Replace with your Alchemy api key:

// // Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.g.alchemy.com/v2/${myEnv.parsed.API_KEY}`,
);


// The token address we want to query for metadata:
async function test(){
    const metadata = await web3.alchemy.getTokenMetadata("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39")
    return metadata
}

test().then((result) => {
    console.log(`json result: ${(JSON.stringify(result))}`
)}, e => { console.error(e); process.exit(1) })

