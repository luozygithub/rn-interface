<template>
  <div class="dao-page2">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        01
      </div>
      <div class="page-header-title">
        FUNCTIONS OF <br> RAINBOW DAO
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        "Rainbow DAO" wants to establish a Bitcoin civilized digital city-state based on "Token Economy" and "Community
        Governance". We are a DAO based on the idea of blockchain. We want to establish a series of DeFi organizations,
        and we need to explore methods of “Social Governance”. We are going to explore new human civilization and new
        human relations of production.
      </p>
      <p>
        We want to establish a global coordination system regardless of country, language, region, religion, culture,
        race, ethnicity, or skin color. We will establish a value distribution system and value circulation system based
        on the global blockchain network, establish a global community governance system based on the "Rainbow Token",
        and establish a decentralized economy based on a new human civilization.
      </p>
      <div class="dao-intro-swap">
        <swiper
            :pagination="{ clickable: true }"
            :options="daoSwiperOptions">
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                01
              </div>
              <div class="title">
                Publicize RBT blockchain data
              </div>
              <div class="content">
                Rainbow DAO publicizes the overall issuance of RBT, including the number of issuances, releases,
                circulation, stakes, etc., so that the overall token data of RBT is open and transparent.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                02
              </div>
              <div class="title">
                Pool for RBT Exchange
              </div>
              <div class="content">
                Rainbow DAO has 4 mining pools for distributing Token RBT. There are RBT Pool for RBT-Seed exchange, RBT
                Pool for "Consensus Mining", RBT Pool for "Invitation Mining", RBT Pool for "Contribution Mining". The
                four mining pools are controlled by smart contracts on the blockchain to realize the openness and
                transparency of the exchange process
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                03
              </div>
              <div class="title">
                Manage RBT stake
              </div>
              <div class="content">
                It is mainly used to manage the RBT stake, and only by staking RBT can community users enjoy a certain
                dividend weight. RBT-Deposit is divided into current deposit and time deposit, which have different
                weights and rewards according to different deposits.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                04
              </div>
              <div class="title">
                Manage governance weight
              </div>
              <div class="content">
                Rainbow City’s voting system integrates all parts of the Rainbow City ecosystem to form a user’s voting
                weight. The weight is mainly composed of three parts: the amount of RBT owned by the user, including but
                not limited to the stake and the portion that provides liquidity, the user's own VIP level, and the type
                and number of community governance tokens owned by the user. This comprehensive weight is the "community
                voting rights" of community members.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                05
              </div>
              <div class="title">
                Announcement of Rainbow Ecosystem Revenue Sources and Distribution
              </div>
              <div class="content">
                This part includes two parts, announcement of income sources and announcement of income distribution.
                All income sources and distribution methods of Rainbow City are formulated on the blockchain, so that
                the income of the ecosystem is transparent.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                06
              </div>
              <div class="title">
                Rainbow Ecological Income Dividend
              </div>
              <div class="content">
                This part is used for the income dividend of the RBT ecosystem. Dividends mainly include two aspects;
                each dividend has its own specific dividend rules. Users can get dividends according to the length of
                their stake time, and get dividends according to the number and level of community governance tokens.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                07
              </div>
              <div class="title">
                Manage community governance
              </div>
              <div class="content">
                Community governance includes two parts. The first part is to apply for community governance tokens,
                including Rainbow Token Elf, Rainbow Token Envoy, Rainbow Token Partners, Rainbow Token Supnode. The
                second part is to apply for and manage global RBT citynodes.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                08
              </div>
              <div class="title">
                Manage VIP users
              </div>
              <div class="content">
                Rainbow City users can apply for Rainbow City VIP tokens, which are determined as different VIP levels
                according to the number. 1 is a bronze VIP, 3 is a silver VIP, 6 is a gold VIP, and 9 is a platinum VIP.
                The validity period of VIP token is 1 year, after the validity period, the corresponding VIP rights will
                be lost.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                09
              </div>
              <div class="title">
                Manage user votes
              </div>
              <div class="content">
                There are different levels of DAO in Rainbow City, and there will also be different voting governance
                activities. Rainbow City DAO will manage various voting governance activities to ensure that proposals
                and votes are transparent and cannot be tampered with.
              </div>
            </div>
          </swiper-slide>
          <div class="dao-pagination" slot="pagination"/>

        </swiper>
        <div class="mining-swiper-button-prev">
          <svg t="1628043004821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3244" width="48" height="48">
            <path
                d="M674.304 512l-35.328-35.328-335.872-335.36-35.328 35.328 335.36 335.36-335.36 335.36 35.328 35.328 335.36-335.36 35.84-35.328z"
                p-id="3245" fill="#dbdbdb"></path>
            <path
                d="M877.056 512l-35.328-35.328-335.36-335.36-35.328 35.328 335.36 335.36L471.04 847.36l35.328 35.328 335.36-335.36 35.328-35.328z"
                p-id="3246" fill="#dbdbdb"></path>
          </svg>
        </div>
        <div class="mining-swiper-button-next">
          <svg t="1628043004821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3244" width="48" height="48">
            <path
                d="M674.304 512l-35.328-35.328-335.872-335.36-35.328 35.328 335.36 335.36-335.36 335.36 35.328 35.328 335.36-335.36 35.84-35.328z"
                p-id="3245" fill="#dbdbdb"></path>
            <path
                d="M877.056 512l-35.328-35.328-335.36-335.36-35.328 35.328 335.36 335.36L471.04 847.36l35.328 35.328 335.36-335.36 35.328-35.328z"
                p-id="3246" fill="#dbdbdb"></path>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "daoPage2",
  props: ["isUp"],
  components: {},
  data() {
    return {
      controlledSwiper: 0,
      activeIndex: 0,
      daoSwiperOptions: {
        //显示分页
        pagination: {
          el: '.dao-pagination',
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: '.mining-swiper-button-next',
          prevEl: '.mining-swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 100
        },
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.dao-page2 {
  height: 100%;

  .page-content {
    overflow: auto;
  }

  .dao-pagination {
    width: 660px;
    text-align: center;
    position: absolute;
    z-index: 2;
    bottom: 0px;
  }

  ::v-deep.swiper-pagination-bullet {
    opacity: 0.6;
    display: inline-block;
    width: 16px !important;
    height: 16px !important;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid #2c3e50 !important;
    margin-top: 6px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    position: relative;
    margin-left: 10px;
  }

  ::v-deep.swiper-pagination-bullet:after {
    position: absolute;
    left: 4px;
    top: -6px;
  }

  ::v-deep.swiper-pagination-bullet:nth-child(1):after {
    content: "1";
  }

  ::v-deep.swiper-pagination-bullet:nth-child(2):after {
    content: "2";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(3):after {
    content: "3";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(4):after {
    content: "4";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(5):after {
    content: "5";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(6):after {
    content: "6";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(7):after {
    content: "7";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(8):after {
    content: "8";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(9):after {
    content: "9";
  }

  ::v-deep.swiper-pagination-bullet-active {
    border: 2px solid #502c40 !important;
    box-shadow: inset 0 5px 5px #c471ed;
    opacity: 1;
  }

  .page-content {
    .dao-intro-swap {
      width: 660px;
      height: 260px;
      margin: 0 auto;
      position: relative;

      .mining-swiper-button-prev, .mining-swiper-button-next {
        svg {
          width: 36px;
          height: 36px;
        }

        cursor: pointer;
        position: absolute;
        z-index: 1;
        top: 50%;
        color: white;
      }

      .mining-swiper-button-prev {
        transform: rotate(180deg);
        left: -100px;
      }

      .mining-swiper-button-next {
        right: -100px;
      }

      .swiper-button-disabled {
        display: none;
      }

      .swiper-page {
        .index {
          margin: 0 auto;
          text-align: center;
          opacity: 0.4;
          font-size: 60px;
          font-family: Impact, Impact-Regular;
          font-weight: 400;
          color: #db1f7e;
          line-height: 78px;
          letter-spacing: 10px;
        }

        .title {
          text-align: center;
          height: 30px;
          font-size: 18px;
          font-family: Roboto, Roboto-Medium;
          font-weight: 500;
          color: #db1f7e;
          line-height: 30px;
        }

        .content {

        }
      }
    }

  }
}
</style>
