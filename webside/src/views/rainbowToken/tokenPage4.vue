<template>
  <div class="token-page4">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        Allocation <br> of RBT
      </div>
    </div>
    <div class="page-content">
      <div class="tip">
        TOTAL
      </div>
      <div class="number">
        5,000,000,000
      </div>
      <div class="rate">
        <img class="rate-img" src="../../assets/imgs/tokenRate.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tokenPage4",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.token-page4{
  .page-content{
    .tip{
      margin-top: 20px;
      text-align: center;
      width: 100%;
      height: 19px;
      opacity: 0.52;
      font-size: 16px;
      font-family: Roboto, Roboto-Medium;
      font-weight: 500;
      color: #ffffff;
      line-height: 19px;
    }
    .number{
      width: 380px;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      font-weight: bold;
      font-size: 54px;
      font-family: Roboto, Roboto-Bold;
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    .rate{
      .rate-img{
        width: 300px;
      }
    }
  }
}
</style>
