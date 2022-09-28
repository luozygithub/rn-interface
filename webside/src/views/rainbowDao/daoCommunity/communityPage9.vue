<template>
  <div class="community-page9">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        STARTING FROM REGIONAL DAO,<br> GLOBAL ECOLOGICAL GOVERNANCE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        VIP RESIDENT ECOLOGICAL BASIC SYSTEM DESCRIPTION
      </div>
      <div class="vip-introlist">
        <div class="vipIntro-item">
          <div class="index">
            01
          </div>
          <div class="content">
            Only when you become a VIP resident of the RBT ecosystem can you enjoy the promotion benefits of the
            ecosystem. Basic income such as transaction fees and resident fees in the RBT ecosystem can be used to
            distribute dividends to users and return benefits to VIP residents who have contributed to the ecosystem.
          </div>
        </div>
        <div class="vipIntro-item">
          <div class="index">
            02
          </div>
          <div class="content">
            The actual dividend ratio of VIP users is determined according to their own level. The higher the user's VIP
            level, the higher the distribution ratio.
          </div>
        </div>
        <div class="vipIntro-item">
          <div class="index">
            03
          </div>
          <div class="content">
            In order to promote the orderly development of the RBT ecosystem, the VIP token price and dividend ratio can
            be adjusted according to the actual governance situation. The adjustment needs to be publicized to the
            entire community.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage9",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page9 {
  .page-content {
    overflow: auto;

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #db1f7e;
    }

    .vip-introlist {
      .vipIntro-item {
        display: flex;
        margin-top: 30px;

        .index {
          margin-top: 11px;
          text-align: center;
          line-height: 80px;
          width: 80px;
          height: 80px;
          opacity: 1;
          background: #db1f7e;
          font-size: 40px;
          font-family: Impact, Impact-Regular;
          font-weight: 400;
          color: rgba(241, 241, 241, 0.5);
        }

        .content {
          flex: 1;
          padding: 30px 0 0 10px;
          line-height: 18px;
          border-bottom: 1px solid #db1f7e;
        }
      }
    }
  }
}
</style>
