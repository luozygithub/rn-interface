<template>
  <div class="community-page4">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        STARTING FROM REGIONAL DAO,<br> GLOBAL ECOLOGICAL GOVERNANCE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        COMMUNITY GOVERANCE （ERC721）
      </div>
      <p>
        Community members holding RBT-Deposit tokens can apply for RBT community governance tokens based on the number
        of
        RBTs contained in each token and the stake time. There are two conditions for applying for community governance
        tokens, one is that the stake time is greater than or equal to 12 months, and the other is that the number of
        RBT
        stakes must meet certain requirements.
      </p>
      <p> Stake 2000 RBTs can apply for an RBT-Elf community governance NFT token,
        10,000 RBTs can apply for an RBT-Envoy community governance NFT token, and 50,000 RBTs can apply for an
        RBT-Partner community governance NFT token. , 100,000 RBTs can apply for one RBT-Supnode community governance
        NFT
        token.</p>
      <p>
        The community governance NFT tokens are all ERC721 standards, unique and indivisible, and represent the
        corresponding equity. The validity period of the applied community governance token is consistent with the
        expiration time of the RBT-Deposit token.
      </p>
      <p>
        20% of the distributable net income of the Rainbow City Ministry of
        Finance is used for "community governance income incentives", which are based on the number of community
        governance tokens. There are four different types of community governance tokens, and the dividend ratio for
        each
        token is 25%. The dividends of a single token are distributed equally according to the number of tokens held at
        the time of the snapshot.
      </p>
      <div class="rainbow-table">
        <div class="row-item">
          <div class="col-item">
            RBT AMOUNT IN RBT-DEPOSIT TOKEN
          </div>
          <div class="col-item">
            DEPOSIT TIME
          </div>
          <div class="col-item">
            TOKEN TYPE
          </div>
          <div class="col-item">
            ALLOCATE WEIGHT
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            200 RBT
          </div>
          <div class="col-item">
            ≥12 month
          </div>
          <div class="col-item">
            RBT-Elf
          </div>
          <div class="col-item">
            25%
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            10000 RBT
          </div>
          <div class="col-item">
            ≥12 month
          </div>
          <div class="col-item">
            RBT-Envoy
          </div>
          <div class="col-item">
            25%
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            50000 RBT
          </div>
          <div class="col-item">
            ≥12 month
          </div>
          <div class="col-item">
            RBT-Partner
          </div>
          <div class="col-item">
            25%
          </div>

        </div>
        <div class="row-item">
          <div class="col-item">
            100000 RBT
          </div>
          <div class="col-item">
            ≥12 month
          </div>
          <div class="col-item">
            RBT-Supnode
          </div>
          <div class="col-item">
            25%
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage4",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page4 {
  .page-content {
    overflow: auto;

    .rainbow-table {
      width: 900px !important;
      margin: 20px 0 0 0 !important;
      .row-item{
        .col-item{
          width: 200px!important;
          text-align: center!important;
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
