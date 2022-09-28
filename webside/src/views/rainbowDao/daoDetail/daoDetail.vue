<template>
  <div class="dao-detail">

    <swiper ref="RainbowCity"
            id="RainbowCity"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <daoPage1 v-show="activeIndex==0" :is-up="isUp"></daoPage1>
      </swiper-slide>
      <swiper-slide>
        <daoPage2 v-if="activeIndex==1" :is-up="isUp"></daoPage2>
      </swiper-slide>
      <swiper-slide>
        <daoPage3 v-show="activeIndex==2" :is-up="isUp"></daoPage3>
      </swiper-slide>
      <swiper-slide>
        <daoPage4 v-show="activeIndex==3" :is-up="isUp"></daoPage4>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
import daoPage1 from "@/views/rainbowDao/daoDetail/daoPage1";
import daoPage2 from "@/views/rainbowDao/daoDetail/daoPage2";
import daoPage3 from "@/views/rainbowDao/daoDetail/daoPage3";
import daoPage4 from "@/views/rainbowDao/daoDetail/daoPage4";
export default {
  name: "daoDetail",
  components:{
    daoPage1,
    daoPage2,
    daoPage3,
    daoPage4,
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
.dao-detail {
  width: 100%;
  height: 100%;
}
</style>
