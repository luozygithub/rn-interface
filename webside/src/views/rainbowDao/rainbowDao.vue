<template>
<div class="rainbow-dao"  @mousemove="titleOnMove">
  <div class="rainbow-nav">
    <div class="nav-box">
      <div class="nav-item" @click="activeIndex=0" :class="{'active':activeIndex==0}">
        Introduction
      </div>
      <div class="nav-item" @click="activeIndex=1" :class="{'active':activeIndex==1}">
        Foundation
      </div>
      <div class="nav-item"  @click="activeIndex=2" :class="{'active':activeIndex==2}">
        Ministry of Finance
      </div>
      <div class="nav-item"  @click="activeIndex=3" :class="{'active':activeIndex==3}">
        Community
      </div>
    </div>
  </div>
  <div class="dao-detail-content">
    <dao-detail v-show="activeIndex==0"/>
    <dao-foundation v-show="activeIndex==1"/>
    <dao-finance v-show="activeIndex==2"/>
    <dao-community v-show="activeIndex==3"/>
  </div>
</div>
</template>

<script>
import daoDetail from "@/views/rainbowDao/daoDetail/daoDetail";
import daoFoundation from "@/views/rainbowDao/daoFoundation/daoFoundation";
import DaoFinance from "@/views/rainbowDao/daoFinance/daoFinance";
import DaoCommunity from "@/views/rainbowDao/daoCommunity/daoCommunity";
import $ from "jquery";
export default {
  name: "rainbowDao",
  props:["isUp"],
  components: {
    DaoCommunity,
    DaoFinance,
    daoDetail,
    daoFoundation,
  },
  data() {
    return{
      activeIndex:0
    }
  },
  methods: {
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
.rainbow-dao{
  width: 100%;
  height: 100%;
  overflow: auto;
  position:relative;
  ::v-deep .page-header{
    border-bottom: none!important;
  }
  ::v-deep .rainbow-nav {
    width: 100%;
    height: 60px;
    position: absolute;
    z-index: 2;
    top: 80px;
    border-bottom: 1px solid #333;
    .nav-box{
      height: 100%;
      width: 900px;
      margin: 0 auto;
      display: flex;
    }
    .nav-item {
      cursor: pointer;
      padding: 30px 40px 20px;
      font-size: 14px;
      line-height: 16px;
      color: #C8C8C8;
      &.active{
        color: #db1f7e;
        border-bottom: 1px solid #db1f7e;;
      }
    }

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
  .dao-detail-content{
    width: 100%;
    height: 100%;

    ::v-deep .page-content{
      margin-top: 30px;
      .title{
        font-weight: bold;
      }
    }
  }
}
</style>
