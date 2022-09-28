<template>
  <div class="defi-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        RAINBOW DEFI
      </div>
    </div>
    <div class="page-content">
      <p>
        DeFi means decentralized finance. DeFi combines traditional financial projects with blockchain and strengthens
        the connection between financial products through functional contracts.
      </p>
      <p>
        After nearly two years of development, DeFi has fully demonstrated its potential in the future economic field.
        DeFi is favored by many people due to its openness, transparency, composability, and license-free features. DeFi
        creates unlimited imagination for the financial system on the blockchain and meets market needs.
      </p>
      <p>
        Up to now, protocols of stablecoins, such as public chains of Bitcoin, Ethereum and Polkadot, MakerDAO, FEI and
        Liquity, of transaction, such as bancor and curve, of lending, such as aave and compound, of Oracle like link
        and of wallet like Metamask are all flourishing, especially DeFi based on Ethereum.
      </p>
      <p>

        But those protocols are dissociated and competing, resultant force is needed. No matter they are protocols of
        the same or different type in the same public chain, or in different public chains. They are after all rivals,
        contending for and tearing up limited liquidity, particularly at present when a cross-chain protocol of freedom
        hasn’t been made among major public chains. Worse still, financial liquidity lacks loyalty greatly, it flows in
        coordination with high interest since a previously prosperous protocol can fall mediocre overnight.
      </p>
      <p>
        Additionally, various blockchain protocols have their own independent token and economy models. Though divergent
        DeFi protocols can quote and be overlaid with each other like toy bricks. However, the superposition is confined
        to function, token and economy are not involved in essence. Tokens of diverse kinds can not cooperate well, in
        fact, they affect each other. That prevents the formation of a consolidated economy, so its internal value won’t
        rise with the improvement in governance capabilities.
      </p>
      <p>
        To deal with that problem, we put forward “Rainbow City” today to establish a super economy of harmony,
        unification and effective collaboration. Combined with a series of meticulous design of tokens and diversified
        sorts of mining, Rainbow City will render Rainbow DAO as its kernel to unify scattered economic behaviors of
        diverse usage and put them in one economy.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "defiPage1",
  props: ['isUp']
}
</script>

<style lang="scss" scoped>
.defi-page1 {
  .page-header {
    padding-top: 30px;
  }

  .page-content {
    p {
      padding: 10px 0;
    }
  }
}
</style>
