<template>
  <div class="who-are-we">
    <swiper ref="daoFoundation"
            id="daoFoundation"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <page1 v-show="activeIndex==0" :is-up="isUp"></page1>
      </swiper-slide>
      <swiper-slide>
        <page2 v-show="activeIndex==1" :is-up="isUp"></page2>
      </swiper-slide>
      <swiper-slide>
        <page3 v-show="activeIndex==2" :is-up="isUp"></page3>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import page1 from "@/views/whoAreWe/page1";
import page2 from "@/views/whoAreWe/page2";
import page3 from "@/views/whoAreWe/page3";

export default {
  name: "whoAreWe",
  components:{
    page1,
    page2,
    page3,
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
.who-are-we{
  width: 100%;
  height: 100%;
}
</style>
