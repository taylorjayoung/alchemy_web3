

// const {fs, myEnv, apiKey, fetch} = require('./init.js')
const {fs, myEnv, apiKey, fetch} =  require('./init.js')
const {get_transaction_data} =  require('./helpers.js')


var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 0,
  "method": "alchemy_getAssetTransfers",
  "params": [
    {
      "toAddress": "0x9Cd83BE15a79646A3D22B81fc8dDf7B7240a62cB",
      "excludeZeroValue": true,
      "category": [
        "external",
        "internal",
        "erc20"
      ]
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: raw,
  redirect: 'follow'
};

fetch(`https://eth-mainnet.alchemyapi.io/v2/${myEnv.parsed.API_KEY}`, requestOptions)
  .then(response => response.text())
  .then(result => get_transaction_data(result))
  .catch(error => console.log('error', error))


