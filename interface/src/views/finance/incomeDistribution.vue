<template>
  <!--  收入分配公示-->
  <div class="incomeDistribution">
    <div class="rainbow-fund-keep">
      <RainbowPanel>
        <template v-slot:name>
          彩虹城生态基金会
        </template>
        <template v-slot:content>
          <div class="fund-content">
            <SimplePanel class="fund-keep-box1">
              <template v-slot:name>
                本周分配收入(10.1-10.7)
              </template>
              <template v-slot:content>
                <div class="area">
                  <div class="area-child">
                    <div>
                      <div class="r-font-color">
                        $ {{ (RBTFoundation.weekIncome * 20 / 100).toFixed(4) }}
                      </div>
                      <span class="detail r-g-color">
                        +$ {{ (RBTFoundation.todayIncome * 20 / 100).toFixed(2) }}
                      </span>
                    </div>
                  </div>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="fund-keep-box2">
              <template v-slot:name>
                本月分配收入(10.1-10.7)
              </template>
              <template v-slot:content>
                <div class="area">
                  <div class="area-child">
                    <div>
                      <div class="r-font-color">
                        $ {{ (RBTFoundation.monthIncome * 20 / 100).toFixed(4) }}
                      </div>
                      <span class="detail r-g-color">
                          +$ {{ (RBTFoundation.todayIncome * 20 / 100).toFixed(2) }}
                        </span>
                    </div>
                  </div>
                </div>
              </template>
            </SimplePanel>
            <SimplePanel class="fund-keep-box3">
              <template v-slot:name>
                历史总分配
              </template>
              <template v-slot:content>
                <div class="area">
                  <div class="area-child">

                    <div>
                      <div class="r-font-color">
                        $ {{ (RBTFoundation.totalIncome * 20 / 100).toFixed(4) }}
                      </div>
                      <span class="detail r-g-color">
                      +$ {{ (RBTFoundation.todayIncome * 20 / 100).toFixed(2) }}
                    </span>
                    </div>
                  </div>
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
          RBT基金会生态分配
        </template>
        <template v-slot:content>
          <div class="fund-distribution-content">
            <div class="fund-content">
              <SimplePanel class="fund-keep-box1">
                <template v-slot:name>
                  本周分配收入(10.1-10.7)
                </template>
                <template v-slot:content>
                  <div class="area">
                    <div class="area-child">
                      <div>
                        <div class="r-font-color">
                          $ {{ RBTFoundation.weekIncome.toFixed(4) }}
                        </div>
                        <span class="detail r-g-color">
                          +$ {{ RBTFoundation.todayIncome.toFixed(2) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </template>
              </SimplePanel>
              <SimplePanel class="fund-keep-box2">
                <template v-slot:name>
                  本月分配收入(10.1-10.7)
                </template>
                <template v-slot:content>
                  <div class="area">
                    <div class="area-child">
                      <div>
                        <div class="r-font-color">
                          $ {{ RBTFoundation.monthIncome.toFixed(4) }}
                        </div>
                        <span class="detail r-g-color">
                          +$ {{ RBTFoundation.todayIncome.toFixed(2) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </template>
              </SimplePanel>
              <SimplePanel class="fund-keep-box3">
                <template v-slot:name>
                  历史总分配
                </template>
                <template v-slot:content>
                  <div class="area">
                    <div class="area-child">
                      <div>
                        <div class="r-font-color">
                          $ {{ RBTFoundation.totalIncome.toFixed(4) }}
                        </div>
                        <span class="detail r-g-color">
                        +$ {{ RBTFoundation.todayIncome.toFixed(2) }}
                    </span>
                      </div>
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
                    prop="percentage"
                    label="分配占比(%)"
                >
                </el-table-column>
                <el-table-column
                    prop="weekIncome"
                    label="本周收入">
                  <div slot-scope="scope">
                    {{ scope.row.weekIncome | formatNumber }}
                  </div>
                </el-table-column>
                <el-table-column
                    prop="incomeTotal"
                    label="分配总收入">
                  <div slot-scope="scope">
                    {{ scope.row.incomeTotal | formatNumber }}
                  </div>
                </el-table-column>
                <el-table-column label="资金明细">
                  <template slot-scope="scope">
                    <el-button
                        size="mini"
                        class="button-view"
                        @click="viewDetail(scope.$index, scope.row)">查看
                    </el-button>
                  </template>
                </el-table-column>
                <el-table-column
                    prop="balance"
                    label="账户余额">
                </el-table-column>
                <el-table-column label="资金转换">
                  <template slot-scope="scope">
                    <el-button
                        size="mini"
                        class="button1"
                        @click="fundConversion(scope.$index, scope.row)">转换
                    </el-button>
                  </template>
                </el-table-column>
                <el-table-column
                    prop="balanceRBT"
                    label="RBT余额">
                  <div slot-scope="scope">
                    {{ scope.row.balanceRBT | formatNumber }}
                  </div>
                </el-table-column>
                <!-- <el-table-column
                    label="合约地址"
                    width="120">
                  <template slot-scope="scope">
                    <div>
                      {{
                        scope.row.contractAddress ? scope.row.contractAddress.substr(0, 6) + '...' + scope.row.contractAddress.substr(scope.row.contractAddress.length - 4, 4) : ""
                      }}
                    </div>
                  </template>
                </el-table-column> -->
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
  name: "incomeDistribution",

  data() {
    return {
      RBTFoundation: {
        weekIncome: 0,
        monthIncome: 0,
        totalIncome: 0,
        todayIncome: 0,
      },
      tableData: [{
        type: "创始及管理团队",
        percentage: 20,
        weekIncome: 0,
        incomeTotal: 0,
        balance: 56.65,
        balanceRBT: 12000,
        //contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "社区治理基金",
        percentage: 20,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "时间周期锁仓分红收入",
        percentage: 20,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "社区治理锁仓分红收入",
        percentage: 20,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "社区生态奖励基金",
        percentage: 5,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "社区生态孵化基金",
        percentage: 5,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "社区生态慈善基金",
        percentage: 5,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
      }, {
        type: "回购销毁",
        percentage: 5,
        weekIncome: 1205,
        incomeTotal: 1320,
        balance: 56.65,
        balanceRBT: 12000,
        contractAddress: "0xEBC914dC4a563eA6dDEe65616c2C71Ba65F96644"
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
      if (this.isConnected) {
        this.$store.dispatch("incomeDistribution/getPastEvents", {
          contractName: "FoundationToken",
          eventName: "IncomeAllot"
        })
            .then((res) => {
              let weekIncome = this.$decimal(res.week_amount).div(10 ** 18)
              console.log(weekIncome)
              this.RBTFoundation.weekIncome = this.$decimal(res.week_amount).div(10 ** 18)
              this.RBTFoundation.monthIncome = this.$decimal(res.month_amount).div(10 ** 18)
              this.RBTFoundation.totalIncome = this.$decimal(res.total_amount).div(10 ** 18)
              this.RBTFoundation.todayIncome = this.$decimal(res.today_amount).div(10 ** 18)
            })
        this.$store.dispatch("incomeDistribution/getOncePastEvents", {
          contractName: "FoundationToken",
          eventName: "IncomeAllot",
          addr: "ManageTeam"
        })
            .then((res) => {
              this.tableData[0].weekIncome = this.$decimal(res.week_amount).div(10 ** 18)
              this.tableData[0].incomeTotal = this.$decimal(res.total_amount).div(10 ** 18)

            })

        //获取RBT余额
        this.$store.dispatch("incomeSource/getRbtBalance", "ManageTeam")//创始团队
            .then((res) => {
              this.tableData[0].balanceRBT = this.$decimal(res)
              //this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
            })
        this.$store.dispatch("incomeSource/getRbtBalance", "CyCleLockIncome")//创始团队
            .then((res) => {
              this.tableData[2].balanceRBT = this.$decimal(res)
              //this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
            })
      }
    },
    // 查看资金明细
    viewDetail() {
    },
    //  资金转换
    fundConversion() {
    },
    getSummaries(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '汇总';
          return;
        }
        if (index === 1) {
          sums[index] = '';
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
    },
  }
}
</script>

<style lang="scss">
.incomeDistribution {
  .button1 {
    box-shadow: 0px 2px 5px 0px rgba(128, 4, 149, 0.30);
  }

  .rainbow-fund-keep, .fund-distribution {

    .fund-content {
      display: flex;
      justify-content: space-around;

      .fund-keep-box1 {
        .header {
          background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
        }

        .r-font-color {
          background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .fund-keep-box2 {
        .r-font-color {
          background: linear-gradient(270deg, #736dff, #a97fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .fund-keep-box3 {
        .header {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
        }

        .r-font-color {
          background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .fund-keep-box1, .fund-keep-box2, .fund-keep-box3 {
        width: 336px;
        height: 150px;
        border-radius: 10px;
        overflow: hidden;

        .area {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .area-child {
            width: 300px;
            text-align: left;

            > .title {
              height: 20px;
              font-size: 12px;
              font-family: Roboto, Roboto-Medium;
              color: #999999;
              line-height: 16px;
            }

            div {
              font-weight: 700;

              .r-font-color {
                font-size: 26px;
              }

              .detail {
                display: block;
                margin-top: 8px;
              }
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

  .rainbow-fund-keep {
    .fund-content {
      padding-bottom: 30px;
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
