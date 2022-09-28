<template>
  <div class="community-page10">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        RVIP,REPRESENTATIVE OF THE VIP RIGHTS OF COMMUNITY MEMBERS
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
                <div class="index">
                  01
                </div>
                <div class="title">
                  Rainbow DAO ecosystem product promotion equities
                </div>
                <div class="content">
                  Only by becoming a global VIP user of RBT can participate in the benefits of promoting Rainbow DAO.
                  Rainbow DAO ecosystem has set transparent rules, anyone can join or exit at any time. Only by becoming
                  a VIP resident can you become part of the Rainbow DAO ecosystem.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">02</div>
                <div class="title">
                  Special fund rewards for VIP Users
                </div>
                <div class="content">
                  The VIP system is the foundation of the ecosystem. The ecosystem will set up a number of special funds
                  to provide various outstanding rewards to residents, especially teams or individuals who have made
                  significant contributions to the development of the ecosystem. The fund focuses on rewarding
                  outstanding teams. This reward is mainly divided into cycles for ranking rewards, and special rewards
                  on weekly, monthly, quarterly, annual and other cycles.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">03</div>
                <div class="title">
                  Priority to subscribe for high-quality asset
                </div>
                <div class="content">
                  Rainbow DAO strives to build a bit civilization. A large number of sub-projects and sub-tokens will be
                  derived in the ecosystem. VIP residents will have priority to obtain the right to subscribe for these
                  high-quality assets and enjoy their equities to the maximum.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">04</div>
                <div class="title">
                  Prioritize investment in high-quality projects
                </div>
                <div class="content">
                  Rainbow DAO will build a global ecosystem and will also invest in a series of blockchain projects. The
                  projects created or initiated by VIP residents will be given priority to get investment from the
                  foundation and grow the ecosystem together.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">05</div>
                <div class="title">
                  Private high-end circles
                </div>
                <div class="content">
                  Rainbow DAO ecosystem will establish private high-end circle services for VIPs, and build a platform
                  for users to share resources and knowledge. Different users can communicate with each other and learn
                  together. This will be the greatest value that every VIP user can gain, and high-end connections will
                  last a lifetime.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">06</div>
                <div class="title">
                  Offline salon
                </div>
                <div class="content">
                  Rainbow DAO ecosystem will hold various types of offline salons for VIP residents. Rainbow City users
                  can go from online to offline, further expanding their connections and knowledge.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">07</div>
                <div class="title">
                  Airdrops for high-quality projects
                </div>
                <div class="content">
                  Rainbow DAO ecosystem is aimed at VIP users and will unite various project parties in the ecosystem to
                  conduct various high-quality airdrops so that users can obtain the most practical benefits and grow
                  together with the ecosystem.
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-page">
                <div class="index">08</div>
                <div class="title">
                  Others Welfare
                </div>
                <div class="content">
                  Rainbow DAO strives to build a bit civilization. We will build a complete set of ecosystem rights and
                  interests, on this basis, will derive countless kinds of benefits. We will empower these equities to
                  our ecosystem users, enhance the value of users, and form a cycle.
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
  name: "communityPage10",
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
.community-page10 {
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
    display: inline-block;
    opacity: 0.6;
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
  ::v-deep.swiper-pagination-bullet-active {
    border: 2px solid #502c40 !important;
    box-shadow: inset 0 5px 5px #c471ed;
    opacity: 1;
  }

  .page-content {
    .dao-intro-swap {
      width: 900px;
      height: 300px;
      padding-bottom: 50px;
      margin: 0 auto;
      position: relative;

      .swiper-button-disabled {
        display: none;
      }

      .swiper-page {

        .index {
          opacity: 0.4;
          font-size: 80px;
          font-family: Impact, Impact-Regular;
          font-weight: 400;
          color: #db1f7e;
          line-height: 98px;
          letter-spacing: 16px;
        }

        .title {
          font-size: 20px;
          font-family: Roboto, Roboto-Bold;
          font-weight: 700;
          color: #db1f7e;
        }
      }
    }

  }
}
</style>
