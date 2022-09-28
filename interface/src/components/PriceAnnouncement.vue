<template>
  <div class="price-announce">
    <div class="price-announce-left">
      <div class="public-price">
        <img src="../assets/img/BTC.png" alt="">
        <span>BTC: $ {{ coinData.btc ? Number(coinData.btc).toFixed(2) : 0 }}</span>
      </div>
      <div class="public-price">
        <img src="../assets/img/ETH.png" alt="">
        <span>ETH: $ {{ coinData.eth ? Number(coinData.eth).toFixed(2) : 0 }}</span>
      </div>
      <div class="public-price">
        <img src="../assets/img/RBT.png" alt="">
        <span>RBT: $ 1366.12</span>
      </div>
      <div class="public-price">
        <img src="../assets/img/RBD.png" alt="">
        <span>RBD: $ 1366.12</span>
      </div>
      <div class="gas-price">
        <span class="detail">
          快
        </span>
        <strong class="r-r-color">{{ (gasPrice.fast.price / 10 ** 9).toFixed(1) }}</strong>

        <span class="detail">
          中
        </span>
        <strong class="r-y-color">{{ (gasPrice.normal.price / 10 ** 9).toFixed(1)}}</strong>

        <span class="detail">
          慢
        </span>
        <strong class="r-g-color">{{ (gasPrice.slow.price / 10 ** 9).toFixed(1) }}</strong>

      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios"
import {getPrices} from "../api/coinbase"
export default {
  name: "price-announcement",
  data() {
    return {
      websocket: null,
      gas: 0,
      gasPrice: {
        fast: 10 ** 9,
        normal: 10 ** 9,
        slow: 0
      },
      coinData: {
        btc: 0,
        eth: 0,
      }
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
    ]),
  },
  created() {
    this.getGas()
    this.getPrices()
    let _this = this
    if(!global.isHasPrices){
      global.isHasPrices = true
      setInterval(()=>{
        _this.getGas()
        _this.getPrices()
      },15000)
    }
  },
  methods: {
    getGas() {
      let _this = this
      axios.get("https://api.debank.com/chain/gas_price_dict_v2").then(res => {
        let {fast, slow, normal} = res.data.data
        _this.gasPrice.fast = fast
        _this.gasPrice.slow = slow
        _this.gasPrice.normal = normal
      })
    },
    getPrices(){
      let _this = this
      getPrices().then(prices=>{
        _this.coinData.btc = prices.btc
        _this.coinData.eth = prices.eth
        this.$store.commit("rainbow/SET_PRICE",{name:"btcPrice", price:prices.btc})
        this.$store.commit("rainbow/SET_PRICE",{name:"ethPrice", price:prices.eth})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.price-announce {

  .price-announcement-bottom {
    margin-top: 10px;
    width: 100%;
    text-align: right;
  }

  .price-announce-left {
    display: flex;
  }

  .price-announce-right {
    display: flex;
    align-items: center;
  }

  .public-price {
    display: flex;
    margin-right: 16px;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 4px;
      width: 16px;
    }

    span {
      padding: 0 2px;
      font-weight: bold;
    }

    .detail {
      margin-right: 10px;
    }
  }

  .public-price:nth-child(1) {
    color: #F7931A;
  }

  .public-price:nth-child(2) {
    color: #fff;
  }

  .public-price:nth-child(3) {
    color: #ED6868;
  }

  .public-price:nth-child(4) {
    color: #0B9FE1;
  }

  .gas-price {
    padding: 6px 12px;
    margin: 0 16px 0 10px;
    border: 1px solid #666666;
    border-radius: 11px;
    strong{
      padding: 0 6px;
    }
  }

}
</style>
