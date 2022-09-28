<template>
  <div class="finance-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        01
      </div>
      <div class="page-header-title">
        RAINBOW CITY FINANCE DEPARTMENT<br> REVENUE MANGEMENT INSTRUCTIONS
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

                <img class="img" src="../../../assets/imgs/Oracle.png" alt="strategyManage">
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
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <img class="img" src="../../../assets/imgs/organization.png" alt="strategyManage">
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
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <img class="img" src="../../../assets/imgs/database.png" alt="strategyManage">
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
            </swiper-slide>
            <div class="dao-pagination" slot="pagination"/>
          </swiper>


        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "financePage1",
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
.finance-page1 {
  height: 100%;

  .page-content {
    overflow: auto;
  }

  .dao-pagination {
    width: 900px;
    text-align: center;
    position: absolute;
    z-index: 2;
    bottom: 0;
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
      height: 470px;
      padding-bottom: 50px;
      margin: 0 auto;
      position: relative;

      .swiper-button-disabled {
        display: none;
      }

      .swiper-page {
        text-align: center;

        .img {
          width: 150px;
        }

        .title {
          font-size: 24px;
          font-family: Roboto, Roboto-Bold;
          font-weight: 700;
          color: #db1f7e;
          padding: 10px 0 20px;
        }
      }
    }

  }
}
</style>
