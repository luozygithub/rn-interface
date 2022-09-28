<template>
  <div class="city-page3">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        Core values<br/> of Rainbow City
      </div>
    </div>
    <div class="page-content">
      <div class="card">
        <img class="card-logo" src="../../assets/imgs/place.png"/>
        <div class="card-title">
          Orientation
        </div>
        <div class="card-info">
          A digital city-state based on Token Economy and Community Management
        </div>
      </div>
      <div class="card">
        <img class="card-logo" src="../../assets/imgs/mission.png"/>
        <div class="card-title">
          Mission
        </div>
        <div class="card-info">
          Awaken and strengthen human awareness to digital Bit Civilization
        </div>
      </div>
      <div class="card">
        <img class="card-logo" src="../../assets/imgs/vision.png"/>
        <div class="card-title">
          Prospect
        </div>
        <div class="card-info">
          Render Bitcoin the infrastructure of digital bit civilization
        </div>
      </div>
      <div class="card">
        <img class="card-logo" src="../../assets/imgs/vision.png"/>
        <div class="card-title">
          Values
        </div>
        <div class="card-info">
          Transparency & Justice & Co-creation & Co-management & Co-ownership
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityPage3",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.city-page3 {
  .page-content {
    padding-top: 30px!important;;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      background: url("../../assets/imgs/card_bg.png");
      background-size: cover;
      width: 370px;
      height: 134px;
      padding: 38px;
      margin-bottom: 10px;
      border-radius: 8px;

      &:hover {
        width: 368px;
        height: 132px;
        border: 1px solid #c212e9;
        box-shadow: 0px 0px 10px white;
      }

      .card-logo {
        width: 32px;
        height: 32px;
      }

      .card-title {
        height: 32px;
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        color: #db1f7e;
        line-height: 32px;
      }

      .card-info {
        font-size: 16px;
        color: #fff;
      }
    }

  }
}
</style>
