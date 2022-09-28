<template>
  <div class="city-page2">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        01
      </div>
      <div class="page-header-title">
        Rainbow City: <br/>A Super Economy for Human Civilization
      </div>

    </div>
    <div class="page-content">
      <p>
        Rainbow City belongs to DAO category, a virtual city-state of human civilization built based on blockchain, a
        country of liberty where we can truly Satoshi Nakamoto's thought and the spirit of Bitcoin into reality.
      </p>
      <p>
        Numerous super applications exist in Internet circle, such as facebook、twitter、google、amazon, affecting the
        ideology of society and people’s way of living. Yet most of them are centralized.
      </p>
      <p>
        Rainbow City believes human beings will certainly embrace an unprecedented super business pattern, which works
        in the form of decentralized protocol, future in the virtue of blockchain. Every valuable blockchain protocol
        and its participants will work together, jointly making up this super business pattern, this super economy,
        meeting the majority of the needs in human economic activities of everyday life.
      </p>
      <p>
        Combined with a series of meticulous design of tokens and diversified sorts of mining, Rainbow City will render
        Rainbow DAO as its kernel to unify scattered economic behaviors of diverse usage and put them in one economy.
        Centering on Bitcoin, productivity and living all over the globe are expected to circulate within the same
        economic system to truly build an infrastructure for human civilization of digital world.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityPage2",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.city-page2 {

}
</style>
