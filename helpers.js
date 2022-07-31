
async function get_transaction_data(data){

        // console.log(JSON.parse(data));
        const json_data = JSON.parse(data)    
        let addresses = ''
    
        for(let t of json_data.result.transfers) {
            // addresses += `${t.to}, ${t.from},`
            console.log(t.blockNum)
            const blockNum = t.blockNum
            const hash = t.hash
            const to = t.to
            const from = t.from
            console.log(`
            blockNum: ${blockNum}
            hash: ${hash}
            to: ${to}
            from: ${from}`)
        }
    
}


async function getBlock(blockNum) {
    // Import the AlchemyWeb3 library. Filepath to functions: 
	// /@alch/alchemy-web3/dist/alchemyWeb3.js
	const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

   	// Replace with your Alchemy API key:
	const apiKey = "demo";
	
	// Initialize an alchemy-web3 instance:
	const web3 = createAlchemyWeb3(
	  `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`);
	
	// Query the blockchain (replace example parameters)
	const blockNumber = await web3.eth.getBlock('latest', true);

	// Print the output to console
	console.log(blockByNumber);
   }


module.exports = {get_transaction_data}


    // fs.writeFile('addresses.txt', addresses,   {
    //     encoding: "utf8",
    //     flag: "w",
    //     mode: 0o666
    //   },
    //   (err) => {
    //     if (err)
    //       console.log(err);
    //     else {
    //       console.log("File written successfully\n");
    //       console.log("The written has the following contents:");
    //       console.log(fs.readFileSync("pls_sac_results.txt", "utf8"));
    //     }
    //   })

    // console.log(transfers.length)









// deprecated read results file
//    fs.readFile('pls_sac_results.txt', 'utf8', function(err, data){
//     if (err) {
//         console.error(err);
//         return;
//       }
//     // console.log(JSON.parse(data));
//     const json_data = JSON.parse(data)    
//     let addresses = ''

//     for(let t of json_data.result.transfers) {
//         // addresses += `${t.to}, ${t.from},`
//         console.log(t.blockNum)
//         const blockNum = t.blockNum
//         const hash = t.hash
//         const to = t.to
//         const from = t.from
//         console.log(`
//         blockNum: ${blockNum}
//         hash: ${hash}
//         to: ${to}
//         from: ${from}`)

        
//     }
// })



