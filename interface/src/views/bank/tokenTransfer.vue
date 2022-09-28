<template>
  <!--  令牌转让市场-->
  <div class="tokenTransfer">
    <!-- <singleNav :nav-list="navList" v-model="activeIndex"></singleNav> -->
    <RainbowPanel v-show="activeIndex==0">
      <template v-slot:name>
        <div style="display: flex;justify-content: space-between;">
          <span style="font-size: 18px;">我的RBT-deposit
            <span class="erc-info">ERC721</span>
          </span>
          <el-button @click="isShowRecord = true" class="button-view"
                     size="mini">
            已过期
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <div v-for="item in bankTokenArr" :key="item.index">
          <TableItem :tableData="item" operateRName="取款" @operateRClick="operateRClick"/>
        </div>
      </template>

    </RainbowPanel>
    <RainbowPanel v-show="activeIndex==1">
      <template v-slot:name>
        令牌转让市场
      </template>
      <template v-slot:content>
        <el-table :data="marketTokenArr.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column
              label="#"
              type="index"
          >
          </el-table-column>
          <el-table-column
              prop="firstOwnerName"
              label="初始生成人"
          >
          </el-table-column>
          <el-table-column
              label="生成时间">
            <div slot-scope="scope">
              {{ new Date(scope.row.creationTime * 1000) | formatDate }}
            </div>
          </el-table-column>
          <el-table-column
              label="到期时间">
            <div slot-scope="scope">
              {{ new Date(scope.row.expireTime * 1000) | formatDate }}
            </div>
          </el-table-column>
          <el-table-column
              prop="expireTime"
              label="剩余天数">
            <div slot-scope="scope">
              {{ parseInt((scope.row.expireTime - scope.row.creationTime) / 86400) }}
            </div>
          </el-table-column>
          <el-table-column
              prop="mortgageAmount"
              label="包含RBT数量"
          >
            <div slot-scope="scope">
              {{ scope.row.mortgageAmount | formatNumberTo }}
            </div>
          </el-table-column>
          <el-table-column
              prop="usedAmount"
              label="生成社区治理令牌总额度"
          >
            <template slot="header">
              <div style="text-align: center">
                生成社区<br/>治理令牌总额度
              </div>
            </template>
            <div slot-scope="scope">
              {{ scope.row.usedAmount |formatNumberTo }}
            </div>
          </el-table-column>
          <el-table-column
              label=""
          >
            <template slot="header">
              <div style="text-align: center">
                目前还可<br/>生成令牌总额度
              </div>
            </template>
            <div slot-scope="scope">
              {{ (scope.row.mortgageAmount - scope.row.usedAmount) |formatNumberTo }}
            </div>
          </el-table-column>
          <el-table-column
              label="操作"
          >
            <template slot-scope="scope">
              <el-button size="mini" class="button1" @click="buyDeposit(scope.row)">
                购买
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="marketTokenArr.length">
        </el-pagination>
      </template>
    </RainbowPanel>
    <!-- 出售弹窗-->
    <el-dialog
        title="发布出售令牌信息"
        :visible.sync="isShowPublish"
        width="400px"
    >
      <div class="order">
        <div class="r-intro-box">
          <div>
            <span>编号</span>
            <span>{{ sellToken.tokenId }}</span>
          </div>
          <div>
            <span>生成日期</span>
            <span> {{ new Date(sellToken.creationTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>到期时间</span>
            <span> {{ new Date(sellToken.expireTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>剩余天数</span>
            <span>{{ parseInt((sellToken.expireTime - sellToken.creationTime) / 86400) }}</span>
          </div>
          <div>
            <span>包含RBT数量</span>
            <span> {{ sellToken.mortgageAmount |formatNumber }}</span>
          </div>
          <div>
            <span>包含RBT价值</span>
            <span> ${{ includeValue |formatNumber }}</span>
          </div>
          <div>
            <span>已使用社区治理令牌额度</span>
            <span> {{ sellToken.usedAmount |formatNumber }}</span>
          </div>
          <div>
            <span>剩余社区治理令牌额度</span>
            <span>{{ sellToken.mortgageAmount - sellToken.usedAmount |formatNumber }}</span>
          </div>
        </div>

        <div class="price-box">
          <span>出售金额</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="orderForm.amount"></el-input>
            <ChooseToken @changeToken="changeToken"></ChooseToken>
          </div>
        </div>

        <div class="intro">
          出售成功后，将扣除您 <span class="r-p-color">5%</span>的平台服务费
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="isShowPublish=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="subOrder">确认出售</el-button>
        </div>
      </div>
    </el-dialog>
    <!--  购买弹窗-->
    <el-dialog
        title="购买令牌确认"
        :visible.sync="isShowBuy"
        width="400px"
    >
      <div class="order">
        <div class="r-intro-box">
          <div>
            <span>编号</span>
            <span>{{ buyToken.tokenId }}</span>
          </div>
          <div>
            <span>生成日期</span>
            <span> {{ new Date(buyToken.creationTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>到期时间</span>
            <span> {{ new Date(buyToken.expireTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>剩余天数</span>
            <span>{{ parseInt((buyToken.expireTime - buyToken.creationTime) / 86400) }}</span>
          </div>
          <div>
            <span>包含RBT数量</span>
            <span> {{ buyToken.mortgageAmount |formatNumberTo }}</span>
          </div>
          <div>
            <span>包含RBT价值</span>
            <span> ${{ buyToken.mortgageAmount |formatNumberTo }}</span>
          </div>
          <div>
            <span>已使用社区治理令牌额度</span>
            <span> {{ buyToken.usedAmount |formatNumberTo }}</span>
          </div>
          <div>
            <span>剩余社区治理令牌额度</span>
            <span>{{ buyToken.mortgageAmount - buyToken.usedAmount |formatNumberTo }}</span>
          </div>
        </div>


        <div class="operating">
          <el-button size="small" class="button3" @click="isShowBuy=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="subBuy">确认购买</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Moment from 'moment'

export default {
  name: "tokenTransfer",
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 5,    //    每页的数据
      orderForm: {},
      sellToken: {},
      buyToken: {},
      isShowPublish: false,//是否显示弹窗
      isShowBuy: false,
      activeIndex: 0,
      navList: [{
        name: '我的令牌',
        index: 0
      }, {
        name: '转让市场',
        index: 1
      }],
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    sellDeposit(token) {
      this.sellToken = token
      this.isShowPublish = true
    },
    buyDeposit(token) {
      this.buyToken = token
      this.isShowBuy = true
    },
    changeToken(param) { // 更换token
      console.log(param)
    },
    subOrder() {
      this.$store.dispatch("RbtDeposit721/approve", {
        to: "0x4D64eDac49B026aE95765DBD3830C582c693AEe4",
        tokenId: this.borrowToken.tokenId
      }).then(() => {
        this.publish();
      }).catch(() => {
        this.isLoading = false
        this.$message({
          type: 'error',
          message: '授权失败'
        })
      })
      return
    },
    operateRClick(tableData) {
      this.release(tableData.nameObj.data)
    },
    release(){//取款

    },
    publish() {
      this.isLoading = false
      this.$store.dispatch("transferMarket/publish", {
        amount: this.orderForm.amount,
        tokenId: this.sellToken.tokenId
      }).then(res => {
        console.log(res);
        this.$message.success("发布成功")
        this.orderForm = {}
        this.isShowPublish = false
        this.getData()
      }).catch(err => {
        console.log(err)
        this.$message.error("发布失败" + err)
        this.orderForm = {}
      })
    },
    subBuy() { //确认购买{from,id,bid,_types
      this.$store.dispatch("TokenExchangeMarket/bidToken", {
        from: "0x4D64eDac49B026aE95765DBD3830C582c693AEe4",
        id: 1,
        bid: 1000,
        _types: "0x4D64eDac49B026aE95765DBD3830C582c693AEe4"
      }).then(res => {
        console.log(res)
        this.$message.success("购买成功")
      }).catch((err) => {
        this.$message.error("购买失败" + err)
      })
    },
    getData() {
      if (!this.isConnected)
        this.$store.dispatch("RbtDeposit721/tokenMetadata", 1)
      this.$store.dispatch("rainbowBank/getInfo")
      this.$store.dispatch("TokenExchangeMarket/sellToken", {
        from: "0x4D64eDac49B026aE95765DBD3830C582c693AEe4",
        tokenId: 1,
        sellPrice: 1000,
        _types: "0x4D64eDac49B026aE95765DBD3830C582c693AEe4" //types是治理721令牌地址
      })
    },
  },


  created() {
    this.getData()
  },

  watch: {
    account() {
      this.getData()
    },
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    bankTokenArr() { //发布借款信息表格
      let arr = []
      this.$store.state.rainbowBank.records.forEach((item, index) => {
        arr.push({
          index: index + 1,
          nameObj: {
            title: "令牌编号",
            data: item.tokenId
          },
          infoArr: [
            {
              title: "锁仓类型",
              data: item.month + "个月"
            },
            {
              title: "包含RBT数量",
              data: item.amount
            },
            {
              title: "生成社区治理令牌总额度",
              data: ""
            },
            {
              title: "目前还可以生成社区治理令牌额度",
              data: ""
            },
          ],
          detailArr: [
            {
              title: "初始生成人",
              data: item.depositor.substr(0, 3) + '...' + item.depositor.substr(item.depositor.length - 3, 3)
            },
            {
              title: "现在所有人",
              data: item.depositor.substr(0, 3) + '...' + item.depositor.substr(item.depositor.length - 3, 3)
            },
            {
              title: "生成时间",
              data: Moment(item.created_at).format('YYYY-MM-DD')
            },
            {
              title: "到期时间",
              data: Moment(item.updated_at).format('YYYY-MM-DD')
            },
          ],
          withdrawa: [
            {
              address: item.depositor,
              tokenid: item.tokenId

            }
          ]
        })
      })
      return arr
    },

    marketTokenArr() {
      let arr = []
      this.$store.state.transferMarket.marketTokenArr.forEach(item => {
        for (let i = 0; i < this.$store.state.rbtDeposit.bankTokenArr.length; i++) {
          let token = this.$store.state.rbtDeposit.bankTokenArr[i]
          if (token.tokenId == item.tokenId) {
            arr.push({
              ...token,
              ...item,
            })
          }
        }
      })
      return arr
    },
    includeValue() { // 抵押令牌包含rbt价值
      return this.sellToken.mortgageAmount
    },
  }
}
</script>

<style lang="scss" scoped>
.tokenTransfer {
  .order {
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
        height: 30px;
        align-items: center;
        padding: 0 10px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        border-radius: 6px;
        display: flex;

        ::v-deep .el-input__inner {
          padding: 0 0;
        }
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
}
</style>
