<template>
  <div class="rainbow-defi">
    <swiper ref="DEFI"
            id="DEFI"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <defiPage1 v-show="activeIndex==0" :is-up="isUp"></defiPage1>
      </swiper-slide>
      <swiper-slide>
        <defiPage2 v-show="activeIndex==1" :is-up="isUp"></defiPage2>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>


  </div>
</template>

<script>

import defiPage1 from "@/views/rainbowDEFI/defiPage1";
import defiPage2 from "@/views/rainbowDEFI/defiPage2";

export default {
  name: "RainbowDEFI",
  props: ["isUp"],
  components: {
    defiPage1,
    defiPage2,
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

<style lang="scss" scoped>
.rainbow-defi {
  height: 100%;
  width: 100%;
  ::v-deep .page-header {
    padding-top: 30px;

  }
}
</style>
