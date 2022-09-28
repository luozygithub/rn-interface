<template>
  <div class="token-page3">
    <div class="page-header animate__animated"
         :class="{'animate__fadeInUp':isUp,'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        02
      </div>
      <div class="page-header-title">
        TOKENS OF RAINBOW CITY ECOSYSTEM <br/> ERC721 NON-FUNGIBLE TOKEN
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="rainbow-table">
        <div class="row-item">
          <div class="col-item">
            TYPES
          </div>
          <div class="col-item">
            ISSUE INSTITUTE
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
            1.Rainbow VIP Token
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow VIP
          </div>
          <div class="col-item">
            RVIP
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual conditions
          </div>
          <div class="col-item">
            rbVIP is governed by Rainbow DAO and represents the VIP rights of users. Community members can enjoy
            corresponding VIP identities and rights by obtaining rbVIP tokens. rbVIP is issued in two ways, one is to
            distribute to community members in the form of airdrops and controlled by Rainbow DAO, and the other is to
            purchase from the official by community members at a price of 100USD. Determine the VIP level of community
            members according to the number of VIP tokens in the wallet. 1 for bronze VIP, 3 for silver VIP, 6 for gold
            VIP, and 9 for platinum VIP. The validity period of rbVIP is 365 days.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            2. RBT Bank Deposit Token
          </div>
          <div class="col-item">
            Rainbow Central Bank
          </div>
          <div class="col-item">
            Rainbow Token Deposit
          </div>
          <div class="col-item">
            RBT-Deposit
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual conditions
          </div>
          <div class="col-item">
            RBT-Deposit is an NFT issued by RBT Bank, which represents the deposit certificate of RBT in RBT Bank. Each
            RBT-Deposit is unique and contains different information, including the expiry time of the deposit, the
            amount of RBT contained, the type of deposit, and the number of generated governance tokens. RBT-Deposit can
            be staking, transferred, can enjoy dividends, can generate community governance certificates, etc. It is the
            most important NFT in the Rainbow City ecosystem and the basic certificate for the governance of the Rainbow
            City ecosystem.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            3. RBT Community Elf Token
          </div>
          <div class="col-item">
            Rainbow Central Parliament
          </div>
          <div class="col-item">
            Rainbow Token Elf
          </div>
          <div class="col-item">
            RBT-Elf
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual conditions
          </div>
          <div class="col-item">
            RBT-Elf is a kind of NFT issued by the Rainbow City Central Parliament and is mainly used for the community
            governance of Rainbow City. Community members with RBT-Elf can enjoy community ecosystem dividends while
            participating in community governance. Users who have RBT-Deposit and the deposit period is 1 year or more
            can apply for RBT-Elf Community Governance Token, and one RBT-Elf Token can be applied for every 2000 RBT
            deposit quota.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            4.RBT Community Enovy Token
          </div>
          <div class="col-item">
            Rainbow Central Parliament
          </div>
          <div class="col-item">
            Rainbow Token Envoy
          </div>
          <div class="col-item">
            RBT-Envoy
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual conditions
          </div>
          <div class="col-item">
            RBT-Envoy is a kind of NFT issued by the Rainbow City Central Parliament and is mainly used for the
            community governance of Rainbow City. Community members with RBT-Envoy can enjoy community ecosystem
            dividends while participating in community governance. Users who have RBT-Deposit and the deposit period is
            1 year or more can apply for RBT-Envoy Community Governance Token, and one RBT-Envoy Token can be applied
            for every 10000 RBT deposit quota.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            5.RBT Community Partner Token
          </div>
          <div class="col-item">
            Rainbow Central Parliament
          </div>
          <div class="col-item">
            Rainbow Token Partner
          </div>
          <div class="col-item">
            RBT-Partner
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual condition
          </div>
          <div class="col-item">
            RBT-Partner is a kind of NFT issued by the Rainbow City Central Parliament and is mainly used for the
            community governance of Rainbow City. Community members with RBT-Partner can enjoy community ecosystem
            dividends while participating in community governance. Users who have RBT-Deposit and the deposit period is
            1 year or more can apply for RBT-Partner Community Governance Token, and one RBT-Elf Token can be applied
            for every 50000 RBT deposit quota.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            6.RBT Community Supernode Token
          </div>
          <div class="col-item">
            Rainbow Central Parliament
          </div>
          <div class="col-item">
            Rainbow Token Supnode
          </div>
          <div class="col-item">
            RBT-Supnode
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual conditions
          </div>
          <div class="col-item">
            RBT-Supnode is a kind of NFT issued by the Rainbow City Central Parliament and is mainly used for the
            community governance of Rainbow City. Community members with RBT-Supnode can enjoy community ecosystem
            dividends while participating in community governance. Users who have RBT-Deposit and the deposit period is
            1 year or more can apply for RBT-Supnode Community Governance Token, and one RBT-Elf Token can be applied
            for every 100000 RBT deposit quota.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            7. RBT Citynode Token
          </div>
          <div class="col-item">
            Rainbow Central Parliament
          </div>
          <div class="col-item">
            Rainbow Token Citynode
          </div>
          <div class="col-item">
            RBT-Citynode
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual condition
          </div>
          <div class="col-item">
            RBT-Citynode is a kind of NFT issued by the Rainbow City Central Council, which is mainly used to build and
            manage Rainbow City nodes. Members with RBT-Citynode can establish city nodes and have the management
            authority of city nodes. The management authority of each Token is 90 days, and then new RBT-Citynode tokens
            need to be consumed to maintain the management authority. The RBT-Citynode token is generated by the
            community governance token. Each RBT-Envoy token can generate 1 RBT-Citynode token, each RBT-Partner token
            can generate 2 RBT-Citynode tokens, and each RBT-Supnode token can generate 5 RBT-Citynode tokens.
          </div>
        </div>

        <div class="row-item">
          <div class="col-item">
            8. RBT Community Vote Token
          </div>
          <div class="col-item">
            Rainbow Central  Parliament
          </div>
          <div class="col-item">
            Rainbow Token Vote
          </div>
          <div class="col-item">
            RBT-Vote
          </div>
          <div class="col-item">
            ERC721
          </div>
          <div class="col-item">
            According to the actual conditions
          </div>
          <div class="col-item">
            RBT-Vote is a kind of NFT governed by Rainbow DAO and issued by the Rainbow City Central Council, which is
            mainly used to vote for the Rainbow City community governance. Each community member only has one RBT-Vote
            token, and not transferable. It contains the information of each module of the community members in the
            Rainbow City ecosystem, including but not limited to the number of RBTs, the number of rbVIP tokens, and the
            number of community governance tokens. The voting weight of community members is determined by the
            information of different modules, and different modules have different weights.The voting weights and voting
            rules for community governance of different levels of DAO are also different. At the same time, Rainbow City
            will set up a certain voting incentive mechanism to encourage community members to vote.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tokenPage3",
  props: ["isUp"]
}
</script>

<style lang="scss" scoped>
.token-page3 {
  .page-content {
    overflow-y: auto;
  }
}
</style>
