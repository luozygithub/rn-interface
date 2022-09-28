<template>
  <div class="rainbow-defi"  @mousemove="titleOnMove">
    <div style="position: relative;z-index: 2">
      <div class="city-mask"/>
      <rainbow-nav></rainbow-nav>
      <div class="defi-title animate__animated animate__zoomIn">
        <img class="defi-title-img" src="../../assets/imgs/RAINBOWDEFI.png" alt="">
      </div>
      <div class="defi-content">
        <p>
          DeFi means decentralized finance. DeFi combines traditional financial projects with blockchain and strengthens
          the
          connection between financial products through functional contracts.
        </p>
        <p>
          After nearly two years of development, DeFi
          has fully demonstrated its potential in the future economic field. DeFi is favored by many people due to its
          openness, transparency, composability, and license-free features. DeFi creates unlimited imagination for the
          financial system on the blockchain and meets market needs.
        </p>
        <p>
          Up to now, protocols of stablecoins, such as public
          chains of Bitcoin, Ethereum and Polkadot, MakerDAO, FEI and Liquity, of transaction, such as bancor and curve,
          of
          lending, such as aave and compound, of Oracle like link and of wallet like Metamask are all flourishing,
          especially DeFi based on Ethereum.
        </p>
        <p>
          But those protocols are dissociated and competing, resultant force is needed.
          No matter they are protocols of the same or different type in the same public chain, or in different public
          chains. They are after all rivals, contending for and tearing up limited liquidity, particularly at present when
          a
          cross-chain protocol of freedom hasn’t been made among major public chains. Worse still, financial liquidity
          lacks
          loyalty greatly, it flows in coordination with high interest since a previously prosperous protocol can fall
          mediocre overnight.
        </p>
        <p>
          Additionally, various blockchain protocols have their own independent token and economy
          models. Though divergent DeFi protocols can quote and be overlaid with each other like toy bricks. However, the
          superposition is confined to function, token and economy are not involved in essence. Tokens of diverse kinds
          can
          not cooperate well, in fact, they affect each other. That prevents the formation of a consolidated economy, so
          its
          internal value won’t rise with the improvement in governance capabilities.
        </p>
        <p>
          To deal with that problem, we put
          forward “Rainbow City” today to establish a super economy of harmony, unification and effective collaboration.
          Combined with a series of meticulous design of tokens and diversified sorts of mining, Rainbow City will render
          Rainbow DAO as its kernel to unify scattered economic behaviors of diverse usage and put them in one economy.
        </p>
      </div>
      <div class="part1">
        <div class="part-title-l" :class="{'animate__animated animate__fadeIn': scrollNumber>part1ToTop-100 && scrollNumber<part1ToTop+clintHeight + 100}">
          RBT COMMUNITY INCENTIVE MECHANISM
        </div>
        <div class="R-box">
          <div class="wave-box"/>
          <div class="wave-box"/>
          <div class="wave-box"/>
          <div class="wave-box"/>
          <div class="wave-box"/>
          <div class="wave-box"/>
          <div class="wave-box"/>
          <div class="wave-box"/>
          <img class="part-img" src="../../assets/imgs/R_icon.png" alt="">
        </div>
        <div class="part1-list">
          <div class="list-item">
            <div class="title">
              DEX
            </div>
            <div class="content">
              Rainbow City DEX provides users a platform for token trading based on AMM-Automatic Market Maker. The
              RBT-RUSD token trading pair will first be launched in Rainbow City DEX to allow RBT to circulate in the
              secondary market.
            </div>
          </div>
          <div class="list-item">
            <div class="title">
              BANK
            </div>
            <div class="content">
              In Rainbow City’s DeFi system, users can earn interest on deposits and borrow assets through open source
              protocols.
            </div>
          </div>
          <div class="list-item">
            <div class="title">
              RUSD
            </div>
            <div class="content">
              Rainbow City will issue stable currency RUSD. Rainbow City allows users to mortgage WBTC, ETH and other
              value assets to mint RUSD. RUSD can be circulated in any place that accepts RUSD, or it can be mortgaged to
              the protocols to get rewards.
            </div>
          </div>
          <div class="list-item">
            <div class="title">
              RBTC
            </div>
            <div class="content">
              Rainbow City will issue RBT anchor token RBTC. Through the Rainbow Bridge, Rainbow City will give the BTC
              which on the Bitcoin chain economic and financial value, not just for on-chain transactions. RBTC will
              gradually replace WBTC as the value reserve of Rainbow City.
            </div>
          </div>
        </div>
      </div>
      <div class="footer-box">
        <pageFooter v-show="scrollNumber>footerToTop - 100"></pageFooter>
      </div>
    </div>

  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
import $ from "jquery";
export default {
  name: "rainbowDEFIPage",
  components:{
    pageFooter
  },
  data(){
    return {
      scrollNumber:0,
      footerToTop:0,
      part1ToTop:0,
      clintHeight:0
    }
  },
  methods:{
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
      $(".rainbow-defi").css("background-position", `${transValue / 3 - 80}px 0`);
    }
  },
  mounted () {
    this.scrollNumber = document.documentElement.scrollTop
    window.addEventListener('scroll', this.handleScroll)
    this.clintHeight = document.body.clientHeight;
    this.footerToTop = document.getElementsByClassName("footer-box")[0].offsetTop- document.body.clientHeight;
    this.part1ToTop = document.getElementsByClassName("part1")[0].offsetTop- document.body.clientHeight;

  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
@keyframes scaleWave {
  0%{
    opacity:1;
    transform: scale(-0.2);
  }
  10%{
    opacity:1;
    transform: scale(0.3);
  }
  30%{
    opacity:1;
    box-shadow: 0 0 50px #ff0202;
  }
  40%{
    opacity:1;
    box-shadow: 0 0 20px #f100ed;
  }
  80%{
    opacity:0.3;
    box-shadow: 0 0 10px #fcfc00;
  }
  100%{
    transform: scale(1.4);
    box-shadow: 0 0 4px floralwhite;
    opacity: 0;
  }
}
@keyframes scrollInTop {
  0%{
    top: -100%;
  }
  100%{
    top: 0;
  }
}
.rainbow-defi {
  width: 100%;
  background: url("../../static/imgs/defi_bg.png") -80px 0;
  background-size: 110% 100%;
  transition: 0.5s;
  transition-timing-function: ease-out;
  .page-footer{
    margin-top: 70px;
    background: rgba(0,0,0,0) !important;
  }

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

  .defi-title {
    width: 420px;
    margin: 0 auto;
    height: 180px;
    .defi-title-img {
      margin-top: 30px;
      width: 100%;
    }
  }

  .defi-content {
    width: 900px;
    margin: 0 auto;
    line-height: 30px;
    text-align: justify;
    p {
      font-size: 16px;
      line-height: 36px;
      margin-top: 20px;
    }

  }
  .part1{
    width:900px;
    margin: 0 auto;
    position: relative;
    .R-box{
      //overflow: hidden;
      position: absolute;
      width: 260px;
      height: 260px;
      left: calc(50% - 120px);
      top: calc(50% - 50px);
      border-radius: 50%;
      .wave-box{
        border-radius: 50%;
        padding: 2px;
        animation: scaleWave 8s infinite linear;
        position: absolute;
        width: 200px;
        height: 200px;
        left: 20px;
        top: 30px;
        z-index: 1;
        transform: scale(0);
        &:nth-child(1){
          animate-delay: 1s!important;
          -webkit-animation-delay:1s; /* Safari 和 Chrome */
        }
        &:nth-child(2){
          -webkit-animation-delay:2s; /* Safari 和 Chrome */
          animate-delay: 2s!important;
        }
        &:nth-child(3){
          animate-delay: 3s;
          -webkit-animation-delay:3s; /* Safari 和 Chrome */
        }
        &:nth-child(4){
          animate-delay: 4s;
          -webkit-animation-delay:4s; /* Safari 和 Chrome */
        }
        &:nth-child(5){
          animate-delay: 5s;
          -webkit-animation-delay:5s; /* Safari 和 Chrome */
        }
        &:nth-child(6){
          animate-delay: 6s;
          -webkit-animation-delay:6s; /* Safari 和 Chrome */
        }
        &:nth-child(7){
          animate-delay: 7s;
          -webkit-animation-delay:7s; /* Safari 和 Chrome */
        }
      }
      .part-img{
        width: 100px;
        margin-left: 29%;
        margin-top: 29%;
        position: relative;
        z-index: 2;
      }
    }

    .part1-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 80px;
      .list-item{
        width: 300px;
        &:nth-child(2n){
          margin-left: 180px;
          .title{
            text-align: left!important;
          }
        }
        &:nth-child(n+3){
          margin-top: 100px;
        }
        .title{
          font-size: 28px;
          font-weight: bold;
          text-align: right;
          color: #db1f7e;
          line-height: 32px;
        }
        .content{
          padding-top: 10px;
          line-height: 30px;
          text-align: justify;
        }
      }
    }
    .rainbow-table{
      margin: 0 auto;
    }
  }

}
</style>
