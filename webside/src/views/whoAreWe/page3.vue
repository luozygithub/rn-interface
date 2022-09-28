<template>
  <div class="page3">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        WHO ARE WE
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        The "awakening" of mankind and the mission of Rainbow City
      </div>

      <div class="content">
        Under the guidance of Eastern Chinese traditional culture and philosophy, "Rainbow City" will be integrated into
        the Western religious belief system and philosophical cultural system, combined with the true Satoshi Nakamoto
        spirit and Nakamoto thought, and establish a new set of thoughts and doctrines. Academic theory, creating a new
        set of guiding ideology, and then preaching for "Satoshi Nakamoto", preaching for "Bitcoin", preaching for
        "blockchain", and preaching for the traditional culture of Eastern China. "Rainbow City" will, under the
        guidance of Eastern China Culture, take the real Bitcoin concept as the core idea, and use blockchain technology
        as the underlying technology to explore the "token economy" and "community governance", and establish a brand
        new Human civilization digital bit city-states, reconstruct the new order of earth civilization, build a
        community with a shared future for mankind, seek universal unity, and recreate the universe. "Rainbow City"
        will, through its own exploration and practice, promote the reconstruction of the earth value belief system,
        promote the renewal and upgrade of the earth civilization, guide the evolution of human civilization from a
        carbon-based civilization to a silicon-based civilization, and guide mankind to attribute the earth’s original
        child to the mother of the universe The embrace of the earth, leading the earth civilization into the cosmic
        civilization, opening a new era of the universe. Under the guidance of the new ideological system, the earth
        will be formatted by the blockchain, and the earth civilization will be purified and regenerated. The earth will
        give birth to new human beings who can resonate and awaken with the consciousness of the universe, and the
        spirituality or consciousness of the universe will reach a level. In higher dimensions, human beings will be
        awakened and improved in spirit and consciousness. In such an environment, everyone can gain Dao, everyone can
        become heaven, everyone can become god, everyone can become holy, everyone can become Buddha, and everyone can
        cultivate into righteousness. This is " The mission of "Rainbow City". The establishment of "Rainbow City" is to
        explore a new set of social governance order and distribution relationship based on the digital bit
        civilization, regardless of country, region, religion, culture, race, ethnicity, or ethnicity. Skin color allows
        people in different parts of the world to participate in the construction of the same economy, rebuild the
        global coordination system of humans around the world, rebuild the global belief system, and re-establish the
        global value circulation, circulation and distribution system.
      </div>
      <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
export default {
  name: "page3",
  components:{
    pageFooter
  }
}
</script>

<style lang="scss" scoped>
.page3 {
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


    .content {
      margin-top: 30px;
    }
  }
}
</style>
