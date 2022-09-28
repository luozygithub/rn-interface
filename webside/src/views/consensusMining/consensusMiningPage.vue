<template>
  <div class="consensus-mining"  @mousemove="titleOnMove">

    <div class="z-box">
      <div class="city-mask"/>

      <div class="purple-bg">
        <div class="purple-ball-box">
          <div class="purple-ball"></div>
          <div class="purple-ball"></div>
          <div class="purple-ball"></div>
          <div class="purple-ball"></div>
          <div class="purple-ball"></div>
          <div class="purple-ball-out">
            <div class="purple-ball-in"></div>
          </div>
          <div class="purple-ball-out">    <div class="purple-ball-in"></div></div>
          <div class="purple-ball-out">    <div class="purple-ball-in"></div></div>
          <div class="purple-ball-out">    <div class="purple-ball-in"></div></div>
        </div>

        <div class="z-box">
          <rainbow-nav></rainbow-nav>
          <div class="title animate__animated animate__zoomIn">
            <img src="../../assets/imgs/CONSENSUSMINING.png" alt="">
          </div>
          <div class="mining-list">
            <div class="list-item">
              <div class="name">
                RBT
              </div>
              <div class="content">
                RBT is the core token in the Rainbow City ecosystem. RBT connects the entire Rainbow City ecosystem with a
                wealth of application scenarios, which can power the entire ecosystem and application scenarios. As an
                important part of obtaining RBT, consensus mining is the fastest way to obtain the token of the Rainbow City
                ecosystem.
              </div>
            </div>
            <div class="list-item">
              <div class="img-box">
                <img src="../../assets/imgs/R_bg.png" alt="">

              </div>
            </div>
            <div class="list-item">
              <div class="img-box"><img src="../../assets/imgs/cloud_bg.png" alt="">
              </div>
            </div>
            <div class="list-item">
              <div class="name">
                ISSUANCE PRINCIPLE
              </div>
              <div class="content">
                Members of the global community can participate in the construction of Rainbow City through "consensus
                mining". There are 2800 rounds of consensus mining, each round generates 500,000 RBTs, for a total of 1.4
                billion. The initial price of RBT is 0.4u, and then the price of the next round will increase by 0.01u from
                the previous round, until the end, the highest price is 28.93u. The final price is approximately 71 times that
                of the first round of mining, and approximately 284 times the price of the seed round. The overall
                subscription is about 20.153 billion US dollars. The entire consensus mining process is expected to last 3 to
                5 years.
              </div>
            </div>
            <div class="list-item">
              <div class="name">
                LOCKED POSITION <br>AND RELEASE RULES
              </div>
              <div class="content">
                After consensus mining, 20% will be released to the user's wallet as the available amount, and the remaining
                80% of RBT will be released on a daily basis, for a total of one year. The unreleased quota can be converted
                into a fixed-term locked Token——RBT-Deposit through RBT Bank, and enjoy more deposit income and community
                governance income.
              </div>
            </div>
            <div class="list-item">
              <div class="img-box">
                <img src="../../assets/imgs/circle_bg.png" alt="">
              </div>
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
        <div class="z-box" style="padding: 80px 0">
          <div class="table-title">
            RBT "CONSENSUS MINING" FUND ALLOCATION RULES
          </div>
          <div class="rainbow-table">
            <div class="first-row">
              <div class="item">
                PROJECT
              </div>
              <div class="item">
                PROPORTION OF PROJECTS
              </div>
              <div class="item">
                CLASSIFICATION
              </div>
              <div class="item">
                PROPORTION
              </div>
              <div class="item">
                SUB-CLASSIFICATION
              </div>
              <div class="item">
                PROPORTION
              </div>
            </div>
            <div class="content-box">
              <div class="col-item">
                <div class="row-item">
                  <div  style="padding: 10px!important;">
                    1. Allocation of
                    recommendation
                    system
                  </div>
                </div>
                <div class="row-item">
                  2. Allocation of community governance organizations
                </div>
                <div class="row-item">
                  3. Rainbow City Foundation
                </div>
              </div>
              <div class="col-item">
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  70%
                </div>
              </div>
              <div class="col-item">
                <div class="row-item">
                  Direct referrer
                </div>
                <div class="row-item">
                  Indirect referrer
                </div>
                <div class="row-item">
                  City node DAO
                </div>
                <div class="row-item">
                  City Governance Committee DAO
                </div>
                <div class="row-item">
                  Regional Governance Committee DAO
                </div>
                <div class="row-item">
                  Rainbow City Ministry of Finance
                </div>
                <div class="row-item">
                  Rainbow City Liquidity Stabilization Fund
                </div>
                <div class="row-item">
                  Rainbow CityEcosystem Investment Fund
                </div>
              </div>
              <div class="col-item">
                <div class="row-item">
                  80%
                </div>
                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  70%
                </div>
                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  80%
                </div>
              </div>
              <div class="col-item">

                <div class="row-item">
                  Rainbow DAO Member
                </div>
                <div class="row-item">
                  Rainbow Bronze VIP
                </div>
                <div class="row-item">
                  Rainbow Silver VIP
                </div>
                <div class="row-item">
                  Rainbow Gold VIP
                </div>
                <div class="row-item">
                  Rainbow Platinum VIP
                </div>
                <div class="row-item">
                  Rainbow DAO Member
                </div>
                <div class="row-item">
                  Rainbow Bronze VIP
                </div>
                <div class="row-item">
                  Rainbow Silver VIP
                </div>

                <div class="row-item">
                  Rainbow Gold VIP
                </div>
                <div class="row-item">
                  Rainbow Platinum VIP
                </div>
                <div class="row-item">
                  Rainbow DAO Member
                </div>
                <div class="row-item">
                  Rainbow Platinum VIP
                </div>
                <div class="row-item">
                  It belongs to the public expenses of the entire city governance committee and is used for the entire city
                  governance construction.
                </div>
                <div class="row-item">
                  It belongs to the public expenses of the entire region governance committee and is used for the entire
                  region governance construction.
                </div>
                <div class="row-item">
                  Founding and Management Team
                </div>
                <div class="row-item">
                  Dividend from Staking Income
                </div>

                <div class="row-item">
                  Dividends from community governance income
                </div>
                <div class="row-item">
                  RBT Community Governance Fund DAO
                </div>
                <div class="row-item">
                  RBT Community Reward Fund DAO
                </div>

                <div class="row-item">
                  RBT Community Investment Fund DAO
                </div>
                <div class="row-item">
                  RBT Community Charity Fund DAO
                </div>
                <div class="row-item">
                  Repurchase in the secondary market and then destroy
                </div>

                <div class="row-item">
                  RBT——RUSD
                </div>
                <div class="row-item">
                  RBD——RUSD
                </div>
                <div class="row-item">
                  RBT-Seed——RUSD
                </div>

                <div class="row-item">
                  RBT-EX——RUSD
                </div>
                <div class="row-item">
                  Investment fund for DeFi
                </div>
                <div class="row-item">
                  Invetment fund for Network
                </div>
                <div class="row-item">
                  Investment fund for Education
                </div>
                <div class="row-item">
                  Investment fund for Industry
                </div>
                <div class="row-item">
                  Investment fund for Culture
                </div>
                <div class="row-item">
                  Investment fund for Invest
                </div>
                <div class="row-item">
                  Investment fund for R&D
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
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  90%
                </div>
                <div class="row-item">
                  100%
                </div>
                <div class="row-item">
                  100%
                </div>
                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  20%
                </div>

                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  5%
                </div>

                <div class="row-item">
                  5%
                </div>
                <div class="row-item">
                  5%
                </div>
                <div class="row-item">
                  5%
                </div>

                <div class="row-item">
                  80%
                </div>
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  5%
                </div>

                <div class="row-item">
                  5%
                </div>
                <div class="row-item">
                  20%
                </div>
                <div class="row-item">
                  10%
                </div>

                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  30%
                </div>
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  10%
                </div>
                <div class="row-item">
                  10%
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="footer-box">
        <pageFooter v-show="scrollNumber>3520"></pageFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
import $ from "jquery";
export default {
  name: "consensusMiningPage",
  components:{pageFooter},
  data(){
    return{
      scrollNumber:0,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
    },
    titleOnMove(e) {
      if (this.time && Date.now() - this.time < 60) return
      this.time = Date.now()
      this.tempTlip = true
      let x = e.clientX, y = e.clientY
      let width = $(window).width(), height = $(window).height()
      let transValue = (x - width / 2) / 20;
      $(".city-mask").css("transform", `translate3d(${transValue / 2}px,0,0)`);
      $(".rainbow-city-bg").css("background-position", `${transValue / 3 - 80}px 0`);
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes scrollInTop {
  0%{
    top: -100%;
  }
  100%{
    top: 0;
  }
}
@keyframes moveBall1 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(100px, 900px);
  }
  50%{
    transform: translate(600px, 1900px);
  }
  75%{
    transform: translate(100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall2 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(100px, 200px);
  }
  50%{
    transform: translate(600px, 900px);
  }
  75%{
    transform: translate(100px, 300px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall3 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(100px, 100px);
  }
  50%{
    transform: translate(600px, 900px);
  }
  75%{
    transform: translate(100px, 100px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall4 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(100px, 300px);
  }
  50%{
    transform: translate(600px, 900px);
  }
  75%{
    transform: translate(100px, 300px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall5 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(70vw, -100px);
  }
  50%{
    transform: translate(50vw, -900px);
  }
  75%{
    transform: translate(10vw, -100px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall6 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(70vw, 100px);
  }
  50%{
    transform: translate(50vw, 900px);
  }
  75%{
    transform: translate(10vw, 100px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall7 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(10vw, -100px);
  }
  50%{
    transform: translate(50vw,-900px);
  }
  75%{
    transform: translate(50vw, -100px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall8 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(100px, -100px);
  }
  50%{
    transform: translate(600px, -900px);
  }
  75%{
    transform: translate(100px, -100px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall9 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, -100px);
  }
  50%{
    transform: translate(-600px, -900px);
  }
  75%{
    transform: translate(-100px, -100px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
.purple-ball-box{
  width: 100%;
  height: 1200px;
  overflow: hidden;
  position: absolute;

  .purple-ball{
    background: linear-gradient(160deg, #660260, #060007);
    border-radius: 50%;
    position: absolute;
  }
  .purple-ball-out{
    background: linear-gradient(90deg, #660260, #060007);
    border-radius: 50%;
    position: absolute;
    padding: 2px;
    .purple-ball-in{
      position: absolute;
      width: 98%;
      height: 98%;
      border-radius: 50%;
      left: 0;
      top: 0;
      background: #000;
    }
  }
  .purple-ball-out:nth-last-child(1){
    height: 150px;
    width: 150px;
    left: 50vw;
    top: 100px;
    animation: moveBall2 200s infinite;
  }
  .purple-ball-out:nth-last-child(2){
    height: 150px;
    width: 150px;
    left: 10vw;
    bottom: 0px;
    animation: moveBall5 200s infinite;
  }
  .purple-ball-out:nth-last-child(3){
    left: 60vw;
    bottom: 0px;
    height: 260px;
    width: 260px;
    animation: moveBall7 200s infinite;
    background: linear-gradient(-90deg, #660260, #060007);
    .purple-ball{
      margin-left: -1px;
    }
  }
  .purple-ball-out:nth-last-child(4){
    height: 50px;
    width: 50px;
    left: 80vw;
    bottom: 400px;
    animation: moveBall8 200s infinite;
    .purple-ball{
      margin-left: -4px;
    }
  }
  .purple-ball:nth-child(1){
    height: 160px;
    width: 160px;
    left: 50px;
    top: -100px;
    animation: moveBall2 200s infinite;
  }
  .purple-ball:nth-child(2){
    height: 160px;
    width: 160px;
    left: 150px;
    top: 300px;
    animation: moveBall2 200s infinite;
  }
  .purple-ball:nth-child(3){
    height: 80px;
    width: 80px;
    right: 30px;
    top: 300px;
    animation: moveBall3 200s infinite;
  }
  .purple-ball:nth-child(4){
    height: 80px;
    width: 80px;
    left: 30px;
    bottom: 200px;
    animation: moveBall8 200s infinite;
  }
  .purple-ball:nth-child(5){
    height: 80px;
    width: 80px;
    left: 300px;
    top: 300px;
    animation: moveBall8 200s infinite;
  }
  .purple-ball:nth-child(6){
    height: 80px;
    width: 80px;
    right: 30px;
    bottom: 0px;
    animation: moveBall9 200s infinite;
  }
}
@keyframes flotage {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2px, 18px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.consensus-mining {
  background: #000;

  .city-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    animation: scrollInTop 3s linear;
    left: 0;
    z-index: 0;
    background: url("../../static/imgs/city_mask.png");
  }
  .long-white-bg{
    padding-bottom: 30px;
  }
  .rainbow-token {
    background-image: url("../../static/imgs/mining_bg.png") !important;
    background-size: 100% auto;
  }
  .title {
    height: 160px;
    text-align: center;

    img {
      margin-top: 30px;
      width: 560px;
    }
  }

  .mining-list {
    width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 80px;
    .list-item {
      width: 400px;

      &:nth-child(4) {
        .name {
          text-align: right !important;
        }
      }

      .name {
        width: 100%;
        font-size: 26px;

        font-weight: bold;
        color: #db1f7e;
        line-height: 34px;
        padding: 40px 0 20px;
      }

      .content {
        line-height: 26px;
        text-align: justify;
      }

      .img-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: flotage 13s infinite linear;
        &:hover{
          img{
            transform: scale(1.3);
          }
        }
        img {
          transition: 1s;
          width: 300px;
        }
      }
    }
  }

  .rainbow-table {
    width: 900px !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;

    .row-item:first-child {
      background: white !important;
      color: black !important;
      text-transform: none !important;

    }

    .first-row {
      display: flex;
      color: white;
      .item {
        height: 60px;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 6px;
        border: 0.5px solid #eee;
      }

      .item:nth-child(1) {
        width: 120px;
      }

      .item:nth-child(2) {
        width: 120px;
      }

      .item:nth-child(3) {
        width: 140px;
      }

      .item:nth-child(4) {
        width: 100px;
      }

      .item:nth-child(5) {
        width: 300px;
      }

      .item:nth-child(6) {
        width: 120px;
      }

      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
    }

    .content-box {
      display: flex;

      .col-item {


        .row-item {
          text-align: left !important;
          padding: 10px!important;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee;
        }
      }

      .col-item:nth-child(1) {
        width: 120px !important;
      }

      .col-item:nth-child(2) {
        width: 120px;
      }

      .col-item:nth-child(3) {
        width: 140px;
      }

      .col-item:nth-child(4) {
        width: 100px;
      }

      .col-item:nth-child(5) {
        width: 300px;
      }

      .col-item:nth-child(6) {
        width: 120px;
      }

      .col-item:nth-child(1), .col-item:nth-child(2) {

        .row-item:nth-child(1) {
          height: 800px;
        }

        .row-item:nth-child(2) {
          height: 1120px;
        }

        .row-item:nth-child(3) {
          height: 880px;
        }
      }

      .col-item:nth-child(3), .col-item:nth-child(4) {

        .row-item:nth-child(1), .row-item:nth-child(2) {
          height: 400px;
        }

        .row-item:nth-child(3), .row-item:nth-child(4), .row-item:nth-child(5) {
          height: 160px;
        }

        .row-item:nth-child(6) {
          height: 640px;
        }

        .row-item:nth-child(7) {
          height: 320px;
        }

        .row-item:nth-child(8) {
          height: 560px;
        }
      }

      .col-item:nth-child(5), .col-item:nth-child(6) {
        .row-item {
          height: 80px;
        }

        .row-item:nth-child(13), .row-item:nth-child(14) {
          height: 160px;
        }
      }

      .col-item:last-child {
        flex: 1;
      }


    }

  }
}
</style>
