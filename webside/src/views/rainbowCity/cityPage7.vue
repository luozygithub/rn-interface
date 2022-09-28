<template>
  <div class="city-page7">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        06
      </div>
      <div class="page-header-title">
        RBT Community Incentive <br/> Mechanism
      </div>
    </div>
    <div class="page-content">
      <div class="page7-list-item">
        <img class="icon" src="../../assets/imgs/POW.png" alt="">
        <div class="page7-list-item-name">
          POW
        </div>
        <div class="page7-list-item-info">
          Allocate incentives according to the workload of the community.
        </div>
        <img class="number" src="../../assets/imgs/page6_01.png" alt="">
      </div>
      <div class="page7-list-item">
        <img class="icon" src="../../assets/imgs/POS.png" alt="">
        <div class="page7-list-item-name">
          POS
        </div>
        <div class="page7-list-item-info">
          Allocate incentives based on the number of tokens held.
        </div>
        <img class="number" src="../../assets/imgs/page6_02.png" alt="">
      </div>
      <div class="page7-list-item">
        <img class="icon" src="../../assets/imgs/DPOS.png" alt="">
        <div class="page7-list-item-name">
          DPOS
        </div>
        <div class="page7-list-item-info">
          Allocate incentives based on the weight of voting tokens held.
        </div>
        <img class="number" src="../../assets/imgs/page6_03.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityPage7",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.city-page7 {
  .page-content {
    padding-top: 100px!important;
    display: flex;

    .page7-list-item {
      text-align: center;
      width: 100%;
      justify-content: space-between;

      .icon {
        width: 36px;
      }

      .page7-list-item-name {
        font-size: 22px;
        line-height: 22px;
        width: 150px;
        font-weight: bold;
        margin: 10px auto;
        height: 60px;
        color: #DB1F7E;
      }
      .page7-list-item-info{
        width: 260px;
        margin: 0 auto;
        line-height: 20px;
      }
      .number {
        width: 60px;
        margin-top: 10px;
      }
    }
  }
}
</style>
