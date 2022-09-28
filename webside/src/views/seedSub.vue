<template>
  <div class="seed-sub" @click="isShowSuccess=false">
    <ConnectWallet style="float: right" @getWeb3="getWeb3"></ConnectWallet>
    <div class="seed-sub-content">
      <img class="seed-sub-title animate__animated animate__flipInX" src="../assets/imgs/SEEDSub.png"/>
      <div class="seed-info">
        <div class="seed-info-item">
          <img class="logo" src="../assets/imgs/Seed.png" alt="">
          <div class="number">
            30,000,000.00
          </div>
          <div class="intro">
            Total number of mining pools
          </div>
        </div>
        <div class="seed-info-item">
          <img class="logo" src="../assets/imgs/Seed.png" alt="">
          <div class="number">
            15,000,000.00
          </div>
          <div class="intro">
            Number of mining pools already mined
          </div>
        </div>
        <div class="seed-info-item">
          <img class="logo" src="../assets/imgs/Seed.png" alt="">
          <div class="number">
            15,000,000.00
          </div>
          <div class="intro">
            Remaining number of mining pool
          </div>
        </div>
      </div>
      <div class="seed-exchange animate__animated animate__backInUp">
        <div class="header">
          <div class="title">
            01 ROUND SUBSCRIPTION
          </div>
          <div class="recoding">
            RECORDING
          </div>
        </div>
        <div class="from">
          <div class="floor1">
            <Strong>
              FROM
            </Strong>
            <div class="balance">
              Balance: {{ balance }}
            </div>
          </div>
          <div class="floor2">
            <div class="coin">
              <img class="logo" src="../assets/imgs/USDT.png" alt="">
              <strong class="coin-name">
                USDT
              </strong>
            </div>
            <input class="amount" v-model="amount" type="text">
            <button class="max-btn" @click="handleMax">
              MAX
            </button>
          </div>
        </div>
        <div class="arrow">
          <svg t="1628489060888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1955" width="16" height="16">
            <path
                d="M177.92 573.65333333l285.86666667 294.61333334c12.37333333 12.8 29.22666667 19.19999999 47.78666666 19.2l0.85333334 0c18.56 0 35.41333333-6.4 47.78666666-19.2l285.86666667-294.61333334c26.66666667-25.6 26.66666666-66.77333333 0-92.15999999-26.66666667-25.38666667-69.76-25.38666667-96.42666667 0l-169.38666666 177.06666666 1e-8-456.53333333c0-36.05333333-30.50666667-65.28-68.26666668-65.28-38.4 0-68.26666668 29.22666667-68.26666668 65.28l1e-8 456.53333333-169.38666666-177.06666666c-26.66666667-25.38666667-69.76-25.38666667-96.42666667 0s-26.66666667 66.56 0 92.15999999z"
                p-id="1956" fill="#46b787"></path>
          </svg>
        </div>
        <div class="to">
          <div class="floor1">
            <Strong>
              TO
            </Strong>
            <div>
            </div>
          </div>
          <div class="floor2">
            <div class="coin">
              <img class="logo" src="../assets/imgs/Seed.png" alt="">
              <strong class="coin-name">
                RBT-Seed
              </strong>
            </div>
            <div class="amount">{{ exchangeAmount }}</div>
          </div>
        </div>
        <div class="buttons">
          <div class="approve" @click="approve" :class="{'disable':allowanceNumber >= amount}">
            APPROVE
          </div>
          <div class="exchange" @click="exchange" :class="{'disable':allowanceNumber < amount}">
            EXCHANGE
          </div>
        </div>
        <div class="limited">
          <strong>
            SINGLE PURCHASE
          </strong>
          <strong class="limit-number">
            100 ～ 10,000 RBT-Seed
          </strong>
        </div>
      </div>
      <div class="seed-wheel">
        <div class="wheel-list">
          <div class="wheel-item" :class="{'active':wheel==item}" v-for="(item,index) in 5" :key="index">
            <div class="index">{{ index }}ROUND</div>
            <div class="price">PRICE: ${{ index }}</div>
            <div class="number">1,000,000</div>
          </div>
          <div class="wheel-bottom1"></div>
          <div class="wheel-bottom2"></div>
        </div>
        <div class="intro">
          每轮 <span>100万</span>枚，一共 <span>3000万</span>枚，一共分为 <span>30轮</span>，
          价格 <span>$ 0.1</span>起，每一轮结束后新一轮比上一轮价格递增 <span>$0.01</span>，最高 <span>$0.39</span>，
          单次最低认购 <span>100枚</span>，最高认购 <span>10000枚</span>。
        </div>
      </div>

    </div>
    <div class="footer-box">
      <pageFooter></pageFooter>
    </div>
    <div class="success-box" v-show="isShowSuccess" @click.stop>
      <h3 class="title">认购成功</h3>
      <div class="add-coin">
        <div class="intro">
          将代币加入钱包
        </div>
        <div class="coin-box">
          <div class="coin-info">
            <img src="../assets/imgs/Seed.png" alt="">
            RBTSeed
          </div>
          <div class="join-btn" @click="addCoin">
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
import ConnectWallet from "@/components/ConnectWallet";
import abiUtil from "@/utils/abiUtil";
import rbtSeedImg from "../assets/imgs/Seed.png"
const contractObj = require("../utils/RBTSeed.json")
const RBD = require("../utils/RBD.json")
import Web3 from 'web3'

export default {
  name: "seedSub",
  components: {pageFooter, ConnectWallet},
  data() {
    return {
      amount: 0,
      wheel: 1,
      balance: 0,
      web3: {},
      isShowSuccess: false,
      account: "",
      contract: {},
      COINContract: {},
      allowanceNumber: 0,
    }
  },
  watch: {
    web3() {
      this.contract = abiUtil.getContractByName("RbSeedSubscription", this.web3)
      this.COINContract = abiUtil.getContractByName("RBD", this.web3)
      this.allowance(this.account, contractObj.networks[1234].address).then(res => {
        this.allowanceNumber = res
      })
      this.getBalance()
    },
  },
  computed: {
    exchangeAmount() {
      return this.amount
    }
  },
  methods: {
    addCoin() {
      window.ethereum.sendAsync({  //添加代币代码
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
            symbol: 'RBTSeed',
            decimals: 18,
            image: rbtSeedImg,
          },
        },
      })
    },
    getBalance() {
      this.COINContract.methods.balanceOf(this.account).call().then(res => {
        this.balance = res / 10 ** 18
      })
    },
    handleMax() {
      this.amount = this.balance
    },
    async allowance(owner, spender) {
      let amount = 0
      await this.COINContract.methods.allowance(owner, spender).call({from: this.account}).then(res => {
        amount = res
      })
      return amount
    },
    approve() {
      this.COINContract.methods.approve(contractObj.networks[1234].address, this.web3.utils.toWei("1000000000000000000")).estimateGas({
        from: this.account,
      }).then(gas => {
        this.COINContract.methods.approve(contractObj.networks[1234].address, this.web3.utils.toWei("1000000000000000000")).send({
          from: this.account,
          gas: parseInt(gas * 1.2)
        }).then(res => {
          this.allowance(this.account, contractObj.networks[1234].address).then(res => {
            this.allowanceNumber = res
          })
          let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
          operateLogs.push({
            name: "approve",
            from: res.from,
            to: res.to,
            gasUsed: res.gasUsed,
            blockHash: res.blockHash
          })
          if (operateLogs.length > 20) {
            operateLogs.shift()
          }
          localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
        })
      })

    },
    exchange() {
      this.contract.methods.seedSubscription(this.amount, "RBD", RBD.networks[1234].address).estimateGas({
        from: this.account,
      }).then(gas => {
        this.contract.methods.seedSubscription(this.amount, "RBD", RBD.networks[1234].address).send({
          from: this.account,
          gas: parseInt(gas * 1.2)
        }).then(res => {
          this.isShowSuccess = true
          let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
          operateLogs.push({
            name: "seedSubscription",
            from: res.from,
            to: res.to,
            gasUsed: res.gasUsed,
            blockHash: res.blockHash
          })
          if (operateLogs.length > 20) {
            operateLogs.shift()
          }
          localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
        })
      }).catch(err => {
        reject(JSON.parse(err.message.substr(24, err.message.length)).message)
      })
    },
    getWeb3(web3Obj) {
      this.account = web3Obj.account
      this.web3 = web3Obj.web3Instance.web3()
      console.log(this.web3)
    }
  }
}
</script>

<style lang="scss" scoped>
.seed-sub {
  height: 100%;
  background-image: url("../static/imgs/seed_bg.png");
  background-size: cover;
  overflow: auto;
  box-sizing: border-box;

  .success-box {
    width: 600px;
    height: 200px;
    position: fixed;
    top: calc(30% - 100px);
    left: calc(50% - 300px);
    background: #fff;
    border-radius: 60px;
    color: black;

    .title {
      text-align: center;
      font-size: 22px;
    }

    .add-coin {
      width: 400px;
      margin: 0 auto;

      .intro {
        color: #666;
        font-size: 14px;
      }

      .coin-box {
        display: flex;

        justify-content: space-between;

        .coin-info {
          display: flex;
          align-items: center;

          img {
            width: 30px;
            margin: 0 10px;
          }
        }

        .join-btn {
          font-size: 34px;
          width: 40px;
          height: 40px;
          border: 1px solid #eee;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
        }
      }

    }
  }

  .seed-sub-content {

    overflow-y: auto;
    width: 100%;
    padding: 0 100px;
    margin: 0 auto;
    text-align: center;

    .seed-sub-title {
      width: 700px;
    }

    .seed-info {
      display: flex;
      margin-top: 30px;
      justify-content: space-between;

      .seed-info-item {
        width: 33%;
        border-right: 1px solid #333;
        text-align: center;

        .logo {
          width: 30px;
        }

        .number {
          width: 168px;
          margin: 0 auto;
          font-size: 24px;
          font-family: Roboto, Roboto-Bold;
          font-weight: 700;
          line-height: 28px;
        }

        .intro {
          font-size: 12px;
          font-family: Roboto, Roboto-Medium;
          color: #c8c8c8;
          margin-top: 6px;
        }
      }

      .seed-info-item:nth-child(1) .number {
        background-image: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .seed-info-item:nth-child(2) .number {
        background-image: linear-gradient(270deg, #12c2e9, #9aedff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .seed-info-item:nth-child(3) {
        border-right: none;

        .number {
          background-image: linear-gradient(270deg, #f64f59, #ff9da3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .seed-exchange {
      margin: 20px auto;
      width: 420px;
      background: #141423;
      border-radius: 10px;
      border: 1px solid #333333;

      .header {
        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        border-radius: 10px 10px 0px 0px;
        padding: 20px;

        .recoding {
          cursor: pointer;
          padding: 3px 10px;
          line-height: 27px;
          height: 32px;
          border: 1px solid rgba(255, 255, 255, 0.50);
          border-radius: 10px;
        }
      }

      .from, .to {
        margin-top: 20px;
        padding: 2px 20px;

        .floor1, .floor2 {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .logo {
            width: 30px;
          }

          .coin-name {
            line-height: 20px;
          }

          .amount {
            text-align: left;
            line-height: 36px;
            font-size: 20px;
          }
        }

        .floor2 {
          background: #1f1f2e;
          height: 70px;
          margin-top: 6px;
          border: 1px solid #333333;
          border-radius: 10px;
          box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.01);
          padding: 2px 12px;
          position: relative;

          .coin {
            display: flex;
            align-items: center;

            .coin-name {
              width: 80px;
            }
          }

          .amount {
            width: 190px;
            height: 50px;
            background: rgba(0, 0, 0, 0.20);
            border-radius: 5px;
            color: white;
            font-weight: bold;
            font-size: 16px;
            border: 1px solid rgba(0, 0, 0, 0.20);
            padding: 6px;
          }

          .max-btn {
            width: 40px;
            height: 30px;
            background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
            border-radius: 5px;
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);
            position: absolute;
            right: 22px;
            color: white;
            border: none;
            z-index: 1;
            cursor: pointer;

            &:active {
              transform: translate(1px, 1px);
              border: none;
            }
          }

        }
      }

      .arrow {
        margin: 15px auto 4px;
        width: 40px;
        height: 40px;
        background: #1f1c32;
        border: 1px solid #333333;
        border-radius: 50%;
        line-height: 44px;
        cursor: pointer;
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        padding: 20px;

        .approve, .exchange {
          width: 180px;
          height: 60px;
          cursor: pointer;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border-radius: 10px;
          font-size: 18px;
          line-height: 60px;

          &:active {
            transform: translate(1px, 2px);
          }

          &.disable {
            opacity: 0.4;
          }
        }
      }

      .limited {
        display: flex;
        justify-content: space-between;
        padding: 2px 20px 20px;

        .limit-number {
          color: #db1f7e;
        }
      }
    }

    .seed-wheel {
      width: 420px;
      height: 457px;
      background: #141423;
      border: 1px solid #333333;
      border-radius: 10px;
      margin: 50px auto;
      padding: 30px;

      .wheel-list {
        .wheel-item {
          padding: 0 26px;
          line-height: 40px;
          margin-top: 6px;
          display: flex;
          width: 360px;
          height: 40px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border-radius: 5px;
          opacity: 0.6;

          &.active {
            opacity: 1 !important;
          }
        }

        .wheel-bottom1 {
          width: 340px;
          height: 30px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border-radius: 0px 0px 5px 0px;
          opacity: 0.4;
        }

        .wheel-bottom2 {
          width: 322px;
          height: 30px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border-radius: 0px 0px 5px 5px;
          opacity: 0.3;
        }
      }

      .intro {
        margin-top: 30px;

        span {
          color: #DB1F7E;
        }
      }
    }
  }
}
</style>
