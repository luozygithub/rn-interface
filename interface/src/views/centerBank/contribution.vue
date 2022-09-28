<template>
  <div class="contribution">
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div style="display: flex;justify-content: space-between">
          <span>RBT贡献挖矿矿池</span>
          <el-button class="button-view" @click="showRecord = true" size="mini">
            <i class="el-icon-time"></i>兑换记录
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <ExchangeCard type="contribution" :allowanceNumber="allowanceNumber" cardName="兑换" :balance="balance"
                      :cur-rate="curRate" @handleApprove="handleApprove"
                      @handleExchange="handleExchange"></ExchangeCard>
        <div class="rainCard">
          <div class="exchange">
            <div class="rainCard-header-info">
              <div>
                <span>矿池总数量</span>
                <span><strong>700M</strong> RBT</span>
              </div>
              <div>
                <span>矿池已挖数量</span>
                <span><strong>{{ parseFloat(digOutAmount)| formatNumberTo }} </strong> RBT</span>
              </div>
              <div>
                <span>矿池剩余数量</span>
                <span><strong> {{
                    (700000000 - digOutAmount) ? (700000000 - digOutAmount) : 0 | formatNumberTo
                  }}  </strong> RBT</span>
              </div>
            </div>

          </div>
          <div class="info" style="padding-top: 20px;">
            当前共识挖矿进行 <span class="r-r-color">第2轮</span>,共识挖矿兑换价格为
            <span class="r-r-color">$ 0.1</span>,贡献挖矿RBD兑换价格将按照共识挖矿实时价格进行兑换,RBD价格将按照
            <span class="r-r-color">$ 0.05</span>进行核算.
          </div>
          <div class="intro-box">
            由RBD挖出的RBT按天释放，释放周期为1年，每天释放
            <span class="r-p-color">365分之1</span>，<span class="r-p-color">365天</span>
            释放完毕，未释放的RBT，可以通过RBT银行转换成固定期限锁仓的 <span class="r-p-color">Token——RBT-Deposit</span>，享受更多存款收益和社区治理收益。
          </div>
        </div>
        <div class="r-announcement">
          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                累计挖矿
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number">{{
                      getRbtRecord.allRbt ? (parseFloat(getRbtRecord.allRbt)) : 0 | formatNumberTo
                    }}RBT</span>

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
                  <span class="number"> {{
                      getRbtRecord.lockNum ? (parseFloat(getRbtRecord.lockNum)) : 0 | formatNumberTo
                    }}RBT</span>

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
                  <span class="number">    {{
                      (parseFloat(getRbtRecord.extractable)) | formatNumberTo
                    }}RBT</span>

                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                  <el-button class="button1" style="background: linear-gradient(90deg,#44dec5, #4ebcfa);float: right"
                             size="mini"
                             @click="showExtract = !showExtract">提取
                  </el-button>
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
                  <span class="number">    {{
                      ((getRbtRecord.allRbt - getRbtRecord.lockNum - getRbtRecord.extractable)) | formatNumberTo
                    }} RBT</span>
                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>
        </div>
        <br><br><br>
        <!--        <h2>兑换记录</h2>-->
        <!--        <el-table :data="records" stripe style="width: 100%">-->
        <!--          <el-table-column label="使用USDT">-->
        <!--            <template slot-scope="scope">-->
        <!--              <span>{{ scope.row.usdtAmount }}USDT</span>-->
        <!--            </template>-->
        <!--          </el-table-column>-->

        <!--          <el-table-column label="挖出RBT">-->
        <!--            <template slot-scope="scope">-->
        <!--              <span>{{ scope.row.amount }}RBT</span>-->
        <!--            </template>-->
        <!--          </el-table-column>-->

        <!--          <el-table-column label="挖矿价格">-->
        <!--            <template slot-scope="scope">-->
        <!--              <span>{{ scope.row.price }}u</span>-->
        <!--            </template>-->
        <!--          </el-table-column>-->

        <!--          <el-table-column prop="time" label="时间"></el-table-column>-->
        <!--        </el-table>-->

      </template>

    </RainbowPanel>
    <!--弹窗-->

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
              <img src="../../assets/img/RBT.png" alt="">
              <strong class="r-p-color">{{ (allAmount / 10 ** 18)|formatNumberTo }}</strong> RBT
            </div>
          </div>
          <div>
            <strong>消耗总量：</strong>
            <div class="coin-info">
              <img src="../../assets/img/RBD.png" alt="">
              <strong class="r-p-color">{{ (allRbdAmount / 10 ** 18)|formatNumberTo }}</strong>RBD
            </div>
          </div>
        </div>
        <div class="record-box">
          <div class="record" v-for="(record,index) in records" :key="index">
            <div class="record-time">
              {{ new Date(record.StartTime * 1000) | formatDate }}
            </div>
            <div class="record-content">
              <div>
                <div>使用：</div>
                <div><img class="icon" src="../../assets/img/RBD.png" alt="">{{ record.rbdAmount }}RBD</div>
                <div>≈{{ 6.6 * record.rbdAmount }}</div>
              </div>
              <div>
                <div>兑换：</div>
                <div><img class="icon" src="../../assets/img/RBT.png" alt=""> {{ record.amount }}RBT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
        title="提取"
        :visible.sync="showExtract"
        width="30%"
    >

      <div class="floor1">
        <div></div>
        <div>
          <span>可提取额度:{{ (parseFloat(getRbtRecord.extractable)).toFixed(4) }}</span><br><br>
          <div>
          </div>
        </div>
      </div>
      <div class="floor3">
        <el-button size="mini" @click="extract">提取</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ExchangeCard from "@/components/ExchangeCard";
// import abiUtil from "@/utils/abiUtil";
// import {RBD} from "../../utils/address.json";
import addressArr from "@/utils/address.json"

export default {
  name: "contribution",
  components: {
    ExchangeCard
  },
  data() {
    return {
      balance: 0,
      isLoading: false,
      showRecord: false,
      showExtract: false,
      curCoin: "USDT",
      totalExc: 0, //用户总共挖矿
      userHasReleased: 0, //用户已提取
      waitReceived: 0, //待提取
      takeAmount: 0,
      curRate: 1000,
      allowanceNumber: 0,//剩余授权额度
    };
  },
  computed: {
    ...mapGetters([
      'account',
      'isConnected',
      'web3'
    ]),

    excNumber() {
      return this.amount > 0 ? this.$decimal(this.amount).mul(100).div(this.$store.state.consensus.curRate) : 0;
    },
    digOutAmount() {
      return this.$store.state.contribution.digOutAmount > 0 ? this.$store.state.contribution.digOutAmount : 0;
    },
    allAmount() {
      return this.$store.state.contribution.allAmount;
    },
    allRbdAmount() {
      return this.$store.state.contribution.allRbdAmount;
    },
    records() {
      return this.$store.state.contribution.records;
    },
    getRbtRecord() {
      let obj = Object.assign({}, this.$store.state.contribution.getRbtRecord)
      obj.allRbt > 0 ? '' : obj.allRbt = 0
      obj.extractable > 0 ? "" : obj.extractable = 0
      obj.lockNum > 0 ? '' : obj.lockNum = 0
      return obj;
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      if (this.isConnected) {
        this.$store.dispatch('RBD/balanceOf', this.account).then(res => {
          this.balance = res / 10 ** 18
        });
        this.$store.dispatch("RBD/allowance", {
          owner: this.account,
          spender: addressArr["RbContribution"]
        }).then((res) => {
          this.allowanceNumber = res
        })
      }
    },
    handleApprove() {
      this.$store.dispatch("RBD/approve", {
        spender: addressArr["RbContribution"],
        amount: this.web3.utils.toWei((10 ** 20).toString())
      }).then(() => {
        this.$message("授权成功")
        this.allowanceNumber = 10 ** 22
      })
    },
    handleExchange({amount}) {
      this.executeEXC(amount)
    },
    executeEXC(amount) {

      this.$store.dispatch("RbContribution/getRBT", amount).then(() => {
        this.isLoading = false
        this.$message.success("兑换成功")
        this.initData()
      }).catch((err) => {
        console.log(err)
        this.isLoading = false
        this.$message.error("兑换失败" + err)
      });
    },

    extract() {
      if ((this.getRbtRecord.extractable) <= 0) {
        this.$message({
          message: "无可提取额度",
          type: "error"
        })
        return
      }
      this.$store.dispatch("contribution/extract").then(() => {
        this.$message.success("提取")
        this.initData()
      }).catch(() => {

      });
    },
  },
  watch: {
    account() {
      this.initData()
    },
  },
};
</script>

<style lang="scss">
.contribution {

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
      background: linear-gradient(270deg, #f15887, #fe9b86);
    }

    .number {
      background: linear-gradient(270deg, #f15887, #fe9b86);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .announcement-item:nth-child(2) {
    .number {
      background: linear-gradient(270deg, #736dff, #a97fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .announcement-item:nth-child(3) {
    .header {
      background: linear-gradient(90deg, #44dec5, #4ebcfa);
    }

    .number {
      background: linear-gradient(90deg, #44dec5, #4ebcfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }


  .announcement-item:nth-child(4) {
    .header {
      background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
    }

    .number {
      background-image: -webkit-linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .part2 {
    margin: 60px auto 0;
    width: 800px;

    .outside-box {
      margin-top: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;

      .floor1 {
        border-bottom: 1px solid #ddd;
      }

      .floor1,
      .floor2 {
        display: flex;

        > div:first-child {
          border: none;
        }

        > div {
          padding: 10px;
          width: 25%;
          border-left: 1px solid #ddd;
          text-align: center;
        }
      }
    }

  }
}
</style>
