<template>
  <div class="token-page2">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        01
      </div>
      <div class="page-header-title">
        RAINBOW CITY ECOLOGICAL TOKEN<br/>
        ERC20 HOMOGENIZED TOKEN
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="rainbow-table">
        <div class="row-item">
          <div class="col-item">
            Types
          </div>
          <div class="col-item">
            Issue Institute
          </div>
          <div class="col-item">
            Name
          </div>
          <div class="col-item">
            Symbol
          </div>
          <div class="col-item">
            Standard
          </div>
          <div class="col-item">
            Supply
          </div>
          <div class="col-item">
            Issuance Rules
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            1.Rainbow City Ecosystem Token
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow Token
          </div>
          <div class="col-item">
            RBT
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            5 billion
          </div>
          <div class="col-item">
            RBT is the core token of the Rainbow City ecosystem and the governance token of Rainbow DAO. RBT is the soul
            of the entire ecosystem and is responsible for governing the entire rainbow protocol and it will initially
            be
            issued through four major mining pools and used in all aspects of the Rainbow City ecosystem. Different
            ecological sub-tokens can be exchanged for RBT accordingly to realize the overall development of the
            ecosystem.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            2.Rainbow Contribution Token-Rainbow Diamond
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow Diamond
          </div>
          <div class="col-item">
            RBD
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            100 billion
          </div>
          <div class="col-item">
            RBD is issued through community contributions and governed by Rainbow DAO,which is mainly used to stimulate
            the value contribution and can be recycled in the Rainbow City ecosystem. The value of RBD is constant,
            equivalent to 0.05 USD, but it can only be used to redeem RBT and cannot be liquidated in the ecosystem.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            3.Rainbow exchange token in seed round.
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow Token Seed
          </div>
          <div class="col-item">
            RBT-Seed
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            100 billion
          </div>
          <div class="col-item">
            RBT Seed is mainly used to redeem RBT for users participating in the seed round. Users participating in the
            seed round will first get RBT-seed. After the smart contract of the entire ecosystem is activated, users can
            exchange it for RBT at a ratio of 1:1.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            4.Rainbow Token Exchange
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow Token Exchange
          </div>
          <div class="col-item">
            RBT-EX
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            200亿枚
          </div>
          <div class="col-item">
            RBT-EX is an RBT redemption voucher governed by Rainbow DAO, which is mainly used to exchange 1:1 with RBT
            under certain conditions. In the early stage, RBT-EX was mainly used to redeem RBT in the "Invitation
            Mining" mining pool. Users need to satisfy some conditions to have the redemption quota. "Invitation Mining"
            reserves 200 million RBTs for the exchange of RBT-EX.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            5. Rainbow BTC Anchor Token
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow BTC
          </div>
          <div class="col-item">
            RBTC
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            According to the actual condition
          </div>
          <div class="col-item">
            RBTC is governed by Rainbow DAO and is an important part of Rainbow DeFi. BTC is the source of Rainbow
            City's ideas and the value support of the Rainbow City ecosystem. Rainbow City will build a "Rainbow Bridge"
            to connect various public chains and issue BTC's anchor token RBTC. Rainbow City strives to establish a
            complete decentralized financial ecosystem to make BTC become the value anchor of the entire ecosystem and
            the infrastructure of human civilization.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            6.Rainbow USD Stablecoin
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow USD
          </div>
          <div class="col-item">
            RUSD
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            According to the actual condition
          </div>
          <div class="col-item">
            RUSD is governed by Rainbow DAO as a stable currency anchored to the US dollar, which is issued through
            stake. In the early stage, users can use WBTC and ETH as collateral to minting RUSD, and then Rainbow City
            can accept other value assets as collateral. The exchange rate of RUSD refers to the Hongkong linked
            exchange rate system, which is 1:1 exchanged with the US dollar
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            7.Rainbow Bond Token
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow Bond
          </div>
          <div class="col-item">
            RBB
          </div>
          <div class="col-item">
            ERC20
          </div>
          <div class="col-item">
            According to the actual condition
          </div>
          <div class="col-item">
            As a way of community financing, RBB is governed by Rainbow DAO and issued through community bonds sales.
            The foundation issues RBB through locked RBT as collateral. After maturity, users can choose to redeem the
            bonds or convert bonds to equity.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tokenPage2",
  props: ["isUp"],
}
</script>

<style lang="scss" scoped>
.token-page2 {
  .page-content {
    overflow-y: auto;
  }
}
</style>
