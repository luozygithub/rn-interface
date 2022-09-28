<template>
  <div class="city-page1">
    <img class="page1-font animate__animated"
         :class="{'animate__lightSpeedInRight': isUp,'animate__lightSpeedInLeft': !isUp}"
         src="../../assets/imgs/DAODEFI.png" alt="">
    <img class="page1-font-white" src="../../assets/imgs/DAOCONTROLVALUE.png" alt="">
    <div class="city-intro animate__animated" :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="city-intro-detail">
        A digital city-state of the advanced Bit civilization on the foundation of "Token Economy" and "Community
        Management".

        On the basis of blockchain technology, Rainbow City will truly treat Satoshi’s Bitcoin tenet as the kernel to
        make the idea of decentralization come true, render Bitcoin the anchor in value estimation, and finally let
        Bitcoin rise to be the infrastructure of the advanced human civilization in the practice of Token Economy and
        Community Management
      </div>
    </div>
    <div class="page1-buttons">
      <div class="white-paper-box">
        <div class="white-paper">
          <a href="">
            WHITE PAPER
          </a>
        </div>
      </div>
      <div class="seed-round">
        <div @click="openSeedSub">
          SEED ROUND SUBSCRIPTION
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityPage1",
  props: ["isUp"],
  methods:{
    openSeedSub(){
      let path = this.$router.resolve({path:'/seedSub', query: {}})
      window.open(path.href,'_bank')
    }
  }
}
</script>

<style lang="scss" scoped>
.city-page1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  .page1-font {
    width: 800px;
    margin-top: 60px;
  }

  .page1-font-white {
    width: 700px;
    margin-top: 30px;
  }

  .city-intro {
    text-align: center;
    margin-top: 30px;

    p {
      font-size: 22px;
      margin: 50px 0 0 20px;
    }

    .city-intro-detail {
      font-size: 12px;
      margin: 20px auto;
      line-height: 20px;
      width: 670px;
    }
  }

  .page1-buttons {
    text-align: center;
    display: flex;
    margin-top: 30px;

    .white-paper-box {
      width: 176px;
      height: 46px;
      border-radius: 26px;
      background-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
      padding: 2px;

      .white-paper {
        border-radius: 26px;
        width: 100%;
        height: 100%;
        background: #090e1b;
        line-height: 46px;

        a {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
        }
      }
    }

    .seed-round {
      width: 180px;
      height: 50px;
      opacity: 1;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 25px;
      box-shadow: 0px 15px 20px 0px rgba(195, 105, 190, 0.30);
      display: flex;
      align-items: center;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
