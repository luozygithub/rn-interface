<template>
  <div class="city-page5">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        04
      </div>
      <div class="page-header-title">
        FOUR CHARACTERISTICS<br/> OF RAINBOW CITY
      </div>
    </div>
    <div class="page-content">
      <div class="card">
        <div class="card-header">
          <img class="card-logo" src="../../assets/imgs/gloable.png"/>
          <div class="card-title">
            GLOBALIZATION
          </div>
        </div>
        <div class="card-info">
          Rainbow Ecosystem establishes a global business system under the guidance of the token economy. Rainbow City
          allows users in 18 regions of the world to participate in the construction of Rainbow City around the global
          city node. Rainbow City will build an international operation and technical team to achieve multi-national,
          multi-language, and multi-cultural development.
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img class="card-logo" src="../../assets/imgs/community.png"/>
          <div class="card-title">
            Communalization
          </div>
        </div>
        <div class="card-info">
          Rainbow City conducts community governance through the "one body and two wings" model. One body refers to
          Rainbow central cabinet as a whole; two wings, two major components, that is, Rainbow founding and management
          team and community team. In the future, Rainbow City will be fully governed by the community.
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img class="card-logo" src="../../assets/imgs/token.png"/>
          <div class="card-title">
            TOKENIZATION
          </div>
        </div>
        <div class="card-info">
          Rainbow City implements token economy and community governance through a complex token system. Rainbow City
          has designed 15 types of tokens, each of which has its own unique community application scenarios and value.
          On the basis of playing their own roles, these tokens can also cooperate with other tokens to realize
          decentralized community governance.
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img class="card-logo" src="../../assets/imgs/community.png"/>
          <div class="card-title">
            Integration
          </div>
        </div>
        <div class="card-info">
          Rainbow City returns the dividends of ecosystem to community members through the integration of token economy
          and community governance. Through a complex economic model, Rainbow City balances the interests of short-term
          investors, project believers and project management teams to achieve community integration.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityPage5",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.city-page5 {
  .page-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      background-size: cover;
      width: 370px;
      height: 134px;
      padding: 38px;

      .card-header {
        display: flex;
        align-items: center;
        padding: 10px 0;
      }

      .card-logo {
        width: 32px;
        height: 32px;
      }

      .card-title {
        height: 32px;
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        margin-left: 16px;
        color: #db1f7e;
      }

      .card-info {
        line-height: 16px;
        font-size: 12px;
        color: #fff;
      }
    }

  }
}
</style>
