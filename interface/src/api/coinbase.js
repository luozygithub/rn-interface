import axios from "axios"

// 获取BTC价格
export async function getPrices(){
    let resBtc =  await axios.get(`https://api.coinbase.com/v2/prices/spot?currency=USD`)
    let resEth =  await axios.get(`https://api.coinbase.com/v2/prices/ETH-USD/buy`)
    return {
        btc:resBtc.data.data.amount,
        eth:resEth.data.data.amount
    }
}

