<template>
  <div class="who-we-are">
    <div class="z-box">
      <rainbow-nav></rainbow-nav>
      <div style="position: relative;z-index: 1;">
        <div class="title">
          <img src="../../assets/imgs/WHOAREWE.png" alt="">
        </div>
        <div class="long-white-bg">
          <div class="we-list">
            <div class="list-item" style="padding: 30px">
              <div class="index">1</div>
              <div class="name">
                Satoshi Nakamoto is the second <br> coming of Jesus Christ
              </div>
              <div class="button-box" @click="$router.push('/whoAreWe1')">
                <div class="button">
                  <svg t="1628841513436" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       p-id="2015" width="32" height="32">
                    <path
                        d="M773.7594875 315.68062438L773.7594875 374.23644406 915.12156312 487.75052094 32.21969094 488.13809844 32.10456875 533.80793469 918.6922625 533.80793469 773.7594875 650.23363719 773.7594875 708.31937562 991.89543125 533.80793469 991.89543125 490.17959469Z"
                        p-id="2016"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="img-box" @click="$router.push('/whoAreWe1')">
                <img src="../../assets/imgs/BTC_ball.png" alt="">
              </div>
            </div>
            <div class="list-item">
              <div class="img-box"  @click="$router.push('/whoAreWe2')">
                <img src="../../assets/imgs/city_bg.png" alt="">
              </div>
            </div>
            <div class="list-item" style="padding: 30px">
              <div class="index">2</div>
              <div class="name">
                The Abandonment of the <br> Tower of Babel and the<br> Reconstruction of Rainbow City
              </div>
              <div class="button-box " @click="$router.push('/whoAreWe2')">
                <div class="button">
                  <svg t="1628841513436" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       p-id="2015" width="32" height="32">
                    <path
                        d="M773.7594875 315.68062438L773.7594875 374.23644406 915.12156312 487.75052094 32.21969094 488.13809844 32.10456875 533.80793469 918.6922625 533.80793469 773.7594875 650.23363719 773.7594875 708.31937562 991.89543125 533.80793469 991.89543125 490.17959469Z"
                        p-id="2016"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="list-item" style="padding: 30px">
              <div class="index">3</div>
              <div class="name">
                The "awakening" of mankind<br> and the mission of Rainbow City
              </div>
              <div class="button-box " @click="$router.push('/whoAreWe3')">
                <div class="button">
                  <svg t="1628841513436" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       p-id="2015" width="32" height="32">
                    <path
                        d="M773.7594875 315.68062438L773.7594875 374.23644406 915.12156312 487.75052094 32.21969094 488.13809844 32.10456875 533.80793469 918.6922625 533.80793469 773.7594875 650.23363719 773.7594875 708.31937562 991.89543125 533.80793469 991.89543125 490.17959469Z"
                        p-id="2016"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="img-box"  @click="$router.push('/whoAreWe3')">
                <img src="../../assets/imgs/awake_bg.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <pageFooter></pageFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
export default {
  name: "whoWeArePage",
  components: {pageFooter},
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
.who-we-are {
  background: url("../../static/imgs/whoarewe_bg.png") no-repeat !important;
  background-size: 100% auto !important;

  .title {
    height: 180px;
    text-align: center;

    img {
      margin-top: 30px;
      width: 400px;
    }
  }

  .long-white-bg {
    position: relative;
    top: 60px;
  }

  .we-list {
    width: 900px;
    margin: 110px auto;
    position: relative;
    top: -120px;
    display: flex;
    flex-wrap: wrap;
    background: #fff;

    .list-item {
      width: 450px;

      .index {
        width: 40px;
        height: 40px;
        font-size: 26px;
        text-align: center;
        font-weight: bold;
        color: #db1f7e;
        line-height: 40px;
        position: relative;
        border: 1px solid #eaeaea;
        &:after{
          position: absolute;
          content: '';
          left:6px;
          bottom: 0;
          background: #db1f7e;
          width: 8px;
          height: 2px;
        }
      }

      .name {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        line-height: 36px;
        padding-top: 30px;
        height: 200px;
      }

      .button-box {
        cursor: pointer;
        text-align: center;
        width: 100px;
        height: 40px;
        border-radius: 26px;
        transition: 0.3s;

        &:hover {
          box-shadow: 1px 1px 10px #12c2e9;
        }

        background-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
        padding: 1px;

        .button {
          border-radius: 26px;
          width: 100%;
          height: 100%;
          background: #fff;
          svg{
            margin-top: 3px;
          }
          a {
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
          }
        }
      }

      .img-box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        transition: 0.6s;
        img {
          transform: scale(1);
          height: 100%;
          width: 100%;
          transition: 0.6s;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
