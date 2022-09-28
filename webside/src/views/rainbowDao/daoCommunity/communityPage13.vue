<template>
  <div class="community-page13">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        04
      </div>
      <div class="page-header-title">
        VOTING GOVERNANCE<br> TOKEN: RBT-VOTE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        COMMUNITY GOVERANCE （ERC721）
      </div>
      <p>
        DAOs at different levels have their independent financial public management funds, which are managed by those
        DAOs themselves. Making the funds be employed in a fair and transparent manner inevitably entails voting.
      </p>
      <p>

        Rainbow DAO is made up of a collection of countless proposals and various votings in management are needed at
        all times. Thus, we put forward RBT-Vote to make voting more reflective of the rights and interests of community
        members and enhance the governance level of Rainbow DAO comprehensively.
      </p>
      <div class="rainbow-table">
        <div class="first-row">
          <div class="item">
            TEPES
          </div>
          <div class="item">
            CLASSIFICATION
          </div>
          <div class="item">
            DETAILED CLASSIFICATION
          </div>
          <div class="item">
            WEIGHT
          </div>
        </div>
        <div class="content-box">
          <div class="col-item">

            <div class="row-item">
              Amount of RBT
            </div>
            <div class="row-item">
              Weighting over rbVIP Token
            </div>
            <div class="row-item">
              Weighting over Community Management Token
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              RBT in wallet and mining pool
            </div>
            <div class="row-item">
              RBT in RBT-Deposit token
            </div>

            <div class="row-item">
              Amount of RBT plus that of rbVIP token
            </div>
            <div class="row-item">
              The second weighting is based on the rbVIP token. The weight is the same as a single token, and multiple
              tokens can be weighted multiple times.
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              RBT in private wallet
            </div>
            <div class="row-item">
              RBT in seed round mining pool( to be extracted and released)
            </div>
            <div class="row-item">
              RBT in consensus mining pool( to be extracted and released)
            </div>
            <div class="row-item">
              RBT in contribution mining pool( to be extracted and released)
            </div>

            <div class="row-item">
              RBT in Rainbow DEX LP
            </div>
            <div class="row-item">
              RBT in Rainbow Borrowing
            </div>
            <div class="row-item">
              RBT current staked position
            </div>
            <div class="row-item">
              Staked of 3 months
            </div>

            <div class="row-item">
              Staked of 6 months
            </div>
            <div class="row-item">
              Staked of 12 months
            </div>
            <div class="row-item">
              Staked of 24 months
            </div>
            <div class="row-item">
              Staked of 36 months
            </div>
            <div class="row-item">
              Bronze VIP users
            </div>
            <div class="row-item">
              Silver VIP users
            </div>
            <div class="row-item">
              Gold VIP users
            </div>
            <div class="row-item">
              Platinum VIP users
            </div>
            <div class="row-item">
              RBT-Elf token
            </div>
            <div class="row-item">
              RBT-Envoy token
            </div>
            <div class="row-item">
              RBT-Partner token
            </div>
            <div class="row-item">
              RBT-Node token
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              1
            </div>
            <div class="row-item">
              1
            </div>
            <div class="row-item">
              1
            </div>
            <div class="row-item">
              1
            </div>
            <div class="row-item">
              1
            </div>
            <div class="row-item">
              1
            </div>
            <div class="row-item">
              1
            </div>
            <div class="row-item">
              2
            </div>
            <div class="row-item">
              3
            </div>
            <div class="row-item">
              4
            </div>
            <div class="row-item">
              5
            </div>
            <div class="row-item">
              6
            </div>
            <div class="row-item">
              10%
            </div>
            <div class="row-item">
              20%
            </div>
            <div class="row-item">
              30%
            </div>
            <div class="row-item">
              40%
            </div>
            <div class="row-item">
              2%
            </div>
            <div class="row-item">
              4%
            </div>
            <div class="row-item">
              6%
            </div>
            <div class="row-item">
              8%
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage13",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page13 {
  .page-content {
    overflow: auto;

    .rainbow-table {
      width: 900px !important;
      margin: 0 !important;
      box-sizing: border-box;

      .row-item:first-child {
        background: white !important;
        color: black !important;
        text-transform: none !important;
      }

      .first-row {
        display: flex;
        color: white;

        .item {
          height: 50px;
          width: 280px;
          text-align: center;
          line-height: 50px;
          border: 1px solid #eee;
        }

        .item:nth-child(1) {
          width: 100px;
        }

        .item:nth-child(2) {
          width: 200px;
        }

        .item:nth-child(3) {
          width: 500px;
        }

        .item:last-child {
          width: 100px;
        }

        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      }

      .content-box {

        display: flex;

        .col-item {
          display: flex;
          flex-direction: column;
          border: none!important;

          .row-item {
            text-align: left !important;
            padding: 10px;
            align-items: center;
            justify-content: center;
            border: 1px solid #eee;
          }
        }


        .col-item:nth-child(1) {
          width: 100px;

          .row-item:nth-child(1) {
            height: 480px;
          }
          .row-item:nth-child(2) ,.row-item:nth-child(3){
            height: 160px
          }
        }

        .col-item:nth-child(2) {
          width: 200px;
          .row-item:nth-child(1) ,.row-item:nth-child(2){
            height: 240px
          }
          .row-item:nth-child(3) ,.row-item:nth-child(4){
            height: 160px
          }
        }

        .col-item:nth-child(3) {
          width: 500px;
          .row-item{
            height: 40px;
          }
          .row-item:nth-child(2n){
            background: #f9fbff;
          }
        }
        .col-item:nth-child(4){
          width: 100px;
          .row-item{
            height: 40px;
          }
          .row-item:nth-child(2n){
            background: #f9fbff;
          }
        }
      }
    }

    .title {
      color: #db1f7e;
      font-size: 20px;
    }
  }
}
</style>
