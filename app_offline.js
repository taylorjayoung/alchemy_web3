
const {fs, web3, apiKey} =  require('./init.js')

async function get_transaction_data(){


    const data = fs.readFileSync('pls_sac_results.txt', 'utf8')
    const json_data = JSON.parse(data)    
    const tx_data = json_data.result.transfers  


    for(let t of tx_data) {
        // get data for getBlock
        const result = await getBlock(t.blockNum, readBlockData)
    }
}


async function getBlock(blockNum, readBlockData) {

    // console.log(blockNum)
    // console.log(Object.keys(web3.eth).filter(key => key.includes('lock')))
    const block = await web3.eth.getBlock(0xb443).then( (result) =>{
        console.log('in block')
        readBlockData(result)

    })
    return block
    // Query the blockchain (replace example parameters)
    // console.log(`blockNum: ${blockNum}`)
    // const block = await web3.eth.getBlock(blockNum);
    // return block
   }

function readBlockData(blockData){
    console.log(`keys: ${Object.keys(blockData)}`)
    console.log(`values: ${Object.values(blockData)}`)
}

   (async function(){
    let results = await get_transaction_data();
  })();

// Error: Given input "[object Object]" is not a number.
// FetchError: request to https://eth-mainnet.g.alchemy.io/v2/undefined failed, reason: getaddrinfo ENOTFOUND eth-mainnet.g.alchemy.io