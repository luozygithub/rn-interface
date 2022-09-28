<template>
<div class="rainbow-token">
  <swiper ref="TOKEN"
          id="TOKEN"
          mousewheel="true"
          :pagination="{ clickable: true }"
          @slideChange="onSlideChange"
          :options="swiperOptions">
    <swiper-slide>
      <tokenPage1 v-show="activeIndex==0" :is-up="isUp"></tokenPage1>
    </swiper-slide>
    <swiper-slide>
      <tokenPage2 v-show="activeIndex==1" :is-up="isUp"></tokenPage2>
    </swiper-slide>
    <swiper-slide>
      <tokenPage3 v-show="activeIndex==2" :is-up="isUp"></tokenPage3>
    </swiper-slide>
    <swiper-slide>
      <tokenPage4 v-show="activeIndex==3" :is-up="isUp"></tokenPage4>
    </swiper-slide>
    <swiper-slide>
      <tokenPage5 v-show="activeIndex==4" :is-up="isUp"></tokenPage5>
    </swiper-slide>
    <swiper-slide>
      <tokenPage6 v-show="activeIndex==5" :is-up="isUp"></tokenPage6>
    </swiper-slide>
    <swiper-slide>
      <tokenPage7 v-show="activeIndex==6" :is-up="isUp"></tokenPage7>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>

import tokenPage1 from "@/views/rainbowToken/tokenPage1";
import tokenPage2 from "@/views/rainbowToken/tokenPage2";
import tokenPage3 from "@/views/rainbowToken/tokenPage3";
import tokenPage4 from "@/views/rainbowToken/tokenPage4";
import tokenPage5 from "@/views/rainbowToken/tokenPage5";
import tokenPage6 from "@/views/rainbowToken/tokenPage6";
import tokenPage7 from "@/views/rainbowToken/tokenPage7";

export default {
  name: "RainbowToken",
  components: {
    tokenPage1,
    tokenPage2,
    tokenPage3,
    tokenPage4,
    tokenPage5,
    tokenPage6,
    tokenPage7,
  },
  data() {
    return {
      controlledSwiper: 0,
      isUp: true,
      activeIndex: 0,
      swiperOptions: {
        direction: 'vertical', // vertical 设置成竖向排列
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    onSlideChange(info) {
      if (this.activeIndex < info.activeIndex) {
        this.isUp = true
      } else {
        this.isUp = false
      }
      this.activeIndex = info.activeIndex
    },
  },
}
</script>

<style scoped>
.rainbow-token{
  height: 100%;
  width: 100%;

}
</style>
