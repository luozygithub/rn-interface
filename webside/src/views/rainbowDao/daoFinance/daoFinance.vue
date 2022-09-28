<template>
  <div class="dao-finance">
    <swiper ref="daoFoundation"
            id="daoFoundation"
            mousewheel="true"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            :options="swiperOptions">
      <swiper-slide>
        <financePage1 v-if="activeIndex==0" :is-up="isUp"></financePage1>
      </swiper-slide>
      <swiper-slide>
        <financePage2 v-if="activeIndex==1" :is-up="isUp"></financePage2>
      </swiper-slide>
      <swiper-slide>
        <financePage3 v-if="activeIndex==2" :is-up="isUp"></financePage3>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>


import financePage1 from "@/views/rainbowDao/daoFinance/financePage1";
import financePage2 from "@/views/rainbowDao/daoFinance/financePage2";
import financePage3 from "@/views/rainbowDao/daoFinance/financePage3";

export default {
  name: "daoFinance",
  components:{
    financePage1,
    financePage2,
    financePage3,

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
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.dao-finance {
  width: 100%;
  height: 100%;
}
</style>
