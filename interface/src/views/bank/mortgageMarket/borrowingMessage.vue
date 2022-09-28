<template>
  <div class="borrowingMessage">
    <RainbowPanel>
      <template v-slot:name>发布借款信息</template>
      <template v-slot:content>

        <div v-for="item in bankTokenArr" :key="item.index">
          <TableItem :tableData="item" operateRName="发布" @operateRClick="operateRClick"/>
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="my-borrow">
      <template v-slot:name>我的借款订单</template>
      <template v-slot:content>

        <div v-for="item in bankTokenArr" :key="item.index">
          <TableItem :tableData="item" operateOName="还款" operateGName="再次借款" @operateOClick="operateOClick"
                     @operateGClick="operateGClick"/>
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="my-borrow">
      <template v-slot:name>我发布的借款订单</template>
      <template v-slot:content>
        <div v-for="item in bankTokenArr" :key="item.index">
          <TableItem :tableData="item" operateRName="撤销" @operateRClick="operateRClick"/>
        </div>
      </template>
    </RainbowPanel>
    <!-- 转让弹窗-->
    <el-dialog
        title="借款订单"
        :visible.sync="isShowBorrow"
        width="400px"
    >
      <div class="order">
        <div class="r-intro-box">
          <div>
            <span>编号</span>
            <span>{{ borrowToken.tokenId }}</span>
          </div>
          <div>
            <span>生成日期</span>
            <span> {{ new Date(borrowToken.creationTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>到期时间</span>
            <span> {{ new Date(borrowToken.expireTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>剩余天数</span>
            <span>{{ parseInt((borrowToken.expireTime - borrowToken.creationTime) / 86400) }}</span>
          </div>
          <div>
            <span>包含RBT数量</span>
            <span> {{ borrowToken.mortgageAmount|formatNumberTo }}</span>
          </div>
          <div>
            <span>包含RBT价值</span>
            <span> ${{ includeValue |formatNumberTo }}</span>
          </div>
          <div>
            <span>已使用社区治理令牌额度</span>
            <span> {{ borrowToken.usedAmount > 0 ? borrowToken.usedAmount : 0 | formatNumberTo }}</span>
          </div>
          <div>
            <span>剩余社区治理令牌额度</span>
            <span>{{ (borrowToken.mortgageAmount - borrowToken.usedAmount)|formatNumberTo }}</span>
          </div>
        </div>
        <div class="price-box">
          <span>借款金额</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="orderForm.amount"></el-input>
            <!-- <ChooseToken @changeToken="changeToken"></ChooseToken> -->
          </div>
        </div>
        <div class="price-box">
          <span>借款时间</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="orderForm.day"></el-input>
            天
          </div>
        </div>
        <div class="price-box">
          <span>年化利息</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="orderForm.interest"></el-input>
          </div>
        </div>
        <!-- <div class="price-box">
          <span>抵押率</span>
          <div class="input-box">
            {{ mortgageRate }}
          </div>
        </div> -->
        <!-- <div class="price-box">
          <span>利息费</span>
          <div class="input-box">
            {{ interestFee }}
          </div>
        </div> -->
        <div class="intro">
          转让成功后，将扣除您 <span class="r-p-color">5%</span>的平台服务费
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="isShowTransfer=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="release">提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Moment from 'moment'

export default {
  name: "borrowingMessage",
  data() {
    return {
      borrowToken: {},//当前借出令牌信息
      isShowBorrow: false,//是否显示弹窗
      orderForm: {
        amount: 0,
        day: 0,
        interest: 0
      },//订单对象
      currentData: {}
    }
  },
  methods: {
    operateRClick(row) {
      this.isShowBorrow = true
      this.currentData = row
      console.log(row)
    },
    operateOClick(tableData) {
      this.repayment(tableData.mortgageMarket.tokenid)
    },
    operateGClick(tableData) {
      this.borrowAgain(tableData.mortgageMarket.tokenid)
    },
    repayment(tokenId) {//还款
      //this.borrowToken = token
      this.isShowBorrow = true
      this.$store.dispatch("LoanMarket/repayment", {tokenId: tokenId, day: 10, value: 100}).then(res => {
        console.log(res)
        this.$message.success("还款成功")
      }).catch(err => {
        console.log(err)
        this.$message.error("还款失败" + err)
      })
    },
    borrowAgain(tokenId) {//再次借款
      this.isShowBorrow = true
      this.$store.dispatch("LoanMarket/mortgageMarket", {
        tokenId: tokenId,
        amount: 200,
        day: 10,
        dayRate: 5 / 100
      }).then(res => {
        console.log(res)
        this.$message.success("再次借款成功")
      }).catch(err => {
        console.log(err)
        this.$message.error("再次借款失败" + err)
      })
    },
    initData() {
      if (!this.isConnected) {
        return;
      }
      this.$store.dispatch("rainbowBank/getInfo").then(() => {
        this.updateTable = true
      })
      // this.$store.dispatch('erc20/balanceOf', {
      //   coinName: "RBT",
      //   owner: this.account
      // })
      //this.getRecord()
    },
    changeToken(param) { // 更换token
      console.log(param)
    },
    release() {//发布

      this.$store.dispatch("LoanMarket/mortgageMarket", {
        tokenId: this.currentData.withdrawa.tokenid,
        amount: this.orderForm.amount,
        day: this.orderForm.day,
        dayRate: this.orderForm.interest
      }).then(res => {
        console.log(res)
        this.$message.success("借款成功")
      }).catch(err => {
        console.log(err)
        this.$message.error("借款失败" + err)
      })
    },
  },
  // async subOrder() {

  //       this.isLoading = true
  //       await this.$store.dispatch("RbtDeposit721/approve", {
  //         _to:"0x0434138b88F83209769C02F0F9f756D9ec2991ea",
  //         _tokenId: this.borrowToken.tokenId
  //       }).then(() => {
  //         this.mortgage()
  //       }).catch(()=>{
  //         this.isLoading = false
  //         this.$message({
  //           type:'error',
  //           message:'授权失败'
  //         })
  //         return false
  //       })
  //       return

  // },
  mortgage() {
    this.$store.dispatch("LoanMarket/mortgageMarket", {
      id: this.borrowToken.tokenId,
      amount: this.orderForm.amount,
      day: this.orderForm.day,
      apy: this.orderForm.interest
    }).then(res => {
      console.log(res);
      this.$message.success("发布成功")
      this.isShowBorrow = false
    }).catch(err => {
      console.log(err)
      this.$message.error("发布失败" + err)
    })
  },
  // getData() {
  //   this.$store.dispatch("rbtDeposit/getDepositList")
  // },

  created() {
    if (this.isConnected) {
      this.initData()
    }
  },

  watch: {
    account() {
      this.initData()
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
        let obj = {
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
          withdrawa: {
            address: item.depositor,
            tokenid: item.tokenId

          }
          ,
          mortgageMarket: [
            {
              address: item.depositor,
              tokenid: item.tokenId

            }
          ],
        }
        arr.push(obj)

      })
      return arr
    },
    myBorrowArr() {//发布借款信息表格
      let arr = []
      this.$store.state.rainbowBank.records.forEach((item, index) => {
        let obj = {
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
          withdrawa:
              {
                address: item.depositor,
                tokenid: item.tokenId

              }

        }
        arr.push(obj)

      })
      return arr
    },
    mortgageRate() { // 抵押率 = 借款金额 / 价值
      let num = this.orderForm.amount / this.includeValue
      return num > 0 ? num : 0
    },
    includeValue() {// 抵押令牌包含rbt价值
      return this.borrowToken.mortgageAmount
    },
    interestFee() {//利息费 = 借款金额 * 借款时间（天） * 利息
      let fee = this.orderForm.amount * this.orderForm.day / 360 * this.orderForm.interest
      return fee > 0 ? fee : 0
    }
  }
}
</script>

<style lang="scss" scoped>
.borrowingMessage {
  .my-borrow {
    margin-top: 20px;
  }

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
