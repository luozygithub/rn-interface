<template>
  <div class="consensus-mining">
    <swiper
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <miningPage1 v-show="activeIndex==0" :is-up="isUp"></miningPage1>
      </swiper-slide>
      <swiper-slide>
        <miningPage2 v-show="activeIndex==1" :is-up="isUp"></miningPage2>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination">
      </div>
    </swiper>

  </div>
</template>

<script>

import miningPage1 from "@/views/consensusMining/miningPage1";
import miningPage2 from "@/views/consensusMining/miningPage2";

export default {
  name: "consensusMining",
  props: ["isUp"],
  components: {
    miningPage1,
    miningPage2,
  },
  data() {
    return {
      controlledSwiper: 0,
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
.consensus-mining {
  height: 100%;
  width: 100%;
}
</style>
