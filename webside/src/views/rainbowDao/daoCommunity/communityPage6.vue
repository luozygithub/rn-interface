<template>
  <div class="community-page6">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        03
      </div>
      <div class="page-header-title">
        RVIP, LOYAL USERS <br>OF RAINBOW CITY
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        RAINBOW DAO VIP RESIDENT ECOSYSTEM (ERC721)
      </div>
      <p>
        In Rainbow DAO, the "RBT Global VIP Resident System" is the most basic and core system, and it also supports the
        continuous development of Rainbow DAO. RBT residents will bring two important values to the ecosystem:
      </p>
      <p>
        First,the ever-increasing revenue of VIP tokens is the support of the ecosystem's value source and supports the early
        token price of RBT. This is a transparent system. Anyone can rely on this to start a business, preach to the
        community, and get benefits. This is a perpetual motion machine for income, which promotes the development of
        ecosystems and communities.
      </p>
      <p>
         Second, with the continuous increase of VIP members, Rainbow DAO can continuously
        provide real and deeply sticky users. These people will be the most loyal users of the ecosystem, learning and
        growing together with Rainbow City. Real paying users are far more valuable than free users and can make our
        ecosystem foundation stronger.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage6",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page6 {
  .page-content {
    overflow: auto;
    .title{
      font-size: 20px;
      font-weight: bold;
      color: #db1f7e;
    }
  }
}
</style>
