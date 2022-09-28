<template>
  <div class="dao-page3">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        RAINBOW DAO ECOLOGICAL INCOME <br> SOURCE DESCRIPTION
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      We will distribute the income of the economy to different participants in the ecology through the design of the
      token economic model. The most basic of the economic model must be to have a stable and ever-increasing source of
      income, to inject a steady stream of vitality into the economy, and to make the ecology continue to grow. We are
      now formulating the income source and management principles of Rainbow DAO, as the most basic community consensus
      of the ecology, supporting the ecology to grow without breaking.
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
                Rainbow Token — data publicity on the RBT chain
              </div>
              <div class="content">
                It is mainly used to publicize the overall issuance of RBT, how many have been issued, how many have
                been released, how many have been in circulation, etc., so that the overall RBT data is truly open and
                transparent.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                02
              </div>
              <div class="title">
                Rainbow Token — data publicity on the RBT chain
              </div>
              <div class="content">
                It is mainly used to publicize the overall issuance of RBT, how many have been issued, how many have
                been released, how many have been in circulation, etc., so that the overall RBT data is truly open and
                transparent.
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-page">
              <div class="index">
                03
              </div>
              <div class="title">
                Rainbow Token — data publicity on the RBT chain
              </div>
              <div class="content">
                It is mainly used to publicize the overall issuance of RBT, how many have been issued, how many have
                been released, how many have been in circulation, etc., so that the overall RBT data is truly open and
                transparent.
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
  name: "daoPage3",
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
.dao-page3 {
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

  ::v-deep.swiper-pagination-bullet-active {
    border: 2px solid #502c40 !important;
    box-shadow: inset 0 5px 5px #c471ed;
    opacity: 1;
  }

  .page-content {
    .dao-intro-swap {
      width: 660px;
      height: 230px;
      margin: 0 auto;
      position: relative;

      .mining-swiper-button-prev, .mining-swiper-button-next {
        svg{
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
      .swiper-button-disabled{
        display: none;
      }
      .swiper-page {
        .index {
          margin: 0 auto;
          text-align: center;
          opacity: 0.4;
          font-size: 70px;
          font-family: Impact, Impact-Regular;
          font-weight: 400;
          color: #db1f7e;
          line-height: 88px;
          letter-spacing: 10px;
        }

        .title {
          text-align: center;
          height: 30px;
          font-size: 20px;
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
