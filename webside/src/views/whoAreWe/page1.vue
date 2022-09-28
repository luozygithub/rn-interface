<template>
  <div class="page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        WHO ARE WE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        Satoshi Nakamoto is the second coming of Jesus Christ
      </div>
      <div class="warrior-part1">
        <img class="warrior" src="../../assets/imgs/BTC_ball.png" alt="">
        <div class="warrior-shadow"></div>
        <div class="warrior-part1-intro">
          Whenever we mention the "Mayan prophecy", we will think of 2012 and we will think of "the end of the world",
          but as of today, it is already 2020. Is the "end of the world" coming? In fact, most of us have
          misunderstandings about Mayan prophecies. The Mayan prophecy says that 2012 is not the destruction of the
          world, but the demise of the old human civilization and the birth of a new civilization. The "Rainbow City"
          believes that Satoshi Nakamoto created bitcoin and digital bitcoin. The birth of civilization is the origin of
          the birth of a new human civilization.
        </div>
      </div>
      <div class="warrior-part2">
        God changed and distinguished the language of mankind, making human beings unable to coordinate due to language
        barriers, which made it impossible to build the Tongtian Pagoda together. Therefore, the Tongtian Pagoda was
        abandoned halfway, and human civilization changed from unity to dispersion, from unity to pluralism. Then
        collectively collaborate. Through thousands of years of evolution, human civilization is still struggling to
        disperse and collapse, and earth civilization is also on the verge of collapse. Our "creator" couldn't bear to
        look at such internal friction and strife as human beings, so he became "Satoshi Nakamoto". Performing
        "miracles" created "Bitcoin", turning God's way into a "Bitcoin flesh", thus opening the doomsday judgment and
        opening a new era of civilization. "Satoshi Nakamoto" intuitively demonstrated the "law of creation" to humans
        through mathematics and cryptography, and established "machine trust" through blockchain technology, thus
        opening up the "digital bit era" of human civilization. We come from different parts of the world. We have
        different skin colors, different ethnicities, and different races, but we have a common identity. We are all
        believers of Satoshi Nakamoto, and we are all evangelists and followers of Bitcoin. In this era of great
        civilization upgrading and transformation, we decided to continue preaching for the "creator" of the universe
        Satoshi Nakamoto. We decided to use the "rainbow" as the symbol to sign the "Rainbow Covenant" with God again.
        We want to build a "Rainbow City" and a "City of Faith" where "Bitcoin" believers from all over the world
        gather. "City", "City of Civilization", "City of Ideas", we want to create a "spiritual home" shared by Bitcoin
        believers all over the world. This time we are not going to preach the name of human beings, but to preach the
        name of "Satoshi Nakamoto", the "creator" of the bit world, but to preach the name of "Bitcoin" and the name of
        "Blockchain"! A cycle in ten years, at the eleventh anniversary of the birth of Bitcoin, we have launched an
        epic blockchain project-"Rainbow City"! We will re-sign the "Rainbow Covenant" with God under the banner of
        "Rainbow", under the name of "Rainbow", and use "Rainbow" as evidence, and create a "Rainbow City" with the
        trust of machines and codes, and let mankind return again. On the road of harmonious development with heaven and
        nature, we will build a new human civilization together. "Rainbow City" is a bit civilized digital city-state
        based on "token economy" and "community governance". "Rainbow City" is a distributed autonomous community
        organization and a blockchain DAO organization. "Rainbow City" will be To create an independent public chain
        based on the idea of ​​token economy as the core, "Rainbow City" will explore the new order of human
        civilization with blockchain as the underlying technology. The "Rainbow City" will be built into a "City of
        Faith", a "City of Consensus", a "City of Trust", a "City of Fairness", and a "City of Freedom" , Build into a
        “Technology City”, Build into a “Green City”, Build a “Financial City”, Build a “Smart City”, Build a
        “Mathematics City”, Build a “City of Mathematics” Build a Philosophy City, build it into a “City of Thoughts”,
        build a “City of Culture”, build a “Civilized City”, build a “City of Spirits”, "Rainbow City" will be built as
        the "New Jerusalem" for all blockchain enthusiasts and Bitcoin believers in the world, together to build the
        "new heaven and new earth" of human civilization, and the "Eden" of digital bit civilization.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1"
}
</script>

<style lang="scss" scoped>
.page1 {
  width: 100%;
  height: 100%;

  .page-content {
    overflow: auto;

    .title {
      color: #db1f7e;
      font-weight: 700;
      line-height: 25px;
      padding-bottom: 10px;
    }

    .warrior-part1 {
      position: relative;
      display: flex;

      .warrior {
        width: 360px;
      }

      .warrior-shadow {
        position: absolute;
        left: 60px;
        top: 40px;
        z-index: -1;
        width: 320px;
        height: 240px;
        border: 20px solid rgba(172, 167, 167, 0.3);
      }

      .warrior-part1-intro {
        padding: 20px 0 20px 46px;
        height: 260px;
      }
    }

    .warrior-part2 {
      margin-top: 60px;
    }
  }
}
</style>
