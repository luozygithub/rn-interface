<template>
  <div class="issuePublicity">
    <div class="r-panel">
      <div class="announcement">
        <div class="announcement-left">
          <img src="../../assets/img/RBT.png" alt="">
          <div class="content">
            <div class="name">
              <strong>流通中(RBT)</strong>
              <el-tooltip effect="light" class="tip" placement="bottom">
                <i class="el-icon-question r-rainbow-color"></i>
                <div slot="content">流通量=从9个矿池子中流出的量-RBT银<br>
                  行锁仓的数量-各种流动性挖矿矿池抵押<br>做流动性的量。
                </div>
              </el-tooltip>
            </div>
            <div class="number-box">
              <strong class="number r-rainbow-color">{{ circulationNum |formatNumber }}</strong>
            </div>
            <div class="market-value">
              <div class="title">
                估值(BTC)
              </div>
              <strong class="r-y-color">{{ 60000000 |formatNumber }}</strong>
              <span> ≈${{ 60000000|formatNumber }}</span>
            </div>
          </div>
        </div>
        <div class="announcement-right">
          <div class="announcement-item">
            <div class="name">总发行(RBT)</div>
            <div>
              <span class="number r-purple-color">{{ 5000000000 |formatNumber }}</span>
              <strong> ≈${{ 60000000|formatNumber }}</strong>
            </div>

          </div>
          <div class="announcement-item">
            <div class="name">已发行(RBT)</div>
            <div>
              <span class="number r-yellow-color">{{ issuedNum |formatNumber }}</span>
              <strong>≈${{ 60000000 |formatNumber }}</strong>
            </div>
          </div>
          <div class="announcement-item">
            <div class="name">未发行</div>
            <div>
              <span class="number r-green-color">{{ unissuedNum|formatNumber }} </span>
              <strong>≈${{ 60000000 |formatNumber }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="r-panel" style="margin-top: 20px">
      <tableItem @operateRClick="handleOperateR" v-for="(item,index) in tableData" :key="index" :table-item="item" style="margin-top: 10px"></tableItem>
    </div>
  </div>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "token",

  data() {
    return {
      token: {},
      ower: "",
      aa: false,
      sunNum: 5000000000,
      issuedNum: 2500000000,
      unissuedNum: 1500000000,
      circulationNum: 5000000000,
      lockedNum: '',
      extractedNum: '',
      tableData: [
        {
          index:1,
          name: "种子轮投资",
          operateNameR:"挖矿",
          operateNameG:"合约地址",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ]
        },
        {
          index:2,
          name: "彩虹共识挖矿",
          operateNameD:"明细",
          infoArr:[
            {
              title:"总发行",
              data: "700M RBT"
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],
        },
        {
          index: 3,
          name: "彩虹贡献挖矿",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },
        {
          index: 4,
          name: "彩虹邀请挖矿",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },
        {
          index: 5,
          name: "rbt基金会",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },
        {
          index: 6,
          name: "创始及管理团队",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },
        {
          index: 7,
          name: "社区及生态运营",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },
        {
          index: 8,
          name: "RBT彩虹公链",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },
        {
          index: 9,
          name: "RBT生态保障基金",
          infoArr:[
            {
              title:"总发行",
              data:0
            }
          ],
          detailArr:[
            {
              title:"未发行",
              data:"0"
            },{
              title:"已发行",
              data:"0"
            },{
              title:"锁定中",
              data:"0"
            },{
              title:"已提取",
              data:"0"
            },{
              title:"待提取",
              data:"0"
            }
          ],

        },


      ],
      account1() {
        return this.$store.state.seedSub.account;
      },

      select: {
        address: "",
        amount: "",
      },
    };
  },
  methods: {
    async initData() {
      if (!this.isConnected) {
        this.$message("请先连接钱包")
        return;
      }
      //种子轮投资
      // await this.$store.dispatch("seedSub/getSubRecords")
      this.tableData[0].sumNum = 100000000
      this.tableData[0].wwNum = this.$store.state.seedSub.account
      this.tableData[0].ywNum = 100000000 - this.$store.state.seedSub.account
      //共识挖矿
      await this.$store.dispatch("consensus/getSubData")
      this.tableData[1].sumNum = 1000000000
      this.tableData[1].wwNum = 1000000000 - this.$store.state.consensus.digOutAmount
      this.tableData[1].ywNum = this.$store.state.consensus.digOutAmount

      await this.$store.dispatch("contribution/getSubData")
      this.tableData[2].sumNum = 700000000
      this.tableData[2].wwNum = 700000000 - this.$store.state.contribution.digOutAmount
      this.tableData[2].ywNum = this.$store.state.contribution.digOutAmount

      await this.$store.dispatch("invite/getSubData")
      this.tableData[3].sumNum = 200000000
      this.tableData[3].wwNum = 200000000 - this.$store.state.invite.digOutAmount
      this.tableData[3].ywNum = this.$store.state.invite.digOutAmount

      this.tableData[4].sumNum = 1400000000


      this.tableData[5].sumNum = 700000000


      this.tableData[6].sumNum = 200000000


      this.tableData[7].sumNum = 400000000


      this.tableData[8].sumNum = 300000000

    },
    handleOperateR() {
      console.log("RRRRRRR")
    },
    handleQuery1(name) {
      this.$router.push({name})
    },
    checkAdress() {
      return this.hyAdress
    }
    ,
    getSummaries(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        if (index === 8) {
          sums[index] = "";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));

        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);

        } else {
          sums[index] = "";
        }
      });
      return sums;
    },
  },
  computed: {
    ...mapGetters([
      'account',
      'isConnected'
    ]),
  },
  watch: {
    account() {
      this.initData()
    },
  },
  created() {
    this.initData()
  }


};
</script>

<style lang="scss">
.issuePublicity {
  padding: 20px 0;
  .announcement {
    background: white;
    display: flex;
    justify-content: space-around;

    .vertical-line {
      width: 1px;
      height: 40px;
      opacity: 1;
      background: #d8d8d8;
    }

    .announcement-left {
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      .content {
        .name {
          padding: 10px 0;

          strong {
            margin-right: 6px;
          }

          .tip {
            font-size: 20px;
            position: relative;
            top: 4px;

          }
        }

        .number-box {
          font-size: 22px;
        }

        .market-value {
          margin-top: 10px;

          .title {
            height: 25px;
            font-size: 12px;
            color: #999;
            line-height: 22px;
          }

          strong {
            margin-top: 10px;
            font-size: 18px;
          }

          span {
            margin-left: 6px;
          }
        }
      }
    }

    .announcement-right {
      .announcement-item {
        margin-top: 10px;

        .name {
          height: 17px;
          font-size: 12px;
          color: #333;
          font-weight: bold;
          line-height: 17px;
          margin-bottom: 6px;
        }

        .number {

          font-size: 20px;
          font-weight: bold;
          padding-right: 8px;
        }

      }
    }
  }
}

</style>

