<template>
  <div class="city-page4">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        SEVEN ECOSYSTEMS <br/>of RAINBOW CITY
      </div>
    </div>
    <div class="page-content">
      <div class="list-box" @wheel.stop>
        <swiper
            :options="swiperOptions"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
        >
          <swiper-slide>
            <div class="list-item">
              <div class="index">
                01
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow DeFi
                </div>
                <div class="content">
                  Rainbow DeFi, decentralized financial field, including but not limited to decentralized exchanges,
                  decentralized stablecoins platforms, decentralized lending platforms, coins functioning as the anchor
                  of
                  Bitcoin, decentralized insurances and aggregators, to set a cross-chain DeFi system around the globe.
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list-item" >
              <div class="index">
                02
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow network
                </div>
                <div class="content">
                  Rainbow network, containing Rainbow island, a content oriented social platform, Rainbow e-commerce,
                  the
                  e-commerce platform and Rainbow game, online game platform. Mixed with blockchain and its token
                  incentives, we’ll create an Internet platform and an open date platform worldwide.
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list-item" >
              <div class="index">
                03
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow education
                </div>
                <div class="content">
                  Rainbow education. With “Rainbow College” as the representative, we will set up seven Rainbow colleges
                  covering different areas for the education of blockchain in the world. The focus is on the
                  construction of
                  blockchain physical colleges and training institutions of blockchain for the comprehensive improvement
                  in
                  the understanding and cognition over blockchain of the globe but not just technologically.
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list-item" >
              <div class="index">
                04
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow industry
                </div>
                <div class="content">
                  Rainbow industry, to actually link material world and digital world together. At the beginning,
                  investment
                  will be put in Bitcoin mine field, to build its center of hashrate. For some qualified districts,
                  power
                  plants of varied types using green energies will be built for Bitcoin mining. Moreover, diverse
                  industrial
                  entities will get investment as well, such as global real estate, international tourism, international
                  trade and international retail. In addition, large areas of land and inland in suitable places will be
                  bought to establish physical Rainbow City, the shrine of blockchain fans.
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list-item" >
              <div class="index">
                05
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow culture
                </div>
                <div class="content">
                  Rainbow culture, including cultural industries such as art, philosophy, science, religion, academy
                  sports
                  and so on, to inspire blockchain participators all over the globe, construct superstructure of Bit
                  civilization and render Bitcoin infrastructure of human civilization.
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list-item">
              <div class="index">
                06
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow investment
                </div>
                <div class="content">
                  Rainbow investment, to invest in promising blockchain projects and get corresponding token in return
                  for
                  an ecology of wider range and Rainbow City of human beings.
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list-item" >
              <div class="index">
                07
              </div>
              <div class="right-content">
                <div class="title">
                  Rainbow R & D
                </div>
                <div class="content">
                  Rainbow R & D, to found cutting-edge R&D lab of blockchain and top research institution and academic
                  institution around the globe. Besides, to cooperate with other institutions of higher learning and set
                  up
                  joint R&D lab for the study of the technology of blockchain, particularly for the public chain, bridge
                  for
                  chain crossing of Rainbow City and cryptography to lead the trend.
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="city-page4-pagination" @wheel.stop>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';
// install Swiper modules
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
export default {
  name: "cityPage4",
  props: ["isUp"],
  data() {
    return {
      activeIndex: 0,
      swiperOptions: { // 设置你想要得排序效果，可以在swiper官网api文档查看更多
        type: Object,
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        direction: 'vertical', // vertical 设置成竖向排列
        mousewheel: true,
        pagination: {
          el: '.city-page4-pagination',
          clickable: true
        }
      },
    }
  },

}
</script>

<style lang="scss" scoped>
.city-page4 {
  .page-content {
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .city-page4-pagination {
      margin-top: 60px;
      height: 80px;
      position: absolute;
      right: 60px;
      top: 10%;
      ::v-deep .swiper-pagination-bullet  {
        color: white;
        cursor: pointer;
        position: relative;
        margin-top: 10px;
        display: block;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border: 1px solid rgba(255, 255, 255, 0.50);
        border-radius: 50%;
        &.swiper-pagination-bullet-active{
          border: 2px solid #502c40 !important;
          box-shadow: inset 0 0px 10px #c471ed;
          background: linear-gradient(90deg, rgba(18,194,233,0.5), rgba(196,113,237,0.5) 55%,rgba(246,79,89,0.5));;
          opacity: 1;
        }
      }

    }

    ::v-deep.swiper-pagination-bullet:after{
      color: white;
      opacity: 1;
      position: absolute;
      z-index: 1;
      left: 6px;
      top: 0px;
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
    ::v-deep.swiper-pagination-bullet:nth-child(4):after{
      content: "4";
    }
    ::v-deep.swiper-pagination-bullet:nth-child(5):after{
      content: "5";
    }
    .list-box {
      height: 500px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 0;
      }

      .list-item {
        height: 100%;
        margin-top: 4px;
        display: flex;
        overflow: hidden;

        .index{
          opacity: 0.4;
          font-size: 80px;
          font-family: Impact, Impact-Regular;
          font-weight: 400;
          color: #db1f7e;
          line-height: 160px;
          letter-spacing: 16px;
        }



        .right-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 140px;
          width: 560px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);

          .title {
            font-size: 18px;
            color: #db1f7e;
            text-align: center;
          }

          .content {
            font-size: 12px;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>
