<template>
  <!--  抵押借款市场-->
  <div class="mortgageMarket">
    <div class="mortgageMarket-nav">
      <div class="mortgageMarket-nav-box">
        <div :class="{'active':activeIndex==1}" @click="activeIndex=1">我的借款信息</div>
        <div :class="{'active':activeIndex==2}" @click="activeIndex=2">我已借出</div>
        <div :class="{'active':activeIndex==3}" @click="activeIndex=3">借款市场</div>
      </div>
    </div>
    <borrowingMessage v-show="activeIndex==1"/>
    <hasBorrow v-show="activeIndex==2"/>
    <borrowingMarket v-show="activeIndex==3"/>
  </div>
</template>

<script>
import borrowingMarket from "@/views/bank/mortgageMarket/borrowingMarket";
import hasBorrow from "@/views/bank/mortgageMarket/hasBorrow";
import borrowingMessage from "@/views/bank/mortgageMarket/borrowingMessage";
export default {
  name: "mortgageMarket",
  components:{borrowingMarket,borrowingMessage,hasBorrow},
  data() {
    return {
      activeIndex: 1
    }
  },


}
</script>

<style lang="scss" scoped>
.mortgageMarket {

  .mortgageMarket-nav {

    width: 1200px;
    margin: 50px auto 0;
    .mortgageMarket-nav-box{
      display: flex;
      width: 420px;
      height: 40px;
      background: #f2e5f7;
      border: 1px solid rgba(165,25,187,0.20);
      border-radius: 10px;
      font-size: 12px;
      >div{
        width: 160px;
        text-align: center;
        margin-left: -1px;
        font-weight: 400;
        color: #a519bb;
        line-height: 17px;
        padding: 10px 14px;
        cursor: pointer;
      }
      .active {
        color: #fff;
        background: linear-gradient(270deg,#a519bb, #ec0b6a);
        border-radius: 10px;
        box-shadow: 0px 3px 6px 0px rgba(128,4,149,0.30);
      }
    }



  }
}
</style>
