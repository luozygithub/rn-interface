<template>
  <div class="lockedAnnouncement">
    <rainbowPanel>
      <template v-slot:name>
        RBT发行类型与状态公示
      </template>
      <template v-slot:content>
        <div class="announcement">
          <div class="announcement-item">
            <img src="../../assets/img/RBT.png" alt="">
            <div>
              <div>
                流通中
                <el-tooltip effect="light" class="item" placement="bottom">
                  <i class="el-icon-question r-rainbow-color"></i>
                  <div slot="content">流通量=从9个矿池子中流出的量-RBT银<br>
                    行锁仓的数量-各种流动性挖矿矿池抵押<br>做流动性的量。
                  </div>
                </el-tooltip>
              </div>
              <div class="number-box">
                数量
                <span class="number r-orange-color">{{ circulationNum  | formatNumberTo}} RBT</span>

              </div>
              <div class="market-value">
                <div class="title">
                  市值
                </div>
                <div style="padding-left: 8px;">
                  <strong> <span class="r-y-color">BTC</span> :{{ 60000000 |formatNumber }}</strong>
                  <strong> <span class="r-g-color">USDT</span> :${{ 60000000 |formatNumber }}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="vertical-line"></div>
          <div class="announcement-item">
            <img src="../../assets/img/RBT.png" alt="">
            <div>
              <p>总发行</p>
              <div class="number-box">
                数量
                <span class="number r-purple-color">{{ issuedNum  | formatNumberToB}} RBT</span>
              </div>
              <div class="market-value">
                <div class="title">
                  市值
                </div>
                <div style="padding-left: 8px;">
                  <strong> <span class="r-y-color">BTC</span> :{{ 60000000 |formatNumber }}</strong>
                  <strong> <span class="r-g-color">USDT</span> :${{ 60000000 |formatNumber }}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="vertical-line"></div>
          <div class="announcement-item">
            <img src="../../assets/img/RBT.png" alt="">
            <div>
              <p>已发行</p>
              <div class="number-box">
                数量
                <span class="number r-yellow-color">{{ issuedNum | formatNumberToB}} RBT</span>

              </div>
              <div class="market-value">
                <div class="title">
                  市值
                </div>
                <div style="padding-left: 8px;">
                  <strong> <span class="r-y-color">BTC</span> :{{ 60000000 |formatNumber }}</strong>
                  <strong> <span class="r-g-color">USDT</span> :${{ 60000000 |formatNumber }}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="vertical-line"></div>
          <div class="announcement-item">
            <img src="../../assets/img/RBT.png" alt="">
            <div>
              <p>未发行</p>
              <div class="number-box">
                数量
                <span class="number r-green-color">{{ unissuedNum | formatNumberToB}} RBT</span>
              </div>
              <div class="market-value">
                <div class="title">
                  市值
                </div>
                <div style="padding-left: 8px;">
                  <strong> <span class="r-y-color">BTC</span> :{{ 60000000 |formatNumber }}</strong>
                  <strong> <span class="r-g-color">USDT</span> :${{ 60000000 |formatNumber }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <el-table
            :data="tableData"
            border
            :summary-method="getSummaries"
            show-summary
            sum-text="汇总"
            style="width: 100%"
        >
          <el-table-column prop="type" label="类型" width="160" align="center">
            <div slot-scope="scope">
              <div class="idx">{{scope.$index+1}}</div> {{scope.row.type}}
            </div>
          </el-table-column>
          <el-table-column prop="sumNum" label="发行数量" align="center">
            <div slot-scope="scope">{{scope.row.sumNum | formatNumberTo}}</div>
          </el-table-column>
          <el-table-column prop="wwNum" label="锁仓合约启动时间" align="center">
          </el-table-column>
          <el-table-column prop="ywNum" label="首次释放时间" align="center">
          </el-table-column>
          <el-table-column prop="sdNum" label="首批锁定周期" align="center">
          </el-table-column>
          <el-table-column prop="dtNum" label="最后释放时间" align="center">
          </el-table-column>
          <el-table-column prop="ytNum" label="总体释放时间" align="center">
          </el-table-column>
          <el-table-column prop="ytNum" label="每月释放时间" align="center">
          </el-table-column>
          <el-table-column prop="ytNum" label="已解锁数量" align="center">
          </el-table-column>
          <el-table-column prop="ytNum" label="待解锁数量" align="center">
          </el-table-column>
          <el-table-column prop="ytNum" label="已提取数量" align="center">
          </el-table-column>
          <el-table-column prop="ytNum" label="当前可提取数量" align="center">
          </el-table-column>
          <el-table-column
              prop="hyAddress"
              label="合约地址"
              align="center"
              width="100px;"
          >
            <template scope="scope">
              <el-button class="button-view" size="mini" v-if="scope.row.mx" @click="handleQuery()"
              >明细
              </el-button
              >
            </template>
          </el-table-column>

        </el-table>
      </template>
    </rainbowPanel>

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
          type: "种子轮投资",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
        {
          type: "彩虹共识挖矿",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
        {
          type: "彩虹贡献挖矿",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
        {
          type: "彩虹邀请挖矿",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
        {
          type: "rbt基金会",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
        {
          type: "创始及管理团队",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
        {
          type: "社区及生态运营",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: "0",
          mx: true,
        },
        {
          type: "RBT彩虹公链",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: "",
          mx: true,
        },
        {
          type: "RBT生态保障基金",
          sumNum: 0,
          wwNum: "-",
          ywNum: 0,
          sdNum: 0,
          ytNum: 0,
          dtNum: 0,
          mx: true,
        },
      ],

      select: {
        address: "",
        amount: "",
      },
    };
  },
  methods: {
    async initData(){
      if (!this.isConnected) {
        this.$message("请先连接钱包")
        return;
      }
      this.tableData[0].sumNum = 100000000
      this.tableData[1].sumNum = 1000000000
      this.tableData[2].sumNum = 700000000
      this.tableData[3].sumNum = 200000000
      this.tableData[4].sumNum = 1400000000
      this.tableData[5].sumNum = 700000000
      this.tableData[6].sumNum = 200000000
      this.tableData[7].sumNum = 400000000
      this.tableData[8].sumNum = 300000000
      },
    handleQuery(){

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
      return (sums);
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

<style lang="scss" s>
.lockedAnnouncement {
  .announcement {
    background: white;
    padding: 0px 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .vertical-line{
      width: 1px;
      height: 40px;
      opacity: 1;
      background: #d8d8d8;
    }

    .announcement-item {
      text-align: left;
      align-items: center;

      height: 120px;
      display: flex;
      .number-box{
        display: flex;
        align-items: center;
        padding: 4px 0;
      }
      .number {
        font-size: 26px;
        font-weight: bold;
        padding: 0 0 0 10px;
      }

      > p {
        height: 50px;
        line-height: 60px;
      }
      img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      .market-value{
        .title{
          width: 30px;
        }
        strong{
          display: block;
          margin-top: 6px;
        }
        display: flex;
      }
    }

    .announcement-item:nth-child(1) .header {
      background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
    }

    .announcement-item:nth-child(3) .header {
      background: linear-gradient(90deg, #44dec5, #4ebcfa);
    }

    .announcement-item:last-child {
      margin-right: 0;
    }
  }
}

</style>

