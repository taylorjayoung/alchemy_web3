async function get_transaction_data(data){

    fs.readFile('pls_sac_results.txt', 'utf8', function(err, data){
        if (err) {
            console.error(err);
            return;
        }
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
            from: ${from}`
    )
}