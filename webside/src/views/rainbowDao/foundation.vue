<template>
  <div class="foundation">
    <div class="page-content">
      <p>
        Rainbow City foundation, the ecological investment management department, is in charge of the ecological
        investment and construction of the entire Rainbow City, governing 70% of the funds in RBT consensus mining and
        20% of the revenue from finance section.
      </p>
      <p>
        For capital in Rainbow City foundation, 20% belongs to liquidity market stabilization fund in the ecosystem of
        Rainbow City, for the management of financial liquidity and capital protection for the mechanism of value
        guardian; 80% pertains to the investment fund in the ecology of Rainbow City for the investment of the seven
        ecological systems.
      </p>
      <p>
        The Rainbow City Liquidity Stabilization Fund comes from the Rainbow City Foundation part of Consensus Mining.
        All assets expect RBT will be converted into ETH and WBTC. The ratio of ETH to WBTC is 50% to 50%, and this
        ratio can be adjusted. At the beginning, WBTC was the mainstay, and then the RBTC issued by Rainbow City was the
        mainstay to form BTC's capital reserve.
      </p>
      <p>
        Then allocate ETH and WBTC to four different liquidity pools in proportion. Store the ETH and WBTC in the four
        different pools into the loan protocol, and mint the stable currency RUSD. The value of the minted stablecoin is
        between 40% and 70% of the collateral. The specific ratio is subject to when the protocol is officially
        launched. Then the generated stablecoins are injected into the liquidity pools of the four currencies to provide
        liquidity for the four tokens. The initial funds provided are RUSD, and another token of liquidity pair is
        purchased through RUSD. The two kinds of tokens are injected into the pool with the same amount of funds. With
        the continuous increase of injected capital and the continuous increase of liquidity, the depth of the capital
        pool is also increasing.
      </p>
      <p>
        This operation can be performed every four hours, and anyone can call the smart contract to implement the
        operation and get a certain RBD reward.
      </p>
      <p>
        In the Rainbow City Liquidity Stabilization Fund, we have also established a "value guardian mechanism" as a
        supplement to providing liquidity. When the market faces a black swan event or the price of tokens plummets, the
        "value guardian mechanism" will use liquidity funds to purchase RBT in the secondary market to maintain the
        stability of the token price, which can prevent the community consensus from breaking.
      </p>
      <p>
        When the RBT-RUSD secondary market exchange rate price is lower than 20% of its consensus mining ladder curve
        price, the "value guardian mechanism" can be activated. Use RUSD in LP to buy RBT to maintain the price of
        Tokens.
      </p>

    </div>
    <div class="dao-content-bg">
      <div class="foundation-content1">
        <div class="part-title-l" :class="{'animate__animated animate__flipInX':scrollNumber > 560 }">
          RAINBOW CITY LIQUIDITY<br>
          STABILIZATION FUND (20%)
        </div>
        <div class="foundation-list">
          <div class="list-item">
            <div class="title">
              ALLOCATION
            </div>
            <div class="content">
              The Rainbow City Liquidity Stabilization Fund comes from the Rainbow City Foundation part of Consensus
              Mining. All assets expect RBT will be converted into ETH and WBTC. The ratio of ETH to WBTC is 50% to 50%,
              and this ratio can be adjusted. At the beginning, WBTC was the mainstay, and then the RBTC issued by Rainbow
              City was the mainstay to form BTC's capital reserve. Then allocate ETH and WBTC to four different liquidity
              pools in proportion. This operation can be performed every four hours, and anyone can call the smart
              contract to implement the operation and get a certain RBD reward.
            </div>
          </div>
          <div class="list-item">
            <div class="img-box">
              <img src="../../assets/imgs/strategyManage.png" alt="">
            </div>
          </div>
          <div class="list-item">
            <div class="img-box">
              <img src="../../assets/imgs/nodeManage.png" alt="">
            </div>
          </div>
          <div class="list-item">
            <div class="title">
              STABLECOIN
            </div>
            <div class="content">
              Stake ETH and WBTC in the four different pools into the loan protocol, and mint the stable currency RUSD.
              The value of the minted stablecoin is between 40% and 70% of the collateral. The specific ratio is subject
              to when the protocol is officially launched. Then the generated stablecoins are injected into the liquidity
              pools of the four currencies to provide liquidity for the four tokens. The initial funds provided are RUSD,
              and another token of liquidity pair is purchased through RUSD. The two kinds of tokens are injected into the
              pool with the same amount of funds. With the continuous increase of injected capital and the continuous
              increase of liquidity, the depth of the capital pool is also increasing. This operation can be performed
              every four hours, and anyone can call the smart contract to implement the operation and get a certain RBD
              reward.
            </div>
          </div>
        </div>
      </div>
      <div class="foundation-content2">
        <div class="long-list">
          <div class="list-item">
            <div class="index">
              1
            </div>
            <div class="content-box">
              <div class="title">
                RBT——RUSD (80%)
              </div>
              <div class="content">
                When the price of buying RBT through DEX is lower than 20% of the price of "consensus mining", users can
                activate the "value guardian mechanism". The "Value Guardian Mechanism" will use the RUSD in the pool to
                purchase RBT and maintain its price at 20% of consensus mining, which can be activated every 4 hours. If
                the fund in the pool is insufficient and the price cannot reach 20% of the consensus mining through three
                purchases, the casting ratio of RUSD can be increased to 70% of the collateral price. The "value guardian
                mechanism" serves as the last line of defense to protect the value of the community.
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="index">
              2
            </div>
            <div class="content-box">
              <div class="title">
                RBD——RUSD (10%)
              </div>
              <div class="content">
                When the price of buying RBD through DEX is lower than 10% of the exchange price of RBD in the ecosystem -
                0.05USD, users can activate the "value guardian mechanism". The "Value Guardian Mechanism" will use the
                RUSD in the pool to purchase RBD and maintain its price at 10% of the exchange price of RBD in the
                ecosystem, which can be activated every 4 hours. If the fund in the pool is insufficient and the price
                cannot reach 0.005USD through three purchases, the casting ratio of RUSD can be increased to 70% of the
                collateral price. The "value guardian mechanism" serves as the last line of defense to protect the value
                of the community. The RUSD used cannot exceed 50% of the pool.
              </div>
            </div>

          </div>
          <div class="list-item">
            <div class="index">
              3
            </div>
            <div class="content-box">
              <div class="title">
                RBT-EX—RUSD (10%)
              </div>
              <div class="content">
                When the price of buying RBT-EX through DEX is lower than 1% of the price of buying RBT, users can
                activate the "value guardian mechanism". The "Value Guardian Mechanism" will use the RUSD in the pool to
                purchase RBT-EX and maintain its price at 1% of RBT price, which can be activated every 4 hours. If the
                fund in the pool is insufficient and the price cannot reach 1% of the RBT price through three purchases,
                the casting ratio of RUSD can be increased to 70% of the collateral price. The "value guardian mechanism"
                serves as the last line of defense to protect the value of the community. The RUSD used cannot exceed 50%
                of the pool.
              </div>
            </div>
          </div>
        </div>
        <div class="foundation-list">
          <div class="list-item">
            <div class="title">
              "Price Guardian Mechanism" operation steps:
            </div>
            <div class="content">
              1. Withdraw all LP liquidity from the DCV deposit address;<br>
              2. Use RUSD to purchase the corresponding token<br>
              3. Re-supply the remaining Token/RUSD as liquidity according to the oracle price; <br>
              4. If the fund in the pool is insufficient and the price cannot reach the tag price, the casting ratio of
              RUSD can be increased to 70%
              of the collateral price.
            </div>
          </div>
          <div class="list-item">
            <img src="../../assets/imgs/basicConfig.png" alt="">
          </div>
        </div>
      </div>
      <div class="foundation-content3">
        <div class="part-title-l" :class="{'animate__animated animate__flipInX':scrollNumber > 2350 }">
          RAINBOW CITY ECOSYSTEMS<br>
          INVESTMENT FUND(80%)
        </div>
        <div class="long-list">
          <div class="list-item">
            <div class="index">
              1
            </div>
            <div class="content-box">
              <div class="title">
                RAINBOW DEFI（20%）
              </div>
              <div class="content">
                Rainbow DeFi, decentralized financial field, including but not limited to decentralized exchanges,
                decentralized stablecoins platforms, decentralized lending platforms, coins functioning as the anchor of
                Bitcoin, decentralized insurances and aggregators, to set a cross-chain DeFi system around the globe.
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="index">
              2
            </div>
            <div class="content-box">
              <div class="title">
                RAINBOW NETWORK (10%)
              </div>
              <div class="content">
                Rainbow network, containing Rainbow island, a content oriented social platform, Rainbow e-commerce, the
                e-commerce platform and Rainbow game, online game platform. Mixed with blockchain and its token
                incentives, we’ll create an Internet platform and an open date platform worldwide.
              </div>
            </div>

          </div>
          <div class="list-item">
            <div class="index">
              3
            </div>
            <div class="content-box">
              <div class="title">
                RAINBOW EDUCATION (10%)
              </div>
              <div class="content">
                Rainbow education. With “Rainbow College” as the representative, we will set up seven Rainbow colleges
                covering different areas for the education of blockchain in the world. The focus is on the construction of
                blockchain physical colleges and training institutions of blockchain for the comprehensive improvement in
                the understanding and cognition over blockchain of the globe but not just technologically.
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="index">
              4
            </div>
            <div class="content-box">
              <div class="title">
                RAINBOW INDUSTRY (30%)
              </div>
              <div class="content">
                Rainbow industry, to actually link material world and digital world together. At the beginning, investment
                will be put in Bitcoin mine field, to build its center of hashrate. For some qualified districts, power
                plants of varied types using green energies will be built for Bitcoin mining. Moreover, diverse industrial
                entities will get investment as well, such as global real estate, international tourism, international
                trade and international retail. In addition, large areas of land and inland in suitable places will be
                bought to establish physical Rainbow City, the shrine of blockchain fans.
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="index">
              5
            </div>
            <div class="content-box">
              <div class="title">
                RAINBOW CULTURE (10%)
              </div>
              <div class="content">
                Rainbow culture, including cultural industries such as art, philosophy, science, religion, academy sports
                and so on, to inspire blockchain participators all over the globe, construct superstructure of Bit
                civilization and render Bitcoin infrastructure of human civilization.
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="index">
              6
            </div>
            <div class="content-box">
              <div class="title">
                RAINBOW INVESTMENT (10%)
              </div>
              <div class="content">
                Rainbow investment, to invest in promising blockchain projects and get corresponding token in return for
                an ecology of wider range and Rainbow City of human beings.
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="index">
              7
            </div>
            <div class="content-box">
              <div class="title">
                Rainbow R & D (10%)
              </div>
              <div class="content">
                Rainbow R & D, to found cutting-edge R&D lab of blockchain and top research institution and academic
                institution around the globe. Besides, to cooperate with other institutions of higher learning and set up
                joint R&D lab for the study of the technology of blockchain, particularly for the public chain, bridge for
                chain crossing of Rainbow City and cryptography to lead the trend.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="footer-box" >
        <pageFooter v-show="scrollNumber>3000"></pageFooter>
      </div>

  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
export default {
  name: "foundation",
  components:{pageFooter},
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
.foundation {
  .foundation-list {
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    margin: 0 auto;

    .list-item {
      width: 450px;
      text-align: justify;
      .img-box{
        width: 100%;
        height: 100%;
        text-align: center;
      }
      .title {
        font-size: 26px;

        font-weight: bold;
        text-align: left;
        color: #db1f7e;
        line-height: 34px;
        padding-top: 30px;
      }

      .content {
        width: 400px;
        font-size: 12px;
        padding: 30px 0;

        font-weight: 400;
        text-align: justify;
        color: #ffffff;
        line-height: 24px;
      }

      img {
        margin: 80px 30px 0;
        width: 120px;
      }
    }
  }

  .foundation-content1 {

  }

  .foundation-content2 {
    .foundation-list {
      margin-top: 50px;
      .list-item{
        text-align: center;
      }
    }
  }
  .foundation-content3{
    padding-bottom: 60px;
    .content{
      line-height: 24px;
    }
  }
}
</style>
