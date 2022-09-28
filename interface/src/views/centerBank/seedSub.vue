<template>
  <div class="seedSub">
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div class="seedSub-panel-header">
          <span>RBT种子轮认购矿池</span>
          <el-button class="button-view" @click="exchangeRecords" size="mini">
            <i class="el-icon-time"></i>兑换记录
          </el-button>
        </div>

      </template>
      <template v-slot:content>
        <ExchangeCard type="seedSub" cardName ="认购" :balance="balance" :cur-rate="curRate" @handleExchange="handleExchange"></ExchangeCard>

        <div class="rainCard">
          <div class="rainCard-header-info">
            <div>
              <span >矿池总数量</span>
              <span><strong style="color:#D2277C">{{30000000 | formatNumber}} </strong>RBT-Seed</span>
            </div>
            <div>
              <span >矿池已挖数量</span>
              <span><strong style="color:#D2277C"> {{ 10 ** 6 * (curRate - 100) / 10 + 1000000 - curSubNumber |formatNumber }} </strong>RBT-Seed</span>
            </div>
            <div>
              <span >矿池剩余数量</span>
              <span><strong style="color:#D2277C"> {{ 10*10**8 - (10 ** 6 * (curRate - 100) / 10 + 1000000 - curSubNumber) |formatNumber }} </strong>RBT-Seed</span>
            </div>
            <div class="r-line" style="height:2px;background: #eee;"></div>
            <div>
              <span ><strong style="color:#D2277C">{{((curRate - 100) / 10)+1}}轮</strong>数量</span>
              <span><strong style="color:#D2277C">1,000,000</strong> RBT-Seed</span>
            </div>
            <div>
              <span ><strong style="color:#D2277C">{{((curRate - 100) / 10)+1}}轮</strong>剩余</span>
              <span><strong style="color:#D2277C">{{ curSubNumber |formatNumber }}</strong> RBT-Seed</span>
            </div>
            <div>
              <span >单次限购</span>
              <span><strong style="color:#D2277C">100-10,000</strong> RBT-Seed</span>
            </div>
          </div>

          <div class="show-card">
            <div class="wheel-list">
              <div class="curRate-row"  :style="'left:'+ (((1000000-curSubNumber)/(1000000) * 308) - 52 )+ 'px;top: 18px;'">
               <div class="row-content">
                 Remaining: {{ ((1000000-curSubNumber)/(1000000) * 100 ) .toFixed(2)}}%
               </div>
              </div>
              <template v-for="(index) in 30">
                <div class="wheel-item" v-if="index>=(curRate - 100) / 5 +1 && index < (curRate - 100) / 5 + 6" :class="{active: (curRate - 100) / 5 +1==index}" :key="index">
                  <div class="wheel-active-background" v-if="(curRate - 100) / 5 +1==index"
                       :style="'width:'+ 308*((1000000-curSubNumber)/(1000000)) +'px;'"
                  ></div>
                  <div class="content" >
                    <span style="color:#D2277C">{{ index }} Round Price: {{
                        (0.1 + (index - 1) * 0.005).toFixed(3)
                      }} USD</span>
                    <div v-if="(curRate - 100) / 5 +1==index" style="margin: 0;color:#7700FF; font-weight: bold;">
                      {{ curSubNumber |formatNumber }}
                    </div>
                    <div v-else style="margin: 0;color:#7700FF; font-weight: bold;">1,000,000</div>
                  </div>
                </div>
              </template>
              <div class="wheel-item-bottom"></div>
              <div class="wheel-item-bottom"></div>
            </div>
<!--            <div>-->
<!--              当前种子轮额度分发时，会以RBT-Seed的形式发放，当整个生态智能合约开启后，与RBT进行1:1兑换，获得生态亩通证权益。-->
<!--            </div>-->
          </div>

          <div class="rainCard-top">
            每轮100万枚，一共3000万枚，一共分为30轮，价格
            <span class="r-p-color">$ 0.1</span>起，每一轮结束后新一轮比上一轮价格递增
            <span class="r-p-color">$0.01</span>，最高 <span class="r-p-color">$ 0.39</span>，单次最低认购100枚，最高认购10000枚。
          </div>
        </div>

      </template>
    </RainbowPanel>

    <el-dialog
        title="Select a token"
        :visible.sync="dialogVisible"
        width="30%">
      <div class="token-list" v-for="(item,index) in tokenList" :key="index">
        <div class="token-item" @click="handleChooseToken(item)">{{ item.name }}</div>
      </div>
    </el-dialog>

    <el-dialog
        title="兑换记录"
        :visible.sync="showRecord"
        width="400px"
    >
      <div class="exchange-record">
        <div class="exchange-record-header">
          <div>
            <strong>兑换总量：</strong>
            <div class="coin-info">
              <img src="../../assets/img/SEED.png" alt="">
              <strong class="r-p-color">{{allUsdtAmount |formatNumberTo }}</strong> RBT-Seed
            </div>
          </div>
          <div>
            <strong>消耗总量：</strong>
            <div class="coin-info">
              <img src="../../assets/img/DAI.png" alt="">
              <strong class="r-p-color">{{allAmount / 10 ** 18 |formatNumberTo }}USDT</strong>
            </div>
          </div>
        </div>
        <div class="record-box">
          <div class="record" v-for="(record,index) in records" :key="index">
            <div class="record-time">
              {{ new Date(record.time*1000) | formatDate }}
            </div>
            <div class="record-content">
              <div>
                <div>使用：</div>
                <div><img class="icon"  src="../../assets/img/SEED.png" alt="">{{ record.amount / 10 ** 18  }}USD</div>
                <div>≈{{6.6*record.price}}</div>
              </div>
              <div>
                <div>兑换：</div>
                <div><img class="icon" src="../../assets/img/RBT.png" alt=""> {{ record.amount / 10 ** 18 / record.price }}RBT-SEED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ExchangeCard from "@/components/ExchangeCard";
import {RBD} from "../../utils/address.json";
import addressArr from "@/utils/address.json"
export default {
  name: 'seedSub',
  components:{
    ExchangeCard
  },
  data() {
    return {
      isLoading: false,//是否正在交易
      showRecord: false,//兑换记录 是否显示
      chooseName: "USD",
      chooseToken: null,
      dialogVisible: false,
      token: '',
      toSelect: 0,
      excSeedNumber: 0,
      tokenList: [{
        name: "USD",
        token: "0x997CbF327c7549FAE7ba3286f0710b96BfE6fdc1"
      }, {
        name: "DAI",
        token: "0x73Ea4D9342339b1a6736C58ef1C7D1A8C40104fc"
      }, {
        name: "WETH",
        token: "0x27E2CF431b2C2688302C188a1a15B38285290a11"
      }],
      swap: {
        first: 'ETH',
        firstToken: '',
        second: '',
        secondToken: ''
      },
      amount: 0,
      balance:0
    }
  },
  created() {
    this.initData()
  },

  methods: {
    handleMax() {
      if(this.balance>10000){
        this.amount = this.$decimal(10000).div(1000).mul(this.curRate)
      }else{
        this.amount = this.balance
      }
    },
    handleChooseToken(item) {
      this.chooseName = item.name
      this.chooseToken = item.token
      this.dialogVisible = false
    },
    openChooseDia() {
      this.dialogVisible = true
    },
    exchangeRecords() {
      this.showRecord = true
    },
    handleExchange({amount,slipPrice}) {
      console.log(amount,slipPrice)

      if(!amount|| amount>=10000 || amount < 100){
        this.$message("单次限购100~10000枚")
        return;
      }
      this.$store.dispatch("RBD/allowance",{
        owner: this.account ,
        spender:addressArr["RbSeedSubscription"]
      }).then(res => {

        if(res < amount){
          this.$store.dispatch("RBD/approve",{
            spender:addressArr["RbSeedSubscription"],
            amount:this.web3.utils.toWei(( 10 ** 18).toString())
          }).then(res=>{
            console.log(res)
          })
        }
        this.$store.dispatch('RbSeedSubscription/seedSubscription',{value:this.web3.utils.toWei(amount),tokenName:'RBD',token:RBD}).then(()=>{
          this.initData()
        })


        // if (res < amount) {
        //   this.isLoading = true
        //   this.$store.dispatch("erc20/approve", {
        //     contractName: 'SeedSub',
        //     coinName: 'USD',
        //     amount: (this.amount * 10 ** 12).toString()
        //   }).then(() => {
        //     this.isLoading = false
        //     this.$store.dispatch("seedSub/snapUp", amount);
        //   })
        //   return
        // }
        // this.$store.dispatch("seedSub/snapUp", amount).then(() => {
        //   this.isLoading = false
        //   this.$message.success("认购成功")
        //   this.initData()
        //   amount = 0;
        // }).catch((err) => {
        //   this.isLoading = false
        //   this.$message.error("认购失败" + err)
        // });

      })
    },

    initData() {
      if (this.account && this.isConnected) {
        this.$store.dispatch("RbSeedSubscription/digOutAmount").then((res)=>{
          console.log(res)
        })
        this.$store.dispatch("RbSeedSubscription/getUserExtractable").then((res)=>{
          console.log(res)
        })
        this.$store.dispatch("RbSeedSubscription/getUserLockNum").then((res)=>{
          console.log(res)
        })
        this.$store.dispatch("RbSeedSubscription/totalAmount").then((res)=>{
          console.log(res/10**18)
        })
        this.$store.dispatch("RbSeedSubscription/userTotalReceived",this.account).then((res)=>{
          console.log(res)
        })
        //this.$store.dispatch("rainbow/getMyUser", this.account);
        //this.$store.dispatch("RbSeedSubscription/getCurRate");
        // this.$store.dispatch("seedSub/getSubSeedsNum");
        this.$store.dispatch("RBD/balanceOf",this.account).then(res=>{
          this.balance = res/10**18
        });
        // this.$store.dispatch("seedSub/getSubRecords");

      }
    }
  },
  computed: {
    ...mapGetters([
      'web3',
      'isConnected',
      'account'
    ]),
    userId() {
      return this.$store.state.rainbow.userId
    },

    referrerId() {
      return this.$store.state.rainbow.referrerId
    },
    referrerAddress() {
      return this.$store.state.rainbow.referrerAddress
    },
    curRate() {
      return this.$store.state.seedSub.curRate
    },
    curSubNumber() {
      return this.$store.state.seedSub.curSubNumber
    },
    records() {
      return this.$store.state.seedSub.records
    },
    allAmount(){
      return this.$store.state.seedSub.allAmount;
    },
    allUsdtAmount(){
      return this.$store.state.seedSub.allUsdtAmount;
    },
  },
  watch: {

    account() {
      this.initData()
    },

  }

}
</script>
<style lang="scss" scoped>
.seedSub {

  .exchange-record {
    overflow-y: auto;

    .record-item {
      display: flex;
      justify-content: space-between;
      height: 80px;
      border-radius: 20px;
      padding: 10px;
      line-height: 30px;
      margin-top: 10px;

      .left {
        span {
          color: #999;
        }
      }

      .right {
        color: #999;
      }
    }
  }

  .seedSub-panel-header {
    display: flex;
    justify-content: space-between;
  }

  .rainCard-box {

    .fund-content {
      display: flex;
      justify-content: space-around;
      padding-bottom: 30px;

      .fund-keep-box1 .r-line {
        background: linear-gradient(225deg, #7700ff, #ff3b3b);
      }

      .fund-keep-box2 .r-line {
        background: linear-gradient(311deg, #736dff 6%, #a97fff);
      }

      .fund-keep-box3 .r-line {
        background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
      }

      .fund-keep-box4 .r-line {
        background: linear-gradient(135deg, #f9b4bd, #9573db);
      }

      .fund-keep-box5 .r-line {
        background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
      }

      .fund-keep-box1, .fund-keep-box2, .fund-keep-box3, .fund-keep-box4, .fund-keep-box5 {
        width: 260px;
        height: 135px;
        border-radius: 10px;
        overflow: hidden;

        .area {
          height: 100%;
          display: flex;
          padding: 0 30px;
          align-items: center;

          .area-child {
            width: 300px;
            text-align: left;

            > .title {
              height: 20px;
              font-size: 14px;
              padding-bottom: 20px;
              font-family: Roboto, Roboto-Medium;
              color: #999999;
              line-height: 16px;
            }

            p {
              font-weight: 700;
              font-size: 16px;
            }

          }

          img {
            width: 70px;
          }

          .text {
            padding-left: 6px;
            font-size: 24px;
            font-weight: bold;
            color: #FF5657;
          }
        }
      }
    }

    .rainCard-top {
      margin-top: 20px;
      span {
        color: #D2277C;
      }
    }

  }



}
</style>
