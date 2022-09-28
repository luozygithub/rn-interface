<template>
  <div class="city-page8" @wheel.stop>
      <div class="page8-part1 animate__animated animate__heartBeat">
        <img class="quoteUp" src="../../assets/imgs/quoteup.png" alt="">
        <div class="whoWeAre">
            We are Bitcoin believers <br>
          We are the practitioners of Satoshi Nakamoto <br>
          Thought and Satoshi Nakamoto <br>
          Consensus
           is the creator of  <br> Bitcoin and pioneer of Bit civilization <br>
          We salute him!
        </div>

        <img class="quoteDown" src="../../assets/imgs/quotedown.png" alt="">
      </div>
      <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
export default {
  name: "cityPage8",
  props: ["isUp"],
  components:{pageFooter}
}
</script>

<style lang="scss" scoped>
.city-page8 {
  ::v-deep .page-footer .page-footer-part1{
    left: 0;
  }
  width: 1000px;
  margin: 0 auto;
  overflow: auto;
  height: 100%;
  .page8-part1 {
    width: 1000px;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    position: relative;

    .quoteUp, .quoteDown {
      width: 80px;
      height: 80px;
      position: absolute;
    }

    .whoWeAre {
      width: 600px;
      text-align: center;
      font-size: 24px;
      line-height: 34px;
    }

    .Satoshi {
      position: absolute;
      top: 210px;
      width: 400px;
    }

    .quoteUp {
      left: 0;
      top: 0;
    }

    .quoteDown {
      bottom: 0;
      right: 0;
    }
  }


}
</style>
