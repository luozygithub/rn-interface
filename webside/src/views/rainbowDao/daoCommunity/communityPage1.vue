<template>
  <div class="community-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        01
      </div>
      <div class="page-header-title">
        STARTING FROM REGIONAL DAO,<br> GLOBAL ECOLOGICAL GOVERNANCE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        As what was mentioned earlier, Rainbow City divides the world into 18 regions. For each of them, when 10 urban
        governance committee DAOs are set, then this area can activate its only one regional governance committee DAO
        and establish its core management texture such as Central Bank, Central Court and Cabinet, etc.
      </p>
      <p>

        When each community member joins Rainbow DAO, he is simultaneously choosing to join a certain city node DAO and
        all his subsequent economic behaviors will be bound together with this city node DAO. The most prominent feature
        of Rainbow DAO is that DAO at diverse levels will have a certain percentage of fiscal revenue as the financial
        public management fund of this organization. Hence, this DAO obtains its independent financial revenue right and
        proposal execution right.
      </p>
      <p>
        With independent financial right, every subordinate DAO grow capable of conducting community autonomy, which is
        one of the most valuable contributions that Rainbow DAO brings to the entire blockchain world. It truly
        delegates financial right to community, subverting the distribution relationship of an economy with a brand-new
        production relationship and distribution model.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "communityPage1",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.community-page1 {
  .page-content {
    overflow: auto;
  }
}
</style>
