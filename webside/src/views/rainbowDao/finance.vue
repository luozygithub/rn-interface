<template>
  <div class="finance">

    <div class="finance-list">
      <div class="list-item" :class="{'fadeInLeft':isLeft&&active,'fadeInRight':!isLeft&&active}">
        <div class="img-box">
          <img class="img" src="../../assets/imgs/Oracle.png" alt="strategyManage">
        </div>
        <div class="content-box">
          <div class="title">
            ACCOUNTING PRINCIPLES
          </div>
          <div class="content">
            After deducting the actual marketing or operating costs, all projects will form income in the form of
            net income and be collected to the Rainbow City Ministry of Finance. Some projects will be submitted
            to the Rainbow City Ministry of Finance according to their net profits for redistribution as the
            Ministry of Finance's net income. After the Rainbow City Ministry of Finance generates net income, 80%
            can be used for real-time distribution, and the other 20% can be retained by the Rainbow City
            Foundation for overall ecological construction and development.
          </div>
        </div>

      </div>
      <div class="list-item" :class="{'fadeInLeft':isLeft&&active,'fadeInRight':!isLeft&&active}" >
        <div class="img-box">
          <img class="img" src="../../assets/imgs/organization.png" alt="strategyManage">
        </div>
        <div class="content-box">
          <div class="title">
            MANAGEMENT SUBJECT
          </div>
          <div class="content">
            The Rainbow City Ministry of Finance belongs to the "Rainbow City Central Cabinet", which is part of
            the execution system. The founding management team will coordinate the income of various business
            entities in the RBT ecosystem at the initial stage, and calculate the corresponding costs. The
            subsequent income management and distribution will gradually migrate to the on-chain DAO Organize
            management and distribution, and the community is truly responsible for the development of the entire
            ecology.
          </div>
        </div>
      </div>
      <div class="list-item" :class="{'fadeInLeft':isLeft&&active,'fadeInRight':!isLeft&&active}" >
        <div class="img-box">
          <img class="img" src="../../assets/imgs/database.png" alt="strategyManage">
        </div>
        <div class="content-box">
          <div class="title">
            MANAGEMENT PRINCIPLES
          </div>
          <div class="content">
            The entire financial system is open and transparent, and income distribution and dividends on the
            chain are realized. The income account is publicized to the community, and the income distribution is
            publicized to the entire community. At the same time, the principle of financial confidentiality is
            established, and the core financial data is not publicized.
          </div>
        </div>

      </div>
    </div>
    <div class="long-white-bg">
      <div class="ball-box">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
      <div class="z-box">
        <div class="finance-content1">
          <div class="part-title" :class="{'animate__animated animate__flipInX':scrollNumber > 130 }">
            RAINBOW CITY FINANCE DEPARTMENT<br> REVENUE MANGEMENT INSTRUCTIONS
          </div>
          <div class="title">
            ECOLOGICAL RETENTION (20%)
          </div>
          <div class="page-content">
            20% of the revenue from the ecosystem will be deposited into the Rainbow City Foundation for the circular
            development of the ecosystem.
          </div>
          <div class="title">
            ECOSYSTEM ALLOCATION (80%)
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
                1.Founding Team
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
                2.RBT Stake Incentive
              </div>
              <div class="col-item">
                20%
              </div>
              <div class="col-item">
                Smart Contract
              </div>
              <div class="col-item">
                This part of the income is distributed to users who participate in the stake. Users who stake RBT get
                different RBT-Deposit tokens according to the time and amount of staking RBT. Users receive rewards based
                on
                the weight of their RBT-Deposit tokens. The reward is publicized to the entire community and accepts
                community supervision. The smart contract can be executed every 4 hours, and anyone can operate the smart
                contract to execute. The executor can get RBD rewards based on the consumed gas cost.
              </div>

            </div>

            <div class="row-item">
              <div class="col-item">
                3.Community Governance Incentive
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
                every 4 hours, and anyone can operate the smart contract to execute. The executor can get RBD rewards
                based
                on the consumed gas cost.
              </div>

            </div>

            <div class="row-item">
              <div class="col-item">
                4.RBT Community Governance Fund DAO
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
                focusing on the construction of the global outstanding city node DAO, the city governance committee DAO,
                and
                the regional governance committee DAO. The use of this fund is transparent to the community.
              </div>

            </div>

            <div class="row-item">
              <div class="col-item">
                5.RBT Community Incentive Fund DAO
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
                individuals or teams who contribute to ecological expansion. For example, establish a ranking on the
                number
                of VIP residents invited every week or month, and encourage teams and individuals who invite a large
                number
                of VIP users. For example, reward social media authors worldwide. This fee is managed in the form of
                multising, and is publicized to the entire community and accepts community supervision.
              </div>

            </div>

            <div class="row-item">
              <div class="col-item">
                6.RBT Community Investement Fund DAO
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
                8.Repurchase and destruction
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
        </div>
      </div>
    </div>
    <div class="footer-box">
      <pageFooter v-show="scrollNumber>1910"></pageFooter>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";

export default {
  name: "finance",
  components: {pageFooter},
  props:['isLeft','active'],
  data(){
    return{
      scrollNumber:0,
      footerToTop:0,
      clientHeight:0,
    }
  },
  mounted () {
    this.scrollNumber = document.documentElement.scrollTop
    window.addEventListener('scroll', this.handleScroll)
    this.clientHeight = document.body.clientHeight;
    this.footerToTop = document.getElementsByClassName("footer-box")[0].offsetTop - document.body.clientHeight;

  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods: {
    openDiagram() {
      let path = this.$router.resolve({path: '/diagram', query: {}})
      window.open(path.href, '_bank')
    },
    handleScroll () {
      this.scrollNumber = document.documentElement.scrollTop

    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeInLeft {
  0%{
    transform: translate3d(-150%,0 ,0);
  }
  50%{
    transform: translate3d(-150%,0 ,0);
  }
  100%{
    transform: translate3d(0%,0 ,0);
  }
}
@keyframes fadeInRight {
  0%{
    transform: translate3d(150%,0 ,0);
  }
  50%{
    transform: translate3d(150%,0 ,0);
  }
  100%{
    transform: translate3d(0%,0 ,0);
  }
}
.finance {
  .finance-list {
    width: 900px;
    margin: 0 auto;
    padding-bottom: 50px;
    .list-item {
      display: flex;
      margin-top: 30px;

      .img-box {
        padding: 0 80px;

        .img {
          margin-top: 60px;
          width: 60px;
        }

      }

      .content-box {
        width: 700px;

        .title {
          height: 70px;
          font-weight: bold;
          font-size: 24px;
          text-align: left;
          color: #db1f7e;
          line-height: 70px;
        }
        .content{
          line-height: 24px;
        }
      }
    }
    .fadeInLeft{
      &:nth-child(1){
        animation:fadeInLeft 0.2s;
      }
      &:nth-child(2){
        animation:fadeInLeft 0.6s;
      }
      &:nth-child(3){
        animation:fadeInLeft 1.2s;
      }
    }
    .fadeInRight{
      &:nth-child(1){
        animation:fadeInRight 0.5s;
      }
      &:nth-child(2){
        animation:fadeInRight 1s;
      }
      &:nth-child(3){
        animation:fadeInRight 1.5s;
      }
    }
  }

  .finance-content1 {
    margin-top: 50px;
    padding-bottom: 50px;
    .title {
      width: 900px;
      margin: 50px auto 0;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      color: #db1f7e;
      line-height: 34px;
    }

    .rainbow-table {
      width: 900px !important;
      margin: 30px auto !important;
    }
  }
}
</style>
