<template>
  <div class="defi-page2">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        RAINBOW DEFI
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <img class="center-img" src="../../assets/imgs/R.png"/>
      <div class="defi-content-line1">
        <div class="defi-content1-item">
          <div class="header">
            <img src="../../assets/imgs/page6_01.png" alt="">
            <strong class="title">
              DEX
            </strong>
          </div>
          <div class="detail">
            Rainbow City DEX provides users a platform for token trading based on AMM-Automatic Market Maker. The
            RBT-RUSD token trading pair will first be launched in Rainbow City DEX to allow RBT to circulate in the
            secondary market.
          </div>
        </div>
        <div class="defi-content1-item">
          <div class="header">
            <strong class="title">
              Borrowing
            </strong>
            <img src="../../assets/imgs/page6_02.png" alt="">
          </div>
          <div class="detail">
            In Rainbow City’s DeFi system, users can earn interest on deposits and borrow assets through open source
            protocols.
          </div>
        </div>
      </div>
      <div class="defi-content-line2">
        <div class="defi-content1-item">
          <div class="header">
            <img src="../../assets/imgs/page6_03.png" alt=""/>
            <strong class="title">
              RUSD
            </strong>
          </div>
          <div class="detail">
            Rainbow City will issue stable currency RUSD. Rainbow City allows users to mortgage WBTC, ETH and other
            value assets to mint RUSD. RUSD can be circulated in any place that accepts RUSD, or it can be mortgaged to
            the protocols to get rewards.
          </div>
        </div>
        <div class="defi-content1-item">
          <div class="header">
            <strong class="title">
              RBTC
            </strong>
            <img src="../../assets/imgs/page6_04.png" alt="">
          </div>

          <div class="detail">
            Rainbow City will issue RBT anchor token RBTC. Through the Rainbow Bridge, Rainbow City will give the BTC
            which on the Bitcoin chain economic and financial value, not just for on-chain transactions. RBTC will
            gradually replace WBTC as the value reserve of Rainbow City.
          </div>
        </div>
      </div>
      <div class="line">

      </div>
      <pageFooter></pageFooter>

    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";

export default {
  name: "defiPage2",
  props: ["isUp"],
  components: {pageFooter}
}
</script>

<style lang="scss" scoped>
.defi-page2 {
  margin: auto;
  height: 100%;
  overflow-y: auto;

  .page-content {

    position: relative;

    .center-img {
      width: 220px;
      position: absolute;
      top: 80px;
      left: 440px;
    }

    .defi-content-line1, .defi-content-line2 {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      padding-bottom: 20px;
      justify-content: space-between;
    }

    .defi-content1-item {
      width: 400px;

      .header {
        display: flex;
        justify-content: space-between;

        img {
          width: 60px;
          height: 60px;
        }

        .title {
          font-size: 22px;
          font-weight: bold;
          color: #db1f7e;
          margin-top: 40px;
        }
      }

      .detail {
        font-size: 12px;
        line-height: 18px;
      }

    }

  }

}
</style>
