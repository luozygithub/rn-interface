<template>
  <div class="dao-foundation">
    <swiper ref="daoFoundation"
            id="daoFoundation"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <foundationPage1 v-show="activeIndex==0" :is-up="isUp"></foundationPage1>
      </swiper-slide>
      <swiper-slide>
        <foundationPage2 v-if="activeIndex==1" :is-up="isUp"></foundationPage2>
      </swiper-slide>
      <swiper-slide>
        <foundationPage3 v-if="activeIndex==2" :is-up="isUp"></foundationPage3>
      </swiper-slide>
      <swiper-slide>
        <foundationPage4 v-if="activeIndex==3" :is-up="isUp"></foundationPage4>
      </swiper-slide>
      <swiper-slide>
        <foundationPage5 v-show="activeIndex==4" :is-up="isUp"></foundationPage5>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>


import foundationPage1 from "@/views/rainbowDao/daoFoundation/foundationPage1";
import foundationPage2 from "@/views/rainbowDao/daoFoundation/foundationPage2";
import foundationPage3 from "@/views/rainbowDao/daoFoundation/foundationPage3";
import foundationPage4 from "@/views/rainbowDao/daoFoundation/foundationPage3";
import foundationPage5 from "@/views/rainbowDao/daoFoundation/foundationPage5";

export default {
  name: "daoFoundation",
  components:{
    foundationPage1,
    foundationPage2,
    foundationPage3,
    foundationPage4,
    foundationPage5,
  },
  data(){
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
  methods:{
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

<style lang="scss" scoped>
.dao-foundation {
  width: 100%;
  height: 100%;
}
</style>
