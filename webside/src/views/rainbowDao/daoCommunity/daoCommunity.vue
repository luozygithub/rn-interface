<template>
  <div class="dao-community">
    <swiper ref="RainbowCity"
            id="RainbowCity"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <communityPage1 v-show="activeIndex==0" :is-up="isUp"></communityPage1>
      </swiper-slide>
      <swiper-slide>
        <communityPage2 v-if="activeIndex==1" :is-up="isUp"></communityPage2>
      </swiper-slide>
      <swiper-slide>
        <communityPage3 v-show="activeIndex==2" :is-up="isUp"></communityPage3>
      </swiper-slide>
      <swiper-slide>
        <communityPage4 v-show="activeIndex==3" :is-up="isUp"></communityPage4>
      </swiper-slide>
      <swiper-slide>
        <communityPage5 v-show="activeIndex==4" :is-up="isUp"></communityPage5>
      </swiper-slide>
      <swiper-slide>
        <community-page6 v-show="activeIndex==5" :is-up="isUp"></community-page6>
      </swiper-slide>
      <swiper-slide>
        <community-page7 v-show="activeIndex==6" :is-up="isUp"></community-page7>
      </swiper-slide>
      <swiper-slide>
        <community-page8 v-show="activeIndex==7" :is-up="isUp"></community-page8>
      </swiper-slide>
      <swiper-slide>
        <community-page9 v-show="activeIndex==8" :is-up="isUp"></community-page9>
      </swiper-slide>
      <swiper-slide>
        <community-page10 v-if="activeIndex==9" :is-up="isUp"></community-page10>
      </swiper-slide>
      <swiper-slide>
        <community-page11 v-show="activeIndex==10" :is-up="isUp"></community-page11>
      </swiper-slide>
      <swiper-slide>
        <community-page12 v-show="activeIndex==11" :is-up="isUp"></community-page12>
      </swiper-slide>
      <swiper-slide>
        <community-page13 v-show="activeIndex==12" :is-up="isUp"></community-page13>
      </swiper-slide>
      <swiper-slide>
        <community-page14 v-if="activeIndex==13" :is-up="isUp"></community-page14>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
import communityPage1 from "@/views/rainbowDao/daoCommunity/communityPage1";
import communityPage2 from "@/views/rainbowDao/daoCommunity/communityPage2";
import communityPage3 from "@/views/rainbowDao/daoCommunity/communityPage3";
import communityPage4 from "@/views/rainbowDao/daoCommunity/communityPage4";
import communityPage5 from "@/views/rainbowDao/daoCommunity/communityPage5";
import communityPage6 from "@/views/rainbowDao/daoCommunity/communityPage6";
import communityPage7 from "@/views/rainbowDao/daoCommunity/communityPage7";
import communityPage8 from "@/views/rainbowDao/daoCommunity/communityPage8";
import communityPage9 from "@/views/rainbowDao/daoCommunity/communityPage9";
import communityPage10 from "@/views/rainbowDao/daoCommunity/communityPage10";
import communityPage11 from "@/views/rainbowDao/daoCommunity/communityPage11";
import communityPage12 from "@/views/rainbowDao/daoCommunity/communityPage12";
import communityPage13 from "@/views/rainbowDao/daoCommunity/communityPage13";
import communityPage14 from "@/views/rainbowDao/daoCommunity/communityPage14";
export default {
  name: "daoCommunity",
  components: {
    communityPage1,
    communityPage2,
    communityPage3,
    communityPage4,
    communityPage5,
    communityPage6,
    communityPage7,
    communityPage8,
    communityPage9,
    communityPage10,
    communityPage11,
    communityPage12,
    communityPage13,
    communityPage14,
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
      },
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
  }
}
</script>

<style scoped>
.dao-community{
  height: 100%;
}
</style>
