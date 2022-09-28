<template>
  <!--  收入分红公示-->
  <div class="income-dividends">
    <div class="rainbow-fund-keep">
      <RainbowPanel>
        <template v-slot:name>
          时间周期锁仓分红
        </template>
        <template v-slot:content>
          <div class="fund-content">
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                <div>累计总分红数量</div>
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div class="area">
                  <div><span class="r-grey-color">数量</span> <span class="number">{{ 3000000|formatNumber }}RBT</span>
                  </div>
                  <div class="bottom">
                    <div class="left">
                      <span class="r-grey-color">价值</span> BTC${{ 6000000|formatNumber }}.00
                    </div>

                  </div>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="distribution-item">
              <template v-slot:name>

                <div> 目前可分红数量</div>
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div class="area">
                  <div><span class="r-grey-color">数量</span> <span class="number">{{ 3000000|formatNumber }}RBT</span>
                  </div>
                  <div class="bottom">
                    <div class="left">
                      <span class="r-grey-color">价值</span> BTC${{ 6000000|formatNumber }}.00
                    </div>
                    <el-button size="mini button1">分红</el-button>
                  </div>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                <div> 本人已分红数量</div>
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div class="area">
                  <div><span class="r-grey-color">数量</span> <span class="number">{{ 3000000|formatNumber }}RBT</span>
                  </div>
                  <div class="bottom">
                    <div class="left">
                      <span class="r-grey-color">价值</span> BTC${{ 6000000|formatNumber }}.00
                    </div>
                    <el-button size="mini button1">提取</el-button>
                  </div>
                </div>
              </template>
            </SimplePanel>

          </div>
          <div class="distribution-list">
            <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                show-summary
                :summary-method="getSummaries"
            >
              <el-table-column
                  prop="type"
                  label="类型"
                  width="180">
                <div slot-scope="scope">
                  <div class="idx">{{ scope.$index + 1 }}</div>
                  {{ scope.row.type }}
                </div>
              </el-table-column>
              <el-table-column
                  prop="dividendWeight"
                  label="分红权重"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="depositAmount"
                  label="抵押凭证实时数量">
                <div slot-scope="scope">
                  {{ scope.row.depositAmount | formatNumber }}
                </div>
              </el-table-column>
              <el-table-column
                  prop="lockAmount"
                  label="包含RBT锁仓数量">
                <div slot-scope="scope">
                  {{ scope.row.lockAmount | formatNumber }}
                </div>
              </el-table-column>
              <el-table-column
                  prop="addRBTWeight"
                  label="加权后RBT权重数量">
                <div slot-scope="scope">
                  {{ scope.row.addRBTWeight | formatNumber }}
                </div>
              </el-table-column>
            </el-table>
          </div>

          <div class="distribution-box">
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                目前可分红RBT数量
              </template>
              <template v-slot:content>
                <div class="area">
                  <strong class="number">5,000,000.00 RBT</strong>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                权重汇总总量
              </template>
              <template v-slot:content>
                <div class="area">
                  <strong class="number">5,000,000.00</strong>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                单个权重分红
              </template>
              <template v-slot:content>
                <div class="area">
                  <strong class="number">5,000,000.00</strong>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                本人当前分红权重
              </template>
              <template v-slot:content>
                <div class="area">
                  <strong class="number">5,000,000.00</strong>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="distribution-item">
              <template v-slot:name>
                本人当前可实时分红数量
              </template>
              <template v-slot:content>
                <div class="area">
                  <strong class="number">5,000,000.00 RBT</strong>
                </div>
              </template>
            </SimplePanel>
          </div>
        </template>
      </RainbowPanel>
    </div>
    <div class="fund-distribution">
      <RainbowPanel>
        <template v-slot:name>
          <div style="display: flex;justify-content: space-between;">
            社区治理锁仓分红
            <el-button
                size="mini"
                class="button-view"
                @click="dividends(scope.$index, scope.row)">
              分红记录
            </el-button>
          </div>
        </template>
        <template v-slot:content>
          <div class="fund-distribution-content">
            <div class="fund-content">
              <SimplePanel class="distribution-item">
                <template v-slot:name>
                  <div>累计总分红数量</div>
                  <img src="../../assets/img/RBT.png" alt="">
                </template>
                <template v-slot:content>
                  <div class="area">
                    <div><span class="r-grey-color">数量</span> <span class="number">{{ 3000000|formatNumber }}RBT</span>
                    </div>
                    <div class="bottom">
                      <div class="left">
                        <span class="r-grey-color">价值</span> BTC${{ 6000000|formatNumber }}.00
                      </div>

                    </div>
                  </div>
                </template>
              </SimplePanel>
              <SimplePanel class="distribution-item">
                <template v-slot:name>

                  <div> 目前可分红数量</div>
                  <img src="../../assets/img/RBT.png" alt="">
                </template>
                <template v-slot:content>
                  <div class="area">
                    <div><span class="r-grey-color">数量</span> <span class="number">{{ 3000000|formatNumber }}RBT</span>
                    </div>
                    <div class="bottom">
                      <div class="left">
                        <span class="r-grey-color">价值</span> BTC${{ 6000000|formatNumber }}.00
                      </div>
                      <el-button size="mini button1">分红</el-button>
                    </div>
                  </div>
                </template>
              </SimplePanel>
              <SimplePanel class="distribution-item">
                <template v-slot:name>
                  <div> 本人已分红数量</div>
                  <img src="../../assets/img/RBT.png" alt="">
                </template>
                <template v-slot:content>
                  <div class="area">
                    <div><span class="r-grey-color">数量</span> <span class="number">{{ 3000000|formatNumber }}RBT</span>
                    </div>
                    <div class="bottom">
                      <div class="left">
                        <span class="r-grey-color">价值</span> BTC${{ 6000000|formatNumber }}.00
                      </div>
                      <el-button size="mini button1">提取</el-button>
                    </div>
                  </div>
                </template>
              </SimplePanel>
            </div>
            <div class="distribution-list">
              <el-table
                  :data="tableData2"
                  style="width: 100%;margin-bottom: 20px;"
                  row-key="id"
                  border
                  default-expand-all
              >
                <el-table-column
                    type="index"
                    width="30">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="分配方向"
                >
                </el-table-column>
                <el-table-column
                    prop="percentage"
                    label="凭证代码"
                >
                </el-table-column>
                <el-table-column
                    prop="weekIncome"
                    label="分红比例">
                </el-table-column>
                <el-table-column
                    prop="incomeTotal"
                    label="分配总收入">
                </el-table-column>
                <el-table-column label="当前实时令牌数量">
                  <template slot-scope="scope">
                    <el-button
                        size="mini"
                        class="button3"
                        @click="viewDetail(scope.$index, scope.row)">View
                    </el-button>
                  </template>
                </el-table-column>
                <el-table-column
                    prop="balance"
                    label="本期可实时分配金额">
                  <template slot="header">
                    <div style="text-align: center">
                      本期可<br/>实时分配金额
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="单个凭证可分红数量">
                  <template slot="header">
                    <div style="text-align: center">
                      单个凭<br/>证可分红数量
                    </div>
                  </template>
                  <template slot-scope="scope">
                    <el-button
                        size="mini"
                        class="button1"
                        @click="fundConversion(scope.$index, scope.row)">View
                    </el-button>
                  </template>
                </el-table-column>
                <el-table-column
                    prop="balanceRBT"
                    label="本人当前持有令牌数量">
                  <template slot="header">
                    <div style="text-align: center">
                      本人当<br/>前持有令牌数量
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                    label="本人可分红RBT数量"
                >
                  <template slot="header">
                    <div style="text-align: center">
                      本人可<br/>分红RBT数量
                    </div>
                  </template>
                  <template slot-scope="scope">
                    <div>
                      {{
                        scope.row.contractAddress ? scope.row.contractAddress.substr(0, 6) + '...' + scope.row.contractAddress.substr(scope.row.contractAddress.length - 4, 4) : ""
                      }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </template>
      </RainbowPanel>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "incomeDividends",

  data() {
    return {
      currentAccount: 0,
      tableData1: [{
        type: "创始及管理团队",
        dividendWeight: 20,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "社区治理基金",
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }],
      tableData2: [],
      tableData: [{
        type: "活期",
        month: 0,
        dividendWeight: 1,
        percentage: 20,
        depositAmount: 20,
        lockAmount: 1320,
        addRBTWeight: 20
      }, {
        type: "3个月",
        month: 3,
        dividendWeight: 2,
        percentage: 20,
        depositAmount: 20,
        lockAmount: 1320,
        addRBTWeight: 20
      }, {
        type: "6个月",
        month: 6,
        dividendWeight: 3,
        percentage: 20,
        depositAmount: 20,
        lockAmount: 1320,
        addRBTWeight: 20
      }, {
        type: "12个月",
        month: 12,
        dividendWeight: 4,
        percentage: 20,
        depositAmount: 20,
        lockAmount: 1320,
        addRBTWeight: 20
      }, {
        type: "24个月",
        month: 24,
        dividendWeight: 5,
        percentage: 20,
        depositAmount: 20,
        lockAmount: 1320,
        addRBTWeight: 20
      }, {
        type: "36个月",
        month: 36,
        dividendWeight: 6,
        percentage: 20,
        depositAmount: 20,
        lockAmount: 1320,
        addRBTWeight: 20
      }]
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  watch: {
    account() {
      this.initData()
    },
    isConnected() {
      this.initData()
    },
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      if (!this.isConnected) {
        this.$message("请先连接钱包")
        return;
      }

      // for(let i =0;i < this.tableData.length;i++){
      //   this.$store.dispatch("incomeDistribution/getEffective",this.tableData[i].month)
      //   .then((res) => {
      //     console.log(res)
      //     this.tableData[i].depositAmount =  this.$decimal(res[0]).div(10**18)
      //     this.tableData[i].lockAmount =  this.$decimal(res[1]).div(10**18)
      //     this.tableData[i].lockAmount =  this.$decimal(res[1]).mul(this.tableData[i].dividendWeight).div(10**18)
      //   })
      // }

      this.$store.dispatch("incomeSource/getRbtBalance", "CyCleLockIncome")//创始团队
          .then((res) => {
            this.currentAccount = this.$decimal(res)
          })
      // this.$store.dispatch("incomeDistribution/getUserBonus")//创始团队
      //   .then((res) => {
      //     this.currentAccount = this.$decimal(res)
      //   })


    },
    fundConversion() {
    },
    viewDetail() {

    },
    // 分红
    dividends() {
      this.$store.dispatch("incomeDistribution/bonus")//创始团队
          .then((res) => {
            this.currentAccount = this.$decimal(res)
          })
    },
    // 提取
    extract() {

    },
    getSummaries(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '权重汇总总量';
          return;
        } else if (index < 3) {
          sums[index] = ''
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = this.$decimal(curr);
            if (!isNaN(value)) {
              //console.log("old:"+prev+"-new:"+curr)
              return this.$decimal(prev).add(this.$decimal(curr));
            } else {
              return this.$decimal(prev);
            }
          }, 0);

          sums[index] += ' ';
        } else {
          sums[index] = '';
        }
      });
      return sums;
    }
  }
}
</script>

<style lang="scss" scoped>
.income-dividends {

  .rainbow-fund-keep, .fund-distribution {

    .distribution-box {
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;

      .distribution-item {
        width: 200px;
        min-width: 180px;
        height: 125px;

        .area {
          text-align: left;

          div {
            padding-bottom: 10px;
          }

          strong {
            font-size: 16px;
          }
        }

      }

      ::v-deep.distribution-item:nth-child(1) {
        .header {
          background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
        }

        .number {
          background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

      }

      ::v-deep.distribution-item:nth-child(2) {
        .number {
          background: linear-gradient(311deg, #736dff 6%, #a97fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

      }

      ::v-deep.distribution-item:nth-child(3) {
        .header {
          background: linear-gradient(90deg, #f7c598, #ff8886);
        }

        .number {
          background: linear-gradient(90deg, #f7c598, #ff8886);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      ::v-deep.distribution-item:nth-child(4) {
        .header {
          background: linear-gradient(135deg, #f9b4bd, #9573db);
        }

        .number {
          background: linear-gradient(135deg, #f9b4bd, #9573db);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      ::v-deep.distribution-item:nth-child(5) {
        .header {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
        }

        .number {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

      }

    }

    .fund-content {
      display: flex;
      justify-content: space-around;
      padding-bottom: 30px;

      .distribution-item {
        line-height: 24px;

        .r-grey-color {
          padding-right: 6px;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
        }

        .number {
          font-size: 16px;
          font-weight: bold;
        }
      }

      ::v-deep.distribution-item:nth-child(1) {
        .number {
          background: linear-gradient(311deg, #736dff 6%, #a97fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      ::v-deep.distribution-item:nth-child(2) {
        .header {
          background: linear-gradient(90deg, #f7c598, #ff8886);
        }

        .number {
          background: linear-gradient(90deg, #f7c598, #ff8886);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .button1 {
          background: linear-gradient(90deg, #f7c598, #ff8886);
          box-shadow: 0px 3px 5px 0px rgba(255, 137, 135, 0.30);
        }
      }

      ::v-deep.distribution-item:nth-child(3) {
        .header {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
        }

        .number {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .button1 {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
          box-shadow: 0px 3px 5px 0px rgba(68, 222, 197, 0.50);
        }
      }

      .fund-keep-box1, .fund-keep-box2, .fund-keep-box3 {
        width: 360px;
        height: 150px;
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
              font-size: 18px;
              padding-bottom: 20px;
              font-family: Roboto, Roboto-Medium;
              color: #999999;
              line-height: 16px;
            }

            div {
              p {
                font-weight: 700;
              }

              display: flex;
              align-items: center;
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
  }

  .fund-distribution {
    margin-top: 20px;

    .distribution-list {
      margin-top: 30px;
    }
  }
}
</style>
