<template>
  <div class="city-page6">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        05
      </div>
      <div class="page-header-title">
        Five rights<br> of Rainbow City
      </div>
    </div>
    <div class="page-content">
      <div class="page6-list-item">
        <img class="icon" src="../../assets/imgs/chain.png" alt="">
        <div class="page6-list-item-name">
          INCOME DISTRIBUTION
        </div>
        <img class="number" src="../../assets/imgs/page6_01.png" alt="">
      </div>
      <div class="page6-list-item">
        <img class="icon" src="../../assets/imgs/circle.png" alt="">
        <div class="page6-list-item-name">
          COMMUNITY GOVERNANCE
        </div>
        <img class="number" src="../../assets/imgs/page6_02.png" alt="">
      </div>
      <div class="page6-list-item">
        <img class="icon" src="../../assets/imgs/suffrage.png" alt="">
        <div class="page6-list-item-name">
          COMMUNITY SUFFRAGE
        </div>
        <img class="number" src="../../assets/imgs/page6_03.png" alt="">
      </div>
      <div class="page6-list-item">
        <img class="icon" src="../../assets/imgs/supervision.png" alt="">
        <div class="page6-list-item-name">
          COMMUNITY SUPERVISION
        </div>
        <img class="number" src="../../assets/imgs/page6_04.png" alt="">
      </div>
      <div class="page6-list-item">
        <img class="icon" src="../../assets/imgs/investmentright.png" alt="">
        <div class="page6-list-item-name">
          PRIORITY INVESTMENT
        </div>
        <img class="number" src="../../assets/imgs/page6_05.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityPage6",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.city-page6{
  .page-content{
    padding-top: 80px!important;
    display: flex;
    .page6-list-item{
      text-align: center;
      width: 100%;
      justify-content: space-between;

      .icon{
        width: 36px;
      }
      .page6-list-item-name{
        font-size: 16px;
        line-height: 22px;
        width: 150px;
        margin: 10px auto;
        height: 60px;
      }
      .number{
        width: 60px;
        margin-top: 10px;
      }
    }
  }
}
</style>
