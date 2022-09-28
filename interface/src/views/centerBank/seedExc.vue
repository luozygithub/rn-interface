<template>
  <div class="seed-exchange">
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div class="seedSub-panel-header">
          <span>RBT种子轮兑换矿池</span>
          <el-button class="button-view" @click="showRecord=!showRecord" size="mini">
            <i class="el-icon-time"></i>兑换记录
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <ExchangeCard type="seedExc" cardName="兑换" :allowanceNumber="allowanceNumber" :balance="balance"
                      :cur-rate="curRate" @handleApprove="handleApprove"
                      @handleExchange="handleExchange"></ExchangeCard>
        <div class="announcement">
          <div class="announcement-item">
            <SimplePanel>.el-dialog
              <template v-slot:name>
                已挖出
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number">{{ userHasExtracted | formatNumber }}  RBT</span>
                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>

          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                锁定中
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number"> {{ userLocknum | formatNumberTo }}RBT</span>
                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>
          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                已提取
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number">{{ userHasExtracted | formatNumber }}  RBT</span>
                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>
          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                待提取
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <strong class="number"> {{ extractable | formatNumberTo }}RBT</strong>
                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                  <el-button class="button1" size="mini"
                             style="background:linear-gradient(90deg, #44dec5, #4ebcfa);;float: right"
                             @click="showExtract = !showExtract">提取
                  </el-button>
                </div>
              </template>
            </SimplePanel>
          </div>
        </div>

      </template>
    </RainbowPanel>
    <!--  弹窗-->
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
              <strong class="r-p-color">{{ totalAmount|formatNumberTo }}</strong> RBT
            </div>
          </div>
          <div>
            <strong>消耗总量：</strong>
            <div class="coin-info">
              <img src="../../assets/img/DAI.png" alt="">
              <strong class="r-p-color">{{ totalAmount|formatNumberTo }}</strong>RBT-SEED
            </div>
          </div>
        </div>
        <div class="record-box">
          <div class="record" v-for="(record,index) in records" :key="index">
            <div class="record-time">
              {{ record.excStartTime }}
            </div>
            <div class="record-content">
              <div>
                <div>使用：</div>
                <div><img class="icon" src="../../assets/img/DAI.png" alt="">{{ record.amount }}RBT-SEED</div>

              </div>
              <div>
                <div>兑换：</div>
                <div><img class="icon" src="../../assets/img/SEED.png" alt=""> {{ record.amount }}RBT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
        title="提取RBT"
        :visible.sync="showExtract"
        width="30%"
    >
      <div>
        <div>
          <el-button size="mini" @click="extract">提取全部</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import ExchangeCard from "@/components/ExchangeCard";
import addressArr from "@/utils/address.json"

export default {
  name: "seed",
  components: {
    ExchangeCard
  },
  data() {
    return {
      allowanceNumber: 0,//授权剩余额度
      isLoading: false,
      showExtract: false,
      showRecord: false,
      amount: 0,
      mortgageData: null,
      allowance: 0,
      curCoin: 'Seed',
      curRate: 1000,
      dialogVisible: false,//弹窗
      totalAmount: 0,//总量
      userLocknum: 0,//锁仓
      extractable: 0,//待取
      userHasExtracted: 0,//已挖
      balance: 0
    }
  },

  watch: {
    account() {
      this.getData()
    },

  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account',
      'web3'
    ]),
    // totalAmount() {
    //   return this.$store.state.seedExc.totalExc
    // },

    userHasReleased() {
      return this.$store.state.seedExc.released
    },
    records() {
      return this.$store.state.seedExc.records
    },
  },
  mounted() {
    this.getData();
  },
  methods: {

    getData() {
      if (!this.isConnected) {
        return
      }
      this.$store.dispatch("RBTSeed/balanceOf", this.account).then(res => {
        this.balance = res / 10 ** 18
      })
      this.$store.dispatch("RBTSeed/allowance", {
        owner: this.account,
        spender: addressArr["RbSeedExchange"]
      }).then((res) => {
        this.allowanceNumber = res
      })
      this.$store.dispatch("RbSeedExchange/getRbtRecord", this.account).then(res => {
        this.totalAmount = res[0];
        this.userLocknum = res[1];
        this.extractable = res[2];
        this.userHasExtracted = res[0] - res[1];
      })
    },
    handleApprove() {
      this.$store.dispatch("RBD/approve", {
        spender: addressArr["RbSeedExchange"],
        amount: this.web3.utils.toWei((10 ** 20).toString())
      }).then(() => {
        this.$message("授权成功")
        this.allowanceNumber = 10 ** 22
      })
    },
    // 兑换
    handleExchange({amount}) {
      this.executeEXC(amount)
    },
    executeEXC(amount) {
      this.$store.dispatch("RbSeedExchange/exchange", amount).then(() => {
        this.isLoading = false
        this.$message.success("兑换成功")
        this.getData()
      }).catch((err) => {
        this.isLoading = false
        this.$message.error("兑换失败" + err)
      });
    },
    //  提取
    extract() {
      if ((this.userHasReleased - this.userHasExtracted) <= 0) {
        this.$message({
          message: "无可提取额度",
          type: "error"
        })
        return
      }
      this.$store.dispatch("seedExc/seedExtract").then(() => {
        this.$message.success("提取成功")
        this.showExtract = false
        this.getData()
      }).catch((err) => {
        this.$message.error("提取失败" + err)
      });
    },

    //  提取
    extractOne(index) {
      console.log(index)
      this.$store.dispatch("seedExc/seedExtractOne",).then(() => {
        this.$message("提取")
      }).catch(() => {

      });
    }
  },
}
</script>

<style lang="scss">

.seed-exchange {

  .announcement {
    flex-wrap: wrap;
    padding: 20px 0 30px 0;
    display: flex;
    justify-content: space-between;

    .announcement-item {
      .simplePanel {
        width: 240px;

        .content {
          padding-top: 10px;
        }
      }

      .number {
        font-size: 20px;
        font-weight: bold;
        padding: 0 8px;
      }
    }

    .announcement-item:nth-child(1) {
      .header {
        background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
      }

      .number {
        background-image: -webkit-linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:nth-child(2) {
      .number {
        background-image: linear-gradient(270deg, #736dff, #a97fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:nth-child(3) {
      .header {
        background: linear-gradient(135deg, #f9b4bd, #9573db);
      }

      .number {
        background: linear-gradient(135deg, #f9b4bd, #9573db);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:nth-child(4) {
      .header {
        background: linear-gradient(90deg, #44dec5, #4ebcfa);
      }

      .number {
        background: linear-gradient(90deg, #44dec5, #4ebcfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

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
      width: 570px;
      margin: 0 auto;
      height: 44px;
      font-weight: bold;

      span {
        color: #D2277C;
      }
    }

  }


}


</style>
