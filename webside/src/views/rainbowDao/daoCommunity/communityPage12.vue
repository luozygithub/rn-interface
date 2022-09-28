<template>
  <div class="community-page12">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        RVIP, LOYAL USERS<br> OF RAINBOW CITY
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        VIP TOKEN REVENUE ALLOCATION RULES
      </div>
      <p>
        The purpose of Rainbow DAO is to build a distributed autonomous organization and establish a series of
        transparent rules so that all steps within the organization can operate spontaneously. The VIP residential
        system is one of the most basic systems, which will bring a steady stream of cash income to the ecosystem. These
        revenues will be distributed to different participants in accordance with transparent distribution rules. Every
        participant can benefit from it and help the development of the community together.
      </p>
      <div class="rainbow-table">
        <div class="first-row">
          <div class="item">
            TEPES
          </div>
          <div class="item">
            RECOMMEND LEVEL
          </div>
          <div class="item">
            PROPORTION
          </div>
          <div class="item">
            VIP LEVEL
          </div>
          <div class="item">
            PROPORTION
          </div>
        </div>
        <div class="content-box">
          <div class="col-item">

            <div class="row-item">
              Extension System
            </div>

          </div>
          <div class="col-item">

            <div class="row-item">
              Direct
            </div>
            <div class="row-item">
              Indirection
            </div>


          </div>
          <div class="col-item">

            <div class="row-item">
              80%
            </div>
            <div class="row-item">
              20%
            </div>

          </div>
          <div class="col-item">

            <div class="row-item">
              DAO Registered Users
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
              DAO Registered Users
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
          </div>
          <div class="col-item">

            <div class="row-item">
              10%
            </div>
            <div class="row-item">
              40%
            </div>
            <div class="row-item">
              60%
            </div>
            <div class="row-item">
              80%
            </div>
            <div class="row-item">
              100%
            </div>
            <div class="row-item">
              10%
            </div>
            <div class="row-item">
              40%
            </div>
            <div class="row-item">
              60%
            </div>
            <div class="row-item">
              80%
            </div>
            <div class="row-item">
              100%
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage12",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page12 {
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
          text-align: center;
          line-height: 50px;
          border: 1px solid #eee;
        }

        .item:nth-child(1), .item:nth-child(3) {
          width: 120px;
        }
        .item:nth-child(2){
          width: 240px;
        }
        .item:nth-child(4) {
          width: 280px;
        }
        .item:nth-child(5){
          width: 140px;
        }

        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      }

      .content-box {

        display: flex;

        .col-item {
          flex-direction: column;
          border: none !important;
          .row-item {
            text-align: left !important;
            padding: 10px;
            align-items: center;
            justify-content: center;
            border: 1px solid #eee;
          }
        }


        .col-item:nth-child(1) {
          width: 120px;
          .row-item{
            height: 480px;
          }
        }

        .col-item:nth-child(2) {
          width: 240px;
          .row-item {
            height: 240px
          }

        }

        .col-item:nth-child(3) {
          width: 120px;
          .row-item {
            height: 240px;
          }
        }

        .col-item:nth-child(4) {
          width: 280px;
          .row-item {
            height: 48px;
          }
          .row-item:nth-child(2n) {
            background: #f9fbff;
          }
        }
        .col-item:nth-child(5) {
          width: 140px;
          .row-item {
            height: 48px;
          }
          .row-item:nth-child(2n) {
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
