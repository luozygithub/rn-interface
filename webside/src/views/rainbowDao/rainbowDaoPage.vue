<template>
  <div class="rainbow-dao" @mousemove="titleOnMove">
    <div class="z-box">
      <div class="city-mask"/>
      <div class="z-box">

        <rainbow-nav></rainbow-nav>
        <div class="dao-title animate__animated animate__zoomIn">
          <img class="title-img" src="../../assets/imgs/RAINBOWDAO.png" alt="">
        </div>
        <div class="dao-nav">
          <div class="nav-box">
            <div class="nav-item" @click="setActive(0)" :class="{'active':activeIndex==0}">
              Introduction
            </div>
            <div class="nav-item" @click="setActive(1)" :class="{'active':activeIndex==1}">
              Foundation
            </div>
            <div class="nav-item" @click="setActive(2)" :class="{'active':activeIndex==2}">
              Ministry of Finance
            </div>
            <div class="nav-item" @click="setActive(3)" :class="{'active':activeIndex==3}">
              Community
            </div>
          </div>
        </div>
        <div class="dao-detail-content">
          <dao-detail class="part0 animate__animated" v-show="activeIndex==0||preActive==0" :class="{animate__fadeInLeft:preActive ==activeIndex,animate__fadeInRight:preActive > activeIndex,isAbsolute:preActive==0}"  />
          <foundation  class="part1 animate__animated" :style="'position:' + preActive==1?'absolute':'static'" v-show="activeIndex==1||preActive==1" :class="{animate__fadeInLeft:preActive <activeIndex,animate__fadeInRight:preActive > activeIndex,isAbsolute:preActive==1}"  />
          <finance :is-left="preActive < activeIndex" :active="activeIndex==2" class="part2 animate__animated" :style="'position:' + preActive==2?'absolute':'static'" v-show="activeIndex==2|| preActive==2" :class="{animate__fadeInLeft:preActive < activeIndex,animate__fadeInRight:preActive>activeIndex,isAbsolute:preActive==2}" />
          <community class="part3 animate__animated" :style="'position:' + preActive==3?'absolute':'static'" v-show="activeIndex==3||preActive==3" :class="{animate__fadeInLeft:preActive < activeIndex,animate__fadeInRight:preActive>activeIndex,isAbsolute:preActive==3}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import daoDetail from "@/views/rainbowDao/introduction";
import foundation from "@/views/rainbowDao/foundation";
import finance from "@/views/rainbowDao/finance";
import community from "@/views/rainbowDao/community";
import $ from "jquery"

export default {
  name: "rainbowDao",
  props: ["isUp"],
  components: {
    community,
    finance,
    daoDetail,
    foundation,
  },
  data() {
    return {
      activeIndex: 0,
      preActive: null
    }
  },
  methods: {
    setActive(index) {
      if(this.activeIndex==index){
        return
      }
      this.preActive = this.activeIndex
      if (index < this.activeIndex) {
        $(".part" + index).css("animation", "inLeft 0.5s linear;")
      }
      this.activeIndex = index
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
  },

}
</script>

<style lang="scss" scoped>
@keyframes inLeft {
  0% {
    transform: translate3d(-100vw, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
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
.rainbow-dao {

  overflow: auto;
  background: url("../../static/imgs/rainbowDao_bg.png") no-repeat !important;
  background-size: 100% auto !important;

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

  .rainbow-dao-bg {
    background-image: url("../../static/imgs/rainbowDaoContent_bg.png") !important;
    background-size: contain;
  }


  ::v-deep .part-title-l {
    text-align: center;
    font-size: 30px;
  }

  ::v-deep .long-list {
    width: 900px;
    margin: 0 auto;

    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;

      .index {
        text-align: center;
        width: 46px;
        height: 46px;
        border: 1px solid #db1f7e;

        font-weight: bold;
        background-image: linear-gradient(135deg, deeppink, dodgerblue);
        -webkit-background-clip: text;
        border-radius: 50%;
        font-size: 30px;
        line-height: 46px;
        text-shadow: 0px 0px 20px #9e12e9;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        animation: glow 20s ease-in-out infinite;
      }

      .content-box {
        width: 800px;

        .title {
          font-size: 20px;
          font-weight: bold;
          color: #db1f7e;
          line-height: 30px;
        }
      }
    }
  }

  .dao-title {
    height: 160px;
    text-align: center;

    .title-img {
      margin-top: 30px;
      width: 420px;
    }
  }

  .dao-nav {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #333;

    .nav-box {
      height: 100%;
      width: 660px;
      margin: 0 auto;
      display: flex;
    }

    .nav-item {
      cursor: pointer;
      width: 200px;
      text-align: center;
      padding: 30px 0px 20px;
      font-size: 14px;
      line-height: 16px;
      color: #C8C8C8;
      font-weight: bold;

      &.active {
        color: #db1f7e;
        font-weight: bold;
        border-bottom: 1px solid #db1f7e;;
      }
    }

  }

  .dao-detail-content {
    width: 100%;
    height: 100%;
    position: relative;
    .isAbsolute{
      position: absolute!important;
    }
    .part1 ,.part0,.part2,.part3{
      position: static;
      left:-100%;
      top: 0;
    }

    ::v-deep .page-content {
      margin-top: 30px;

      .title {
        font-weight: bold;
      }
    }
  }
}
</style>
