<template>
  <div class="community-page9">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        STARTING FROM REGIONAL DAO,<br> GLOBAL ECOLOGICAL GOVERNANCE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        IDENTIFICATION
      </div>
      <div class="content">
        Rainbow VIP identity is identified based on the Rainbow VIP token. The user has 1 RVIP as a bronze VIP, 3 RVIP
        as a silver VIP, 6 RVIP as a silver VIP, and 9 RVIP as a platinum VIP. This token can be freely transferred.
        After users transferring his RVIP token, his VIP identity is also transferred to the token recipient.
      </div>
      <div class="title">
        PAYMENT METHOD
      </div>
      <div class="icon-list">
        <img class="icon-img" src="../../../assets/imgs/DAI.png" alt="">
        <img class="icon-img" src="../../../assets/imgs/ETH.png" alt="">
        <img class="icon-img" src="../../../assets/imgs/USDT.png" alt="">
        <img class="icon-img" src="../../../assets/imgs/USDC.png" alt="">
        <img class="icon-img" src="../../../assets/imgs/BTC.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage9",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page9 {
  .page-content {
    overflow: auto;

    .title {
      color: #db1f7e;
      font-weight: 700;
      font-size: 20px;
      margin-top: 20px;
      padding: 30px 0;
    }

    .icon-list {
      display: flex;

      .icon-img {
        width: 50px;
        margin-right: 30px;
      }
    }
  }
}
</style>
