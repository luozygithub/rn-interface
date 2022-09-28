<template>
  <div class="foundation-page4">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        RAINBOW CITY ECOLOGICAL <br> INVESTMENT FUND（80%）
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="dao-intro-swap">
        <div class="dao-intro-swap">
          <swiper
              :pagination="{ clickable: true }"
              :options="daoSwiperOptions">
            <swiper-slide>
              <div class="swiper-page">
                <div class="left-part">
                  <div class="title">
                    Fund allocation
                  </div>
                  <div class="intro">
                    All assets other than RBT will be converted into ETH and WBTC. The ratio of ETH and WBTC is 50% to
                    50%. This
                    ratio can be adjusted. In the initial stage, the relative number of cross-chain WBTC is relatively
                    small,
                    but as BTC crosses The number of Ethereum chains has increased significantly, gradually increasing
                    the
                    reserves of BTC, followed by the RBTC issued by Rainbow City itself to form the capital reserves of
                    BTC.
                    Then ETH and WBTC are allocated to four different decentralized exchange liquidity pools in
                    proportion, and
                    the RBT in the pool is only transferred to the RBT-RUSD fund pool, not to the other three pools.
                    This
                    operation can be performed every four hours. Anyone can call the smart contract to implement the
                    operation,
                    and the caller of the smart contract can get a certain RBD reward.
                  </div>
                </div>
                <img class="right-img" src="../../../assets/imgs/strategyManage.png" alt="strategyManage">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="left-part">
                  <div class="title">
                    Generate stablecoin
                  </div>
                  <div class="intro">
                    Store the ETH and WBTC in the four different pools into the lending agreement to generate the stable
                    currency RUSD, the generation ratio is between 40% and 70%, calculated according to the average 50%,
                    and then the generated stable coins are injected into the four The liquidity pool of one currency
                    provides liquidity for the four currencies. The initial funds provided are all RUSD, and the funds
                    of the other half of the currency are purchased from the corresponding pool with RUSD, and then
                    injected according to the ratio of 50% to 50% Liquidity, with the continuous increase of injected
                    funds, the liquidity continues to increase, and the depth of the fund pool also continues to
                    increase. This operation can be performed every four hours. Anyone can call the smart contract to
                    implement the operation, and the caller of the smart contract can get a certain RBD reward.
                  </div>
                </div>
                <img class="right-img" src="../../../assets/imgs/nodeManage.png" alt="nodeManage">

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
  </div>
</template>

<script>
export default {
  name: "foundationPage4",
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
}
</script>

<style lang="scss" scoped>
.foundation-page4 {
  height: 100%;

  .page-content {
    overflow: auto;
  }

  .dao-pagination {
    width: 900px;
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

  ::v-deep.swiper-pagination-bullet-active {
    border: 2px solid #502c40 !important;
    box-shadow: inset 0 5px 5px #c471ed;
    opacity: 1;
  }

  .page-content {
    .dao-intro-swap {
      width: 900px;
      height: 400px;
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
        display: flex;
        justify-content: space-between;

        .left-part {
          width: 480px;

          .title {
            font-size: 24px;
            font-family: Roboto, Roboto-Bold;
            font-weight: 700;
            text-align: justify;
            color: #db1f7e;
            line-height: 28px;
          }

          .intro {
            line-height: 24px;
          }
        }

        .right-img {
          margin-right: 100px;
          margin-top: 50px;
          width: 150px;
        }
      }
    }

  }
}
</style>
