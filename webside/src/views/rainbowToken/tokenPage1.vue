<template>
  <div class="tokenPage1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        RAINBOW TOKEN
      </div>

    </div>
    <div class="page-content">
      <p>
        "Rainbow DAO" insists on "token economy" and "community governance", which is an exploration of new human
        production relations. This is a huge and complex economy, and also a viable economy.
      </p>
      <p>
        The function of Rainbow City's ecosystem economy cannot be realized by a single token. It is composed of a
        series of ecological passes. With the continuous development of the economy, many "sub-tokens" will be extended
        to promote the prosperity of the economy.
      </p>
      <p>
        In the early development of "Rainbow DAO", there were a total of 15 tokens, of which the most important and core
        was the first token-RBT. RBT has the "Token" function in the cryptocurrency, and it is also the parent token of
        the entire Rainbow City ecosystem. It not only represents the "right" to participate in community governance,
        but also represents the "profit" of sharing community income.
      </p>
      <p>
        RBT is the most important token of Rainbow ecosystem, representing the overall rights and interests of Rainbow
        DAO. The ecosystem of Rainbow DAO is built around RBT, which is also the soul of Rainbow City.
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: "tokenPage1",
  props: ["isUp"],

}
</script>

<style scoped>

</style>
