<template>
  <div class="community-page7">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        STARTING FROM REGIONAL DAO,<br> GLOBAL ECOLOGICAL GOVERNANCE
      </div>
    </div>
    <div class="page-content">
      <div class="token-list">
        <div class="token-item">
          <img class="item-img" src="../../../assets/imgs/bronze.png" alt="">
          <div class="item-title">
            RBT-Elf
          </div>
          <div class="item-content">
            A single token cannot apply for the city node token RBT-Citynode.
          </div>
        </div>
        <div class="token-item">
          <img class="item-img" src="../../../assets/imgs/silver.png" alt="">

          <div class="item-title">
            RBT-Elf
          </div>
          <div class="item-content">
            A single token cannot apply for the city node token RBT-Citynode.
          </div>
        </div>
        <div class="token-item">
          <img class="item-img" src="../../../assets/imgs/gold.png" alt="">

          <div class="item-title">
            RBT-Elf
          </div>
          <div class="item-content">
            A single token cannot apply for the city node token RBT-Citynode.
          </div>
        </div>
        <div class="token-item">
          <img class="item-img" src="../../../assets/imgs/platinum.png" alt="">

          <div class="item-title">
            RBT-Elf
          </div>
          <div class="item-content">
            A single token cannot apply for the city node token RBT-Citynode.
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage7",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page7{
  .page-content{
    overflow: auto;
    .title{
      color: #db1f7e;
      font-size: 20px;
    }
    .token-list{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .token-item{
        width: 430px;
        height: 200px;
        padding: 10px;
        text-align: center;
        .item-img{
          width: 70px;
        }
        .item-title{
          font-size: 18px;
          text-align: center;
        }
        .item-content{
        }
      }
    }
  }
}
</style>
