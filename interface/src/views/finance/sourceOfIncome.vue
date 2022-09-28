<template>
  <!--  收入来源公式-->
  <div class="sourceOfIncome">

    <div class="rainbow-fund-keep">
      <RainbowPanel>
        <template v-slot:name>
          RBT财政部收入公示
        </template>
        <template v-slot:content>
          <div class="fund-distribution-content">
            <div class="distribution-list">
              <el-table
                  :data="tableData"
                  border
                  default-expand-all
                  show-summary
                  :summary-method="getSummaries"
              >
                <el-table-column
                    prop="name"
                    label="类型"
                    align="center"
                    width="180">
                  <div slot-scope="scope">
                    <div class="idx">{{ scope.$index + 1 }}</div>
                    {{ scope.row.name }}
                  </div>
                </el-table-column>
                <el-table-column
                    prop="weekIncome"
                    label="本周收入($)"
                    width="180">
                  <div slot-scope="scope">
                    {{ scope.row.weekIncome| formatNumberTo }}
                  </div>
                </el-table-column>
                <el-table-column
                    prop="monthIncome"
                    label="本月收入($)">
                  <div slot-scope="scope">
                    {{ scope.row.monthIncome | formatNumberTo }}
                  </div>
                </el-table-column>
                <el-table-column
                    prop="totalIncome"
                    label="总收入($)">
                  <div slot-scope="scope">
                    {{ scope.row.totalIncome | formatNumberTo }}
                  </div>
                </el-table-column>
                <el-table-column label="账户明细">
                  <template slot-scope="scope" v-if="scope.row.type<6">
                    <el-button
                        size="mini"
                        class="button-view"
                        @click="viewDetail(scope.$index, scope.row)">查看
                    </el-button>
                  </template>
                </el-table-column>

              </el-table>
            </div>
          </div>

          <el-button class="button1" size="small" @click="isShowDistribute = true">分配</el-button>

        </template>
      </RainbowPanel>
      <!-- 转让弹窗-->
      <el-dialog
          title="分配详情"
          :visible.sync="isShowDistribute"
          width="400px"
      >
        <div class="distribute">
          <template>
            <el-table
                :data="tableData3"
                style="width: 100%">
              <el-table-column
                  prop="direct"
                  width="150px;"
                  label="分配方向">
              </el-table-column>
              <el-table-column
                  prop="secondRatio"
                  label="占比">
              </el-table-column>
            </el-table>
          </template>
          <div class="operating">
            <el-button size="small" class="button3" @click="isShowDistribute=false">Cancel</el-button>
            <el-button size="small " class="button1" @click="allot">分配</el-button>
          </div>
        </div>
      </el-dialog>
    </div>


    <div class="fund-distribution">
      <RainbowPanel>
        <template v-slot:name>
          RBT基金会生态分配
        </template>
        <template v-slot:content>
          <div class="fund-distribution-content">
            <div class="distribution-list">
              <el-table
                  :data="tableData2"
                  border
                  default-expand-all
              >
                <el-table-column
                    prop="name"
                    label="类型"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="ratio"
                    label="分配比率"
                    align="center">
                </el-table-column>
                <el-table-column
                    align="center"
                    label="账户余额($)">
                  <template slot-scope="scope">
                    {{ scope.row.balance }}
                  </template>
                </el-table-column>
              </el-table>

            </div>

            <div class="distribution-list">
              <el-table
                  :data="tableData3"
                  border
                  class="table2"
                  default-expand-all :span-method="objectSpanMethod"
              >
                <el-table-column
                    prop="name"
                    label="类型"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="firstRatio"
                    label="分配比率"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="direct"
                    width="180"
                    label="分配方向">
                </el-table-column>
                <el-table-column
                    prop="secondRatio"
                    label="占比">
                </el-table-column>

                <el-table-column
                    label="账户余额($)">
                  <template slot-scope="scope">
                    {{ scope.row.balance }}
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
// import addressArr from "@/utils/address.json"



export default {
  name: "sourceOfIncome",

  data() {
    return {
      zoologyNum: 0,
      isShowDistribute: false,
      tableData: [
        {
          name: "RBT生态税收收入",
          weekIncome: 0,
          monthIncome: 0,
          totalIncome: 0,
          type: 1,

        },
        {
          name: "RBT共识挖矿收入",
          weekIncome: 0,
          monthIncome: 0,
          totalIncome: 0,
          type: 2
        },
        {
          name: "全球vip生态居民收入",
          weekIncome: 0,
          monthIncome: 0,
          totalIncome: 0,
          type: 3
        },
        {
          name: "彩虹交易所收入",
          weekIncome: 0,
          monthIncome: 0,
          totalIncome: 0,
          type: 4
        },
        {
          name: "彩虹银行收入",
          weekIncome: 0,
          monthIncome: 0,
          totalIncome: 0,
          type: 5
        },
      ],

      tableData2: [
        {
          name: "彩虹城生态基金会",
          ratio: "20%",
          balance: 0.00,
        }
      ],
      tableData3: [
        {
          name: "财政部分配",
          firstRatio: "80%",
          direct: "创始及管理团队",
          secondRatio: "20%",
          balance: 0,
          index: 0
        },
        {
          direct: "社区治理基金",
          secondRatio: "20%",
          balance: 0
        },
        {
          direct: "时间周期锁仓分红收入",
          secondRatio: "20%",
          balance: 0
        },
        {
          direct: "社区治理锁仓分红收入",
          secondRatio: "20%",
          balance: 0
        },
        {
          direct: "社区生态奖励基金",
          secondRatio: "5%",
          balance: 0
        },
        {
          direct: "社区生态孵化基金",
          secondRatio: "5%",
          balance: 0
        },
        {
          direct: "社区生态慈善基金",
          secondRatio: "5%",
          balance: 0
        },
        {
          direct: "二级市场回购",
          secondRatio: "5%",
          balance: 0
        },
        {
          direct: "汇总",
          secondRatio: "100%",
          balance: 0
        },
      ]
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    incomeLog() {
      return this.$store.state.incomeSource.incomeLog
    },
    receives(){
      return this.$store.state.incomeSource.receives
    },
    weekAmount(){
      return this.$store.state.incomeSource.weekAmount
    },
    monthAmount(){
      return this.$store.state.incomeSource.monthAmount
    }
  },
  watch: {
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
        let nowDate = new Date();
        console.log(nowDate);
          let date = {
              year: nowDate.getFullYear(),
              month: nowDate.getMonth() + 1,
              date: nowDate.getDate(),
          }
          console.log(date);
        this.$store.dispatch("incomeSource/getReceiveList", {tokenAddress: "0xbb25bebf85652dd247afc91054fbd85eb16a46a1", source: 11})
            .then(() => {
              // this.tableData[0].totalIncome = this.$decimal(res.amount);
              this.tableData[0].totalIncome = this.$decimal(this.receives.amount);
              
              console.log(this.receives);
            })
        this.$store.dispatch("incomeSource/getWeekReceiveList", {tokenAddress: "0xbb25bebf85652dd247afc91054fbd85eb16a46a1", source: 11})
            .then(() => {
              // this.tableData[0].totalIncome = this.$decimal(res.amount);
              this.tableData[0].weekIncome = this.weekAmount;
              
              console.log(this.weekAmount);
            })
          this.$store.dispatch("incomeSource/getMonthReceiveList", {tokenAddress: "0xbb25bebf85652dd247afc91054fbd85eb16a46a1", source: 11})
            .then(() => {
              // this.tableData[0].totalIncome = this.$decimal(res.amount);
              this.tableData[0].monthIncome = this.monthAmount;
              
              console.log(this.monthAmount);
            })


        //查询生态合约RBT余额
        // this.$store.dispatch("incomeSource/getRbtBalance", "ManageTeam")//创始团队
        //     .then((res) => {
        //       this.tableData3[0].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })
        // this.$store.dispatch("incomeSource/getRbtBalance", "RbtCommunityTeam")//社区治理团队
        //     .then((res) => {
        //       this.tableData3[1].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })
        // this.$store.dispatch("incomeSource/getRbtBalance", "CyCleLockIncome")//周期锁仓分红
        //     .then((res) => {
        //       this.tableData3[2].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })
        // this.$store.dispatch("incomeSource/getRbtBalance", "CommunityLockIncome")//社区治理锁仓分红
        //     .then((res) => {
        //       this.tableData3[3].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })

        // this.$store.dispatch("incomeSource/getRbtBalance", "ZoologyAwardFund")//社区生态奖励
        //     .then((res) => {
        //       this.tableData3[4].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })
        // this.$store.dispatch("incomeSource/getRbtBalance", "ZoologyHatchFund")//社区生态孵化
        //     .then((res) => {
        //       this.tableData3[5].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })

        // this.$store.dispatch("incomeSource/getRbtBalance", "ZoologyCharityFund")//社区生态慈善
        //     .then((res) => {
        //       this.tableData3[6].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })

        // this.$store.dispatch("incomeSource/getRbtBalance", "SecondaryMarket")//二级市场回购
        //     .then((res) => {
        //       this.tableData3[7].balance = this.$decimal(res)
        //       this.tableData3[8].balance = this.$decimal(res).add(this.tableData3[8].balance)
        //     })
      }

    },

    getSummaries(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = ' 财政部总收入';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = this.$decimal(curr);
            if (!isNaN(value)) {
              //console.log("old:"+prev+"-new:"+curr)
              return this.$decimal(prev).add(this.$decimal(curr)).toFixed(2);
            } else {
              return this.$decimal(prev).toFixed(2);
            }
          }, 0);

          sums[index] += ' ';
        } else {
          sums[index] = '';
        }
      });
      return sums;
    },
    toFoundation(type) {
      console.log(type)
      this.$store.dispatch("incomeSource/toFoundation", type)
          .then((res) => {
            if (res != null) {
              this.$message("成功归集到基金会！")
            }
          });
    },
    allot() {
      this.$store.dispatch("incomeSource/allot")
          .then((res) => {
            if (res != null) {
              this.isShowDistribute = false
              this.$message("分配成功")
              this.initData()
            }
          }).catch(() => {
        this.$message("分配失败")
      });
    },
    received() {
      this.$store.dispatch("incomeSource/received")
          .then((res) => {
            if (res != null) {
              this.$message("领取成功")
            }
          });
    },
    goTo(src) {
      this.$router.push(src);
    },
    viewDetail() {
      this.$message("努力开发中，敬请期待！")
    },
    objectSpanMethod({rowIndex, columnIndex}) {
      if (columnIndex == 0) {
        if (rowIndex == 0) {
          return {
            rowspan: 9,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }

      if (columnIndex == 1) {
        if (rowIndex == 0) {
          return {
            rowspan: 9,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }

    },

  }
}
</script>

<style lang="scss" scoped>
.fund-distribution ::v-deep .el-table__row td:first-child div {
  color: #2c3e50;

  &:hover td:first-child {
    padding-left: 0px;
    border-left: 0 !important;
  }
}

.sourceOfIncome {
  .button1 {
    box-shadow: 0px 2px 5px 0px rgba(128, 4, 149, 0.30);
  }

  .rainbow-fund-keep, .fund-distribution {
    margin-top: 20px;

    .fund-content {
      display: flex;
      justify-content: space-around;
      padding-bottom: 30px;

      .fund-keep-box2 .r-line {
        background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
      }

      .fund-keep-box1 .r-line {
        background: linear-gradient(311deg, #736dff 6%, #a97fff);
      }

      .fund-keep-box3 .r-line {
        background: linear-gradient(134deg, #44dec5 9%, #4ebcfa);
      }

      .fund-keep-box1, .fund-keep-box2, .fund-keep-box3 {
        width: 360px;
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
    .distribution-list {
      margin-top: 30px;
    }
  }

  .button1 {
    float: right;
    margin-bottom: 2%;
  }

  .distribute {
    .tip {
      display: flex;
      justify-content: space-between;

      span:first-child {
        color: #736DFF;
      }
    }

    > div {
      margin-top: 10px;
    }

    .price-box {
      width: 380px;
      background: #f8f8f8;
      border: 1px solid #eaeaea;
      border-radius: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 20px;

      .input-box {
        width: 260px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        border-radius: 6px;
        display: flex;
      }
    }

    .operating {
      display: flex;
      justify-content: space-between;

      .el-button {
        width: 150px;
      }
    }
  }

  .table2 {
    ::v-deep .el-table__row:first-child {
      td:last-child {
        padding-left: 0px !important;
      }

      &:hover td {
        background-color: white;
      }

      &:hover td:first-child {
        padding-left: 0px;
        border-left: 0px solid #736DFF !important;
      }

      &:hover td:nth-child(3) {
        padding-left: 0px;
        border-left: 6px solid #736DFF !important;
      }
    }
  }
}
</style>
