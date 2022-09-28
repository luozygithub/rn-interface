<template>
  <div class="finance-page2">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        RAINBOW CITY MINISTRY OF FINANCE’S<br>INCOME DISTRIBUTION AND USAGE PRINCIPLES
      </div>
    </div>
    <div class="page-content">
      <div class="content">
        On the basis of determining the income management principles of Rainbow DAO, we then determine the principles of
        income distribution and use, and further refine the income distribution direction, distribution ratio, use
        subject and use direction. This is also the most basic community consensus of Rainbow DAO. This is also the
        basis for us as a DAO organization to build trust to operate.
      </div>
      <div class="title">
        ECOLOGICAL RETENTION (20%)
      </div>
      <div class="content">
        20% of the ecological income will be retained by the Rainbow City Foundation for the circular investment and
        development of the entire ecology. In addition, 80% of the income is distributed in real time and distributed to
        different users in the community for ecological construction. This overall distribution ratio can be adjusted
        according to the actual situation. If there is a major adjustment, it needs to be publicized to the community.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "financePage2",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.finance-page2 {
.page-content{
  .title{
    font-size: 20px;
    margin-top: 20px;
    color: #db1f7e;
    font-weight: bold;
  }
}
}
</style>
