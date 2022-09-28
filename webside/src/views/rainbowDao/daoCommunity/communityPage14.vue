<template>
  <div class="community-page14">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-index">
        04
      </div>
      <div class="page-header-title">
        VOTING GOVERNANCE<br> TOKEN: RBT-VOTE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <p>
        The voting weight contained in RBT-Vote has three aspects. The first is the number of RBT, which consists of two
        parts: the quantity of RBT in wallet, in three major RBT mining pools, in LP of decentralized exchange and in
        decentralized lending platform; the amount of RBT in RBT-Deposit token, which is weighted conforming with the
        time
        period of locked position. For instance, if 10,000 RBT are locked for 12 months, then the weight is 4 times and
        the voting weight rises to 40,000 RBT.
      </p>
      <p>
        The second is the weighting of rbVIP tokens, which are weighted in line
        with the number of the tokens in wallet. Owing nine rbVIP tokens means the identity of VIP resident of level II
        with a weight of 40%, the rest can be done in the same manner.
      </p>
      <p>
        The third is that the community governance token
        will be weighted twice on the basis of the VIP weight. Multiple tokens can be weighted multiple times. However,
        the overall weighted proportion can not exceed 40%.
      </p>
      <p>
        When the three factors are aggregated, it is the total voting
        weight of this RBT-Vote token. More contributions and participation equals greater voting weight.
      </p>
      <div class="title">
        ATTENTION
      </div>
      <p>
        RBT-Vote is an ERC721 certificate, unique and indivisible. It is the representative of the voting rights of all
        members of Rainbow City. Each wallet can generate an RBT-Vote voting certificate, which is not transferable and
        non-circulating, but its voting rights can be entrusted to others, or its voting rights can be transferred for a
        certain period of time to obtain some profit. When the authorized transfer time expires, the voting rights will
        return to the original wallet.
      </p>
      <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
export default {
  name: "communityPage14",
  props: ["isUp"],
  components:{pageFooter}
}
</script>

<style lang="scss" scoped>
.community-page14 {
  .page-content {
    overflow: auto;

    .rainbow-table {
      width: 900px !important;
      margin: 20px 0 0 0 !important;

      .row-item {
        .col-item {
          width: 200px !important;
          text-align: center !important;
        }

      }
    }

    .title {
      color: #db1f7e;
      font-size: 20px;
      font-weight: bold;
      margin-top: 20px;
    }
  }
}
</style>
