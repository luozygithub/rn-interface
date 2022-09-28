<template>
  <div class="mining-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        CONSENSUS MINING
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <swiper
          navigation
          :pagination="{ clickable: true }"
          :options="swiperOptions">
        <swiper-slide>
          <div class="swiper-page page1">
            <div class="left-part">
              <div class="title">
                RBT
              </div>
              <div class="intro">
                RBT is the basic account unit on Rainbow Token. RBT connects the entire Rainbow City ecosystem with a
                wealth of application scenarios, which can power the entire ecosystem and application scenarios. As an
                important part of obtaining RBT, consensus mining is the fastest and most powerful part of obtaining the
                Rainbow City ecology.
              </div>
            </div>
            <div class="swiper-img-box">
              <div class="index">
                1
              </div>
              <img class="swiper-img" src="../../assets/imgs/rainbowR.png" alt="">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-page page2">
            <div class="swiper-img-box">
              <div class="index">
                2
              </div>
              <img class="swiper-img" src="../../assets/imgs/rectangleR.png" alt="">
            </div>
            <div class="left-part">
              <div class="title">
                ISSUANCE RULES
              </div>
              <div class="intro">
                According to the consensus of the community, global token exchange and "consensus mining" are divided
                into 2000 rounds, each round of 500,000 RBTs, the total is 1.4 billion, the initial consensus price of
                RBT is 0.4u, and then the new round is better than the old one. The mining price increased by 0.01u
                until the end of the 2800 round. The highest consensus price was 28.39u, which was about 71 times the
                initial consensus price. The overall fundraising was about 20.153 billion U.S. dollars. The entire
                consensus mining process is expected to last 1 to 3 years.
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-page page1">
            <div class="left-part">
              <div class="title">
                LOCK-UP AND RELEASE RULES
              </div>
              <div class="intro">
                After consensus mining, 20% is released as usable quantity, and the remaining 80% of RBT will be
                released annually after 24 hours, and the release will be completed 365 days a year. Unreleased quota
                can be converted into fixed-term locked tokens, and users can exchange for consensus mining tokens. It
                can be freely circulated directly after release on a daily basis.
              </div>
            </div>
            <div class="swiper-img-box">
              <div class="index">
                3
              </div>
              <img class="swiper-img" src="../../assets/imgs/rectangleTime.png" alt="">
            </div>
          </div>
        </swiper-slide>

      </swiper>
      <div class="mining-swiper-button-prev"></div>
      <div class="mining-swiper-button-next"></div>
      <div class="mining-pagination" slot="pagination"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "miningPage1",
  props: ["isUp"],
  components: {
  },
  data() {
    return {
      controlledSwiper: 0,
      activeIndex: 0,
      swiperOptions: {
        //显示分页
        pagination: {
          el: '.mining-pagination',
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
.mining-page1 {
  position: relative;
  .mining-pagination{
    width: 900px;
    text-align: center;
    position: absolute;
    margin-top: -200px;
    z-index: 1;
  }
  ::v-deep.swiper-pagination-bullet {
    display: inline-block;
    opacity: 0.6;
    width: 16px!important;
    height: 16px!important;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid #2c3e50 !important;
    margin-top: 6px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    position: relative;
    margin-left: 10px;
  }

  ::v-deep.swiper-pagination-bullet:after{
    position: absolute;
    left: 4px;
    top: -6px;
  }
  ::v-deep.swiper-pagination-bullet:nth-child(1):after{
    content: "1";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(2):after{
    content: "2";
  }
  ::v-deep.swiper-pagination-bullet:nth-child(3):after{
    content: "3";
  }
  ::v-deep.swiper-pagination-bullet-active{
    border: 2px solid #502c40 !important;
    box-shadow: inset 0 5px 5px #c471ed;

    opacity: 1;
  }
  .page-content {
    margin-top: 80px!important;

    .swiper-page {
      display: flex;
      justify-content: space-between;

      .left-part {
        padding-top: 20px;

        .title {
          color: #DB1F7E;
          font-size: 16px;
          font-weight: bold;
        }

        .intro {
          width: 360px;
          line-height: 20px;
          height: 120px;
        }
      }

      .swiper-img-box {
        margin: 20px 0px 0 60px;
        position: relative;

        .index {
          position: absolute;

          font-size: 30px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          background: #db1f7e;
        }

        .swiper-img {
          width: 360px;
        }
      }

    }

    .page1 {
      .swiper-img-box {
        .index {
          left: -30px;
          top: 90px;
        }

        margin: 20px 0px 0 60px;
      }
    }

    .page2 {
      .swiper-img-box {
        .index {
          right: -30px;
          top: 90px;
        }
        margin: 20px 60px 0 0px;
      }
    }
  }
}
</style>
