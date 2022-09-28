<template>
  <div class="dao-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        RAINBOW DAO
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        Rainbow City belongs to DAO category, a virtual city-state of human civilization built based on blockchain, a
        country of liberty where we can truly Satoshi Nakamoto's thought and the spirit of Bitcoin into reality.
      </p>
      <p>
        In order to make Rainbow DAO more in line with the idea of blockchain, the spirit of Satoshi Nakamoto and
        mathematical algorithm, we invented a new separation of powers for humans based on mathematical algorithm with
        blockchain as the cornerstone.
      </p>
      <p>
        At the entire primary governance level, Rainbow DAO is composed of three parts: Rainbow City central council,
        Rainbow City central cabinet and Rainbow City central court. They restrict and coordinate with each other to
        escalate the entire ecosystem of Rainbow City.
      </p>
      <p>
        Rainbow City central council is the highest legislative body with the highest authority of the Rainbow
        city-state, owning the legislative power of the entire ecology, representing the overall interests of all
        members, safeguarding the collective right and guiding the healthy and orderly development of the entire
        ecology. It is divided into the House of Lords and the House of Commons. Specific institution regulations will
        be discussed according to the actual conditions in three to five years.
      </p>
      <p>

        Rainbow City central cabinet, as the highest administrative agency, has administrative power and responsibility
        in the concrete construction of the Rainbow city-state but subject to the supervision and inspection of the
        central parliament and the central court. Cabinet chairman, head of state, is endowed with veto power over
        projects in important proposals or decision-making adjustments and the power to dissolve central parliament and
        central court in crisis situations.
      </p>
      <p>
        While the cabinet chairman is under the supervision of the central parliament and the central court. On
        condition that they perceive that the chairman has committed any major negligence, the former can initiate
        impeachment against the chairman to safeguard the overall interests of the city-state. Similarly, provided that
        people deem that the chairman has committed any major negligence, they can release a referendum to remove the
        chairman from office and recall his veto power. It’s a system of checks and balances.
      </p>
      <p>
        Rainbow City central court works as the highest judicial institution. Different from the court fabric, it
        consists of a row of smart contracts set in advance that penetrate all facets of Rainbow City governance to fend
        its fairness and justice there and assist senior judges in judicial interpretation. The detailed construction is
        yet undecided depending on the real-time situation of Rainbow DAO in the following three to five years and
        adjustments will be made as well.
      </p>
      <p>
        That is the separation of powers of Rainbow DAO, the core of the entire Rainbow DAO governance. Continuous
        optimization and adjustment will be made relying on the development of Rainbow ecology.
      </p>
      <p>
        Specially targeting the strengths and weaknesses of blockchain projects, Rainbow DAO employs due system:
        intensive management + strong community, which are the two wings of the Rainbow central cabinet body.
      </p>
      <p>
        One body refers to Rainbow central cabinet as a whole; two wings, two major components, that is, Rainbow
        founding and management team and community team. They take on the administrative executive function of the
        sector in two dimensions. As Rainbow ecosystem grows stronger, the two will finally merged into one and rise to
        be the real central cabinet of Rainbow City.
      </p>
      <p>
        "Rainbow DAO" wants to establish a Bitcoin civilized digital city-state based on "Token Economy" and "Community
        Governance". We are a DAO based on the idea of blockchain. We want to establish a series of DeFi organizations,
        and we need to explore methods of “Social Governance”. We are going to explore new human civilization and new
        human relations of production.
      </p>
      <div class="diagram" @click="$router.push('/diagram')">
        Rainbow DAO <br> Architecture Diagram
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "daoPage1",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.dao-page1 {
  height: 100%;

  .page-content {
    overflow: auto;

    .diagram {
      width: 180px;
      height: 40px;
      cursor: pointer;
      margin: 10px auto;
      font-weight: bold;
      line-height: 16px;
      padding-top: 10px;
      text-align: center;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 25px;
      box-shadow: 0px 15px 20px 0px rgba(195, 105, 190, 0.30);
    }
  }

}
</style>
