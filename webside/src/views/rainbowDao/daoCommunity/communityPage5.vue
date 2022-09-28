<template>
  <div class="community-page5">
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
        RBT LOCK-UP REVENUE INCENTIVES
      </div>
      <p>
        There are RBT-Deposit bank deposit certificate tokens, and RBT-Envoy, RBT-Partner and RBT-Supnode can be
        generated according to the amount of RBT included and the time of the stake.
      </p>
      <p>
        Community members who have these
        three kinds of tokens can generate the Rainbow City city node token-RBT-Citynode, and those who own RBT-Citynode
        can apply for the establishment of a city node DAO.
      </p>
      <div class="token-list">
        <div class="token-item">
          <div class="item-title">
            RBT-Elf
          </div>
          <div class="item-content">
            Not applicable
          </div>
        </div>
        <div class="token-item">
          <div class="item-title">
            RBT-Envoy
          </div>
          <div class="item-content">
            RBT-Enovy can apply for 1 RBT-Citynode, valid for 3 months
          </div>
        </div>
        <div class="token-item">
          <div class="item-title">
            RBT-Partner
          </div>
          <div class="item-content">
            RBT-Partner can apply for 3 RBT-Citynode, valid for 3 months
          </div>
        </div>
        <div class="token-item">
          <div class="item-title">
            RBT-Supnode
          </div>
          <div class="item-content">
            RBT-Supnode can apply for 5 RBT-Citynode, valid for 3 months
          </div>
        </div>

      </div>
      <p>
        Each application for the establishment of a city node DAO needs to consume 1 RBT-Citynode valid for 90 days.
        After 90 days, one RBT-Citynode pass needs to be consumed again to extend the management right of the city node.
        A city can apply for the establishment of multiple city node DAOs, and multiple city node DAOs can be formed
        into a city's "urban governance committee DAO". Every community member who owns the " RBT-Elf" can run as a
        member of the “City Governance Committee DAO” and participate in the governance of the city's community.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage5",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page5 {
  .page-content {
    overflow: auto;

    .title {
      color: #db1f7e;
      font-size: 20px;
    }

    .token-list {
      display: flex;
      justify-content: space-between;

      .token-item {
        width: 170px;
        height: 200px;
        background: #131028;
        border: 1px solid #333333;
        border-radius: 10px;

        padding: 10px;

        .item-title {
          font-size: 18px;
          color: #db1f7e;
          text-align: center;
        }

        .item-content {

        }
      }
    }
  }
}
</style>
