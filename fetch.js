
const fetch = require('node-fetch');
const fs =  require('fs');




var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 0,
  "method": "alchemy_getAssetTransfers",
  "params": [
    {
      "contractAddresses": [
        "0x9Cd83BE15a79646A3D22B81fc8dDf7B7240a62cB"
      ],
      "maxCount": "0x10",
      "excludeZeroValue": true,
      "category": [
        "external",
        "internal",
        "erc20",
        "token"
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

fetch("https://eth-mainnet.alchemyapi.io/v2/demo", requestOptions)
  .then(response => response.text())
  .then(result => fs.writeFile('results.txt', result,   {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("results.txt", "utf8"));
    }
  }))
  .catch(error => console.log('error', error))
