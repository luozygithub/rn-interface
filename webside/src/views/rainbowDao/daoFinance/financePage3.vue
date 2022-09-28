<template>
  <div class="finance-page3">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        RAINBOW CITY MINISTRY OF FINANCE’S<br>INCOME DISTRIBUTION AND USAGE PRINCIPLES
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        ECOSYSTEM RETENTION (20%)
      </div>
      <div class="content">
        20% of the revenue from the ecosystem will be deposited into the Rainbow City Foundation for the circular
        development of the ecosystem.
      </div>
      <div class="title">
        ECOLOGICAL DISTRIBUTION (80%)
      </div>
      <div class="rainbow-table">
        <div class="row-item">
          <div class="col-item">
            Types
          </div>
          <div class="col-item">
            PROPORTION
          </div>
          <div class="col-item">
            MANAGER
          </div>
          <div class="col-item">
            DIRECTION
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            1. Founding Team
          </div>
          <div class="col-item">
            20%
          </div>
          <div class="col-item">
            Founding Team
          </div>
          <div class="col-item">
            The funds are managed by the founding team to establish a professional operation team and technology
            development team around the world to expand the global ecosystem. At the same time, it is used as a
            long-term incentive for the team, and the use of funds is not disclosed to the community.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            2. RBT Stake Incentive
          </div>
          <div class="col-item">
            20%
          </div>
          <div class="col-item">
            Smart Contract
          </div>
          <div class="col-item">
            This part of the income is distributed to users who participate in the stake. Users who stake RBT get
            different RBT-Deposit tokens according to the time and amount of staking RBT. Users receive rewards based on
            the weight of their RBT-Deposit tokens. The reward is publicized to the entire community and accepts
            community supervision. The smart contract can be executed every 4 hours, and anyone can operate the smart
            contract to execute. The executor can get RBD rewards based on the consumed gas cost.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            3. Community Governance Incentive
          </div>
          <div class="col-item">
            20%
          </div>
          <div class="col-item">
            Smart Contract
          </div>
          <div class="col-item">
            This part of the income is distributed to users participating in community governance, and rewards are
            distributed according to the level and number of users' community governance tokens. The reward is
            publicized to the entire community and accepts community supervision. The smart contract can be executed
            every 4 hours, and anyone can operate the smart contract to execute. The executor can get RBD rewards based
            on the consumed gas cost.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            4. RBT Community Governance Fund DAO
          </div>
          <div class="col-item">
            20%
          </div>
          <div class="col-item">
            Multisig Smart Contract
          </div>
          <div class="col-item">
            This fund is staked in the smart contract pool in the form of RBT. When the number of RBTs in the pool
            reaches 3 million, the "RBT Community Governance Foundation" smart contract will be activated to run for
            committee members around the world to manage the fund. This fund is mainly used to build a global society,
            focusing on the construction of the global outstanding city node DAO, the city governance committee DAO, and
            the regional governance committee DAO. The use of this fund is transparent to the community.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            5. RBT Community Incentive Fund DAO
          </div>
          <div class="col-item">
            5%
          </div>
          <div class="col-item">
            Multisig Smart Contract
          </div>
          <div class="col-item">
            This fund is staked in the smart contract pool in the form of RBT. When the number of RBTs in the pool
            reaches 0.5 million, the "RBT Community incentive Fund" smart contract will be activated to run for
            committee members around the world to manage the fund. This fund is mainly used to motivate community
            individuals or teams who contribute to ecological expansion. For example, establish a ranking on the number
            of VIP residents invited every week or month, and encourage teams and individuals who invite a large number
            of VIP users. For example, reward social media authors worldwide. This fee is managed in the form of
            multising, and is publicized to the entire community and accepts community supervision.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            6. RBT Community Investement Fund DAO
          </div>
          <div class="col-item">
            5%
          </div>
          <div class="col-item">
            Multisig Smart Contract
          </div>
          <div class="col-item">
            This fund is staked in the smart contract pool in the form of RBT. When the number of RBTs in the pool
            reaches 2 million, the "RBT Community Investement Fund" smart contract will be activated to run for
            committee members around the world to manage the fund. The foundation sets up a special investment team to
            invest in projects around the world. The investment method is decided by the entire community voting. This
            fee is managed in the form of multising, and is publicized to the entire community and accepts community
            supervision.
          </div>

        </div>

        <div class="row-item">
          <div class="col-item">
            7. RBT Community Charity Fund DAO
          </div>
          <div class="col-item">
            5%
          </div>
          <div class="col-item">
            Multisig Smart Contract
          </div>
          <div class="col-item">
            This fund is staked in the smart contract pool in the form of RBT. When the number of RBTs in the pool
            reaches 1 million, the "RBT Community Charity Fund" smart contract will be activated to run for committee
            members around the world to manage the fund. The foundation sets up a special charity fund investment team
            to invest in charitable projects around the world. Charity projects are not scattered and focus on key
            investment in a few areas, such as charity education.This fee is managed in the form of multising, and is
            publicized to the entire community and accepts community supervision.
          </div>

        </div>
        <div class="row-item">
          <div class="col-item">
            8. Repurchase and destruction
          </div>
          <div class="col-item">
            5%
          </div>
          <div class="col-item">
            Smart Contract
          </div>
          <div class="col-item">
            This part of the income is used to repurchase and destroy RBT to achieve RBT deflation. The destruction is
            publicized to the community and is subject to community supervision.
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
  name: "financePage3",
  components: {
    pageFooter
  },
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.finance-page3 {
  .page-content {
    overflow-y: auto;
    .rainbow-table{
      box-sizing: border-box;
      width: 900px!important;
      margin: 0!important;
    }
    .title {
      font-size: 20px;
      margin-top: 20px;
      color: #db1f7e;
      font-weight: bold;
    }
  }
}
</style>
