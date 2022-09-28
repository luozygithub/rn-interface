<template>
  <div class="rainbow-island">
    <div class="z-box">
      <rainbow-nav></rainbow-nav>
      <div class="title animate__animated animate__zoomIn">
        <img src="../../assets/imgs/RAINBOWISLAND.png" alt="">
      </div>
      <div class="long-white-bg">
        <div class="page-content">
          <p>
            Since the creator Satoshi Nakamoto created Bitcoin in 2009, it has been 11 years since mankind entered the
            digital bit civilization. But in the past 11 years of history, Bitcoin has mostly been treated as a kind of
            speculation, which is filled with too many human nature and interest games. The vast majority of digital
            currency participants regard the blockchain as a tool to get rich overnight, but few people really think about
            the true meaning of Bitcoin to human civilization.
          </p>
          <p>
            The vast majority of cryptocurrency participants have been blinded by interests, and they are constantly chasing
            after go up kill drop in the field of encrypted digital currency under the stimulation of human nature. Only a
            very small number of investors regard Bitcoin as a belief.
          </p>
          <p>
            Human cognition of Bitcoin and blockchain is still limited to the fields of technology and finance, and Bitcoin
            is still regarded as a currency. However, in the eyes of "Rainbow City", Satoshi Nakamoto created Bitcoin to
            give human civilization an ideological and spiritual inspiration. The greatest value of Bitcoin is its
            ideological value, which is a brand-new new human order it brings.
          </p>
          <p>
            And this is also the reason why "Rainbow City" builds "Rainbow Island", to create a spiritual home of digital
            bit civilization, so that cryptocurrency enthusiasts from all over the world can communicate, learn, and share
            here. Everyone is here to exchange their opinions and explain their values ​​by writing articles and comments,
            and ultimately enhance their knowledge of Bitcoin.
          </p>
          <p>
            "Rainbow Island" will be a decentralized content social platform based on blockchain. Rainbow Island will
            establish a fair and open accounting system that can consistently reflect everyone's contribution. Community
            members can write, comment, upvote, repost, and motivate platform participants through RBD. The behavior of each
            participant will be quantified, and all participants can enjoy incentives fairly. Finally, social media,
            cryptocurrency and community building will be integrated.
          </p>
          <p>
            "Rainbow Island" will be a viable social economic system that can grow on its own, as well as a blockchain
            content contribution and content incentive system. Every community member can share his thoughts, and every
            community member can vote for the content he approves. Various behaviors of community members, including but not
            limited to likes, comments, concerns, sharing, collections, reposts, etc., will be quantified and can be
            motivated. "Rainbow Island" will be determined by the "common behavior" of the entire community to determine the
            value of the content. "Rainbow Island" strives to create the "spiritual home" of digital bit civilization, and
            become a resource sharing platform and media social platform for global cryptocurrency enthusiasts.
          </p>


        </div>
      </div>
      <div class="footer-box">
        <pageFooter v-show="scrollNumber>360"></pageFooter>
      </div>
    </div>

  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";

export default {
  name: "rainbowIslandPage",
  components: {pageFooter},
  data(){
    return{
      scrollNumber:0,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods: {
    openDiagram() {
      let path = this.$router.resolve({path: '/diagram', query: {}})
      window.open(path.href, '_bank')
    },
    handleScroll () {
      this.scrollNumber = document.documentElement.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
.rainbow-island {
  background: url("../../assets/imgs/isLand_bg.png") no-repeat !important;
  background-size: 100% auto!important;

  .title {
    height: 190px;
    text-align: center;

    img {
      margin-top: 30px;
      width: 460px;

    }
  }
}
</style>
