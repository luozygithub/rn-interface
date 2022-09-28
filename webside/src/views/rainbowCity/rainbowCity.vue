<template>
  <div class="rainbow-city">
    <swiper ref="RainbowCity"
            id="RainbowCity"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <cityPage1 v-show="activeIndex==0" :is-up="isUp"></cityPage1>
      </swiper-slide>
      <swiper-slide>
        <cityPage2 v-show="activeIndex==1" :is-up="isUp"></cityPage2>
      </swiper-slide>
      <swiper-slide>
        <cityPage3 v-show="activeIndex==2" :is-up="isUp"></cityPage3>
      </swiper-slide>
      <swiper-slide>
        <cityPage4 v-if="activeIndex==3" :is-up="isUp"></cityPage4>
      </swiper-slide>
      <swiper-slide>
        <cityPage5 v-show="activeIndex==4" :is-up="isUp"></cityPage5>
      </swiper-slide>
      <swiper-slide>
        <cityPage6 v-show="activeIndex==5" :is-up="isUp"></cityPage6>
      </swiper-slide>
      <swiper-slide>
        <cityPage7 v-show="activeIndex==6" :is-up="isUp"></cityPage7>
      </swiper-slide>
      <swiper-slide>
        <cityPage8 v-show="activeIndex==7" :is-up="isUp"></cityPage8>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
import cityPage1 from "@/views/rainbowCity/cityPage1";
import cityPage2 from "@/views/rainbowCity/cityPage2";
import cityPage3 from "@/views/rainbowCity/cityPage3";
import cityPage4 from "@/views/rainbowCity/cityPage4";
import cityPage5 from "@/views/rainbowCity/cityPage5";
import cityPage6 from "@/views/rainbowCity/cityPage6";
import cityPage7 from "@/views/rainbowCity/cityPage7";
import cityPage8 from "@/views/rainbowCity/cityPage8";

export default {

  name: "rainbowCity",
  components: {
    cityPage1,
    cityPage2,
    cityPage3,
    cityPage4,
    cityPage5,
    cityPage6,
    cityPage7,
    cityPage8,
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
  },
}
</script>

<style lang="scss" scoped>
.rainbow-city {
  height: 100%;
  width: 100%;
  #RainbowCity {
    height: 100%;
  }
}
</style>
