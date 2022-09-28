<template>
  <div class="foundation-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        RAINBOW DAO FOUNDATION
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        Rainbow City foundation, the ecological investment management department, is in charge of the ecological
        investment and construction of the entire Rainbow City, governing 70% of the funds in RBT consensus mining and
        20% of the revenue from finance section.
      </p>
      <p>
        For capital in Rainbow City foundation, 20% belongs to liquidity market stabilization fund in the ecosystem of
        Rainbow City, for the management of financial liquidity and capital protection for the mechanism of value
        guardian; 80% pertains to the investment fund in the ecology of Rainbow City for the investment of the seven
        ecological systems.
      </p>
      <p>
        The Rainbow City Liquidity Stabilization Fund comes from the Rainbow City Foundation part of Consensus Mining.
        All assets expect RBT will be converted into ETH and WBTC. The ratio of ETH to WBTC is 50% to 50%, and this
        ratio can be adjusted. At the beginning, WBTC was the mainstay, and then the RBTC issued by Rainbow City was the
        mainstay to form BTC's capital reserve.
      </p>
      <p>
        Then allocate ETH and WBTC to four different liquidity pools in proportion. Store the ETH and WBTC in the four
        different pools into the loan protocol, and mint the stable currency RUSD. The value of the minted stablecoin is
        between 40% and 70% of the collateral. The specific ratio is subject to when the protocol is officially
        launched. Then the generated stablecoins are injected into the liquidity pools of the four currencies to provide
        liquidity for the four tokens. The initial funds provided are RUSD, and another token of liquidity pair is
        purchased through RUSD. The two kinds of tokens are injected into the pool with the same amount of funds. With
        the continuous increase of injected capital and the continuous increase of liquidity, the depth of the capital
        pool is also increasing.
      </p>
      <p>
        This operation can be performed every four hours, and anyone can call the smart contract to implement the
        operation and get a certain RBD reward.
      </p>
      <p>
        In the Rainbow City Liquidity Stabilization Fund, we have also established a "value guardian mechanism" as a
        supplement to providing liquidity. When the market faces a black swan event or the price of tokens plummets, the
        "value guardian mechanism" will use liquidity funds to purchase RBT in the secondary market to maintain the
        stability of the token price, which can prevent the community consensus from breaking.
      </p>
      <p>
        When the RBT-RUSD secondary market exchange rate price is lower than 20% of its consensus mining ladder curve
        price, the "value guardian mechanism" can be activated. Use RUSD in LP to buy RBT to maintain the price of
        Tokens.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "foundationPage1",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.foundation-page1 {
  .page-content {
    overflow: auto;
  }
}
</style>
