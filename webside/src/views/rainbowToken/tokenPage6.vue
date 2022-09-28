<template>
  <div class="token-page6">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        05
      </div>
      <div class="page-header-title">
        RBD ISSUANCE <br/> AND RELEASE RULES
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        The RBD is mainly used to calculate the contribution of each community member to the ecosystem, which belongs to
        the contribution incentives. This token is mainly paid and circulated within the ecosystem. At the same time, it
        can be exchanged for the Rainbow token RBT according to the "consensus mining" price within the ecosystem. The
        exchanged RBT will be staked in 365 days a year.
      </p>
      <p>
        The official will withdraw the RBD, and the official can put the RBD back into the market to continue to
        encourage members to contribute to the ecosystem.
      </p>
      <p>
        RBD exists in the form of a stablecoin within the ecosystem. The internal exchange value is about 0.05 USD. It
        is not exchangeable for cash and can only be used for exchange for RBT or internal payment.
      </p>


      <div class="rainbow-table">
        <div class="first-row">
          <div class="item">
            TEPES
          </div>
          <div class="item">
            SUB-TYPES
          </div>
          <div class="item">
            NUMBER
          </div>
          <div class="item">
            RULES
          </div>
        </div>
        <div class="content-box">
          <div class="col-item">

            <div class="row-item">
              1. Rainbow DeFi mining
            </div>
            <div class="row-item">
              2. Ecosystem Operation Mining
            </div>
            <div class="row-item">
              3. Rainbow Island Content Mining
            </div>
            <div class="row-item">
              4. Ecosystem reservation
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              DeFi "Transaction Mining"
            </div>
            <div class="row-item">
              DeFi “Liquidity Mining”
            </div>
            <div class="row-item">
              DeFi “Liquidity Mining”
            </div>
            <div class="row-item">
              DeFi "Mint Mining"
            </div>
            <div class="row-item">
              DeFi "Borrowing Mining"
            </div>
            <div class="row-item">
              DeFi "Insurance Mining"
            </div>
            <div class="row-item">
              DeFi "Finance Mining"
            </div>
            <div class="row-item">
              DeFi "Others Mining"
            </div>
            <div class="row-item">
              Invitation Mining
            </div>
            <div class="row-item">
              Promotion Mining
            </div>
            <div class="row-item">
              VIP Mining
            </div>
            <div class="row-item">
              Shopping Mining
            </div>
            <div class="row-item">
              Other Operations Mining
            </div>
            <div class="row-item">
              Content Platform Mining
            </div>
            <div class="row-item">
              Ecosystem Reservation
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              30B
            </div>
            <div class="row-item">
              20B
            </div>
            <div class="row-item">
              20B
            </div>
            <div class="row-item">
              30B
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              This 30 billion quota is mainly used for the contribution incentives of the entire ecosystem of Rainbow
              DeFi. Through DeFi incentives, community members can get more RBT. In this way, community members will
              become the masters of the community. The specific mining allocation quota is subject to the actual plan when
              the project is launched.
            </div>
            <div class="row-item">
              These 20 billion quotas is mainly used for various operational activities and ecosystem incentives organized
              by Rainbow City to promote the development of the ecosystem. At the same time, incentives are rewarded to
              community members who truly contribute to the community, so that more community members can become the
              masters of the entire community.
            </div>
            <div class="row-item">
              These 20 billion quotas are mainly used for content mining incentives on the Rainbow Island content social
              platform. Rainbow Island will establish a content social platform for the community members of Rainbow City
              to fully communicate.
            </div>
            <div class="row-item">
              This 30 billion quota is mainly reserved for ecological development. When there are some new ecological
              expansions or major breakthroughs in the original ecology, the project can apply for the use of Ecosystem
              Reservation funds for incentives. Rainbow DAO promotes the development of the ecosystem in this way.
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "tokenPage6",
  props: ["isUp"]

}
</script>

<style lang="scss" scoped>
.token-page6 {
  .page-content {
    overflow-y: auto;

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
          width: 200px;
        }

        .item:nth-child(2) {
          width: 280px;
        }

        .item:nth-child(3) {
          width: 100px;
        }

        .item:last-child {
          flex: 1;
        }

        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      }

      .content-box {

        display: flex;

        .col-item {
          display: flex;
          flex-direction: column;
          border: none!important;
          width: 280px;

          .row-item {
            text-align: left !important;
            padding: 10px;
            align-items: center;
            justify-content: center;
            border: 1px solid #eee;
          }
        }

        .col-item:nth-child(2) {
          .row-item {
            height: 40px;
          }

          .row-item:nth-child(14) {
            height: 120px;
          }

          .row-item:nth-child(15) {
            height: 120px;
          }
        }

        .col-item:nth-child(1) {
          width: 200px;
        }

        .col-item:nth-child(3) {
          width: 100px;
        }

        .col-item:nth-child(3), .col-item:nth-child(1), .col-item:nth-child(4) {

          .row-item:nth-child(1) {
            height: 320px;
          }

          .row-item:nth-child(2) {
            height: 200px;
          }

          .row-item:nth-child(3) {
            height: 120px;
          }

          .row-item:nth-child(4) {
            flex: 1;
          }
        }

        .col-item:last-child {
          flex: 1;
        }


      }

    }
  }
}
</style>
