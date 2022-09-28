<template>
<div class="rainbow-warrior">
  <swiper ref="daoFoundation"
          id="daoFoundation"
          mousewheel="true"
          :pagination="{ clickable: true }"
          @slideChange="onSlideChange"
          :options="swiperOptions">
    <swiper-slide>
      <warriorPage1 v-show="activeIndex==0" :is-up="isUp"></warriorPage1>
    </swiper-slide>
    <swiper-slide>
      <warriorPage2 v-show="activeIndex==1" :is-up="isUp"></warriorPage2>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import warriorPage1 from "@/views/rainbowWarrior/warriorPage1";
import warriorPage2 from "@/views/rainbowWarrior/warriorPage2";


export default {
  name: "rainbowWarrior",
  components: {
    warriorPage1,
    warriorPage2,

  },
  data() {
    return {
      controlledSwiper: 0,
      isUp: true,
      activeIndex: 0,
      swiperOptions: {
        direction: 'vertical',
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

<style lang="scss" scoped>
.rainbow-warrior{
  width: 100%;
  height: 100%;
}
</style>
