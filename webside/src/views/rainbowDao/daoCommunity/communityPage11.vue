<template>
  <div class="community-page13">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        RVIP, LOYAL USERS <br>OF RAINBOW CITY
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
        <div class="row-item">
          <div class="col-item">
            TYPE
          </div>
          <div class="col-item">
            PROPORTION
          </div>
          <div class="col-item">
            ALLOCATION RULES
          </div>
          <div class="col-item">
            USING REGULATIONS
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            1. Extension System
          </div>
          <div class="col-item">
            20%
          </div>
          <div class="col-item">
            According to the different levels of VIP tokens, a two-level rebate will be made according to different
            proportions. This reward is directly distributed to the corresponding promotion account.
          </div>
          <div class="col-item">
            Used by extension team
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            2. Citynode DAO
          </div>
          <div class="col-item">
            10%
          </div>
          <div class="col-item">
            If a user chooses to join the corresponding city node when registering for Rainbow DAO, the city node will
            receive a corresponding proportion of income. If the user does not choose to join the corresponding city
            node, this proportion will be directly attributed to the Rainbow City Ministry of Finance.
          </div>
          <div class="col-item">
            10% is used as the city node administrator's reward fee. The other 90% is used as the city node public fund,
            supervised by the executive committee selected by the node members.
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
            3.City Governance Committent DAO
          </div>
          <div class="col-item">
            10%
          </div>
          <div class="col-item">
            If a user chooses to join a city node when registering for Rainbow DAO, the city node’s "City Governance
            Committee DAO" can get 10% of the income and enter the corresponding fund pool. If the "City Governance
            Committee DAO" has not been established, this proportion will go directly to Rainbow City Ministry of
            Finance.
          </div>
          <div class="col-item">
            When a city has 10 city nodes, a "City Governance Committee" can be formed. Each RBT-Elf can run for the
            city governance executive committee. This part of the funds is managed by the city governance committee and
            used for the city's VIP and ecosystem develop.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            4.Region Governance Committent DAO
          </div>
          <div class="col-item">
            10%
          </div>
          <div class="col-item">
            Multiple city governance committees can form a regional governance committee. If users choose to join the
            corresponding city node when registering Rainbow DAO, the corresponding "regional governance committee" can
            get 10% of the income and enter the corresponding fund pool. If the "regional governance committee" DAO" has
            not been established yet, this proportion will go directly to Rainbow City Ministry of Finance.
          </div>
          <div class="col-item">
            This part of the funds is managed by the "Regional Governance Committee DAO" and used for the evangelism and
            publicity of Rainbow City in the region.
          </div>

        </div>
        <div class="row-item">
          <div class="col-item">
            5.Rainbow City Ministry of Finance
          </div>
          <div class="col-item">
            50%
          </div>
          <div class="col-item">
            After deducting the above-mentioned various expenses and sharing, the remaining funds are entered into the
            income account of the Rainbow City Ministry of Finance for the overall distribution of the ecosystem.
          </div>
          <div class="col-item">
            Follow the overall distribution plan of ecosystem income.
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage11",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page13 {
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
