<template>
  <div class="community-page3">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        STARTING FROM REGIONAL DAO,<br> GLOBAL ECOLOGICAL GOVERNANCE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      In the Rainbow City Ministry of Finance Income Distribution Rules framework, 20% of the distributable income is
      used for "RBT Stake Incentive". The user stakes RBT to the RBT bank, and the stake time is current, 3 months, 6
      months, 12 months, 24 months, and 36 months. When staked, users can get RBT-Deposit tokens. Users can obtain "RBT
      Stake Incentive" with the stake information in this RBT-Deposit token.
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage3",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page3 {
  .page-content {
    overflow: auto;
    .rainbow-table{
      width: 900px!important;
      margin: 20px 0 0 0 !important;
    }
    .title {
      color: #db1f7e;
      font-size: 20px;
    }
  }
}
</style>
