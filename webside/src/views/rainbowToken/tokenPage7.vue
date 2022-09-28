<template>
  <div class="token-page7">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        06
      </div>
      <div class="page-header-title">
        RBT-EX ISSUANCE <br/> AND RELEASE RULES
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        RBT-EX is mainly used for "invitation mining" mining pools. RBT-EX can be exchanged with RBT 1:1 in the mining
        pool. The user's exchange limit is determined by the amount of the community members they invite to participate
        in consensus mining, and cannot be exchanged at will. At the same time, the higher the user's VIP level, the
        more RBT-EX can be exchanged. RBT-EX benefits members who have contributed to the community.
      </p>
      <p>
        The issuance method of RBT-EX is similar to that of RBD, mainly through various mining activities and official
        operation activities. The amount of RBT-EX users get depends on their contribution to the ecosystem.
      </p>
      <p>
        The smart contract of RBT-EX is controlled by Rainbow DAO and decided by the holders of RBT through a
        "referendum". All decision-making processes are open and transparent.
      </p>
      <p>
        There are 200 million RBTs in the "Invitation Mining" mining pool that can be used for RBT-EX exchange. If the
        number is insufficient, Rainbow DAO can apply for the quota of the RBT Foundation.
      </p>
      <div class="rainbow-table">
        <div class="first-row">

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
              5B
            </div>
            <div class="row-item">
              7B
            </div>
            <div class="row-item">
              3B
            </div>
            <div class="row-item">
              5B
            </div>
          </div>
          <div class="col-item">

            <div class="row-item">
              This 5 billion RBT-EX is mainly distributed along with various DeFi mining and distributed to community
              members in different forms. In this way, community members will become the masters of the community.
            </div>
            <div class="row-item">
              These 7 billion quotas is mainly used for various operational activities and ecosystem incentives
              organized by Rainbow City to promote the development of the ecosystem. At the same time, incentives are
              rewarded to community members who truly contribute to the community, so that more community members can
              become the masters of the entire community.
            </div>
            <div class="row-item">
              These 2 billion quotas are mainly used for content mining incentives on the Rainbow Island content social
              platform. Rainbow Island will establish a content social platform for the community members of Rainbow
              City to fully communicate.
            </div>
            <div class="row-item">
              This 5 billion quota is mainly reserved for ecological development. When there are some new ecological
              expansions or major breakthroughs in the original ecology, the project can apply for the use of Ecosystem
              Reservation funds for incentives. Rainbow DAO promotes the development of the ecosystem in this way.
            </div>
          </div>
        </div>

      </div>
      <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
export default {
  name: "tokenPage7",
  props: ["isUp"],
  components:{pageFooter}

}
</script>

<style lang="scss" scoped>

.token-page7 {
  .page-content {
    overflow-y: auto;

    .rainbow-table {
      box-sizing: border-box;
      width: 900px!important;
      margin: 0!important;
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
          width: 280px;
        }

        .item:nth-child(2) {
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
            padding: 10px;
            align-items: center;
            text-align: left!important;
            justify-content: center;
            border: 1px solid #eee;
          }
        }

        .col-item:nth-child(1) {
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


        .col-item:nth-child(2) {
          width: 100px;
        }

        .col-item:nth-child(2), .col-item:nth-child(3) {

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
