<template>
  <div class="hasBorrow">
    <RainbowPanel>
      <template v-slot:name>
        我已借出的订单
      </template>
      <template v-slot:content>
        <div v-for="item in bankTokenArr" :key="item.index">
             <TableItem :tableData="item" operateRName="清算" operateGName="再次借款" @operateRClick="operateRClick"   @operateGClick="operateGClick"/>
          </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="repayment">
      <template v-slot:name>
        已还款订单
      </template>
      <template v-slot:content>
        <div v-for="item in bankTokenArr" :key="item.index">
             <TableItem :tableData="item"  @operateRClick="operateRClick"/>
          </div>
      </template>
    </RainbowPanel>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Moment from 'moment';

export default {
  name: "hasBorrow",
  data(){
    return {

    }
  },
  created() {
    if (this.isConnected) {
      // this.getData()
    }
  },
  methods:{
    operateGClick(){},
     operateRClick(tableData) {
      this.liquidation(tableData.nameObj.data)
    },
    isLiquidation(token){
      return ((new Date()).getTime() -  token.expireTime*1000 ) < 0
    },
    getData() {
      this.$store.dispatch("LoanMarket/mortgageMarket")
    },
    liquidation(id){//清算
      console.log(id)
      this.$store.dispatch("LoanMarket/liquidation",id).then(res=>{
        console.log(res)
        this.$message.success("清算成功")
      }).catch(err=>{
        console.log(err)
        this.$message.error("清算失败" + err)
      })
    },
    borrowAgain(id){//再次借款
      this.$store.dispatch("LoanMarket/repayment",id).then(res=>{
        console.log(res)
        this.$message.success("再次借款成功")
      }).catch(err=>{
        console.log(err)
        this.$message.error("再次借款失败" + err)
      })
    },
    lend(id){//出借
      this.$store.dispatch("LoanMarket/mortgageMarket",id).then(res=>{
        console.log(res)
        this.$message.success("再次借款成功")
      }).catch(err=>{
        console.log(err)
        this.$message.error("再次借款失败" + err)
      })
    }
  },
  computed:{
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
          withdrawa: [
            {
              address: item.depositor,
              tokenid: item.tokenId

            }
          ]
        }
        arr.push(obj)

      })
        return arr
    },
    myMortgageExpiredArr(){
      return this.$store.state.mortGageLoan.myMortgageExpiredArr
    },
  },
  watch: {
    account() {
      // this.getData()
    },
  },
}
</script>

<style lang="scss" scoped>
.hasBorrow{
  .repayment{
    margin-top: 20px;
  }
}
</style>
