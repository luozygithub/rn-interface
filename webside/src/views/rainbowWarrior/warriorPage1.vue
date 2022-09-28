<template>
  <div class="warrior-page1">
    <div class="page-header animate__animated" :class="{'animate__fadeInUp':isUp, 'animate__fadeInDown':!isUp}">
      <div class="page-header-name">
        RAINBOW WARRIOR
      </div>
    </div>
    <div class="page-content" @wheel.stop>
      <div class="title">
        A new civilization after 2012 in the Mayan prophecy
      </div>
      <div class="warrior-part1">
        <img class="warrior" src="../../assets/imgs/warrior.png" alt="">
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
        In a long time ago, the Mayans in America had incredible foreseeing what would happen in human society today.
        This is the prediction of the "great cycle" described in the Mayan sacred calendar "Zhujin Li". The “Great
        Cycle” refers to the period of time from 3113 BC to 2012 during the 5,125 earth-year historical period, when the
        earth and the solar system are in motion. Pass a beam of galactic rays from the core of the galaxy. At the same
        time, it is predicted that in the last two decades of the "Great Cycle"-the Earth Regeneration Period (Earth
        Regeneration Period) from 1992 to 2012, humans will have two major events-emergence of energy and the universe
        The new human beings who resonate and awaken are also the purification and regeneration of the earth. During the
        renewal period, the earth will be purified, including human hearts, corrupted substances will be eliminated and
        eliminated, and good and healthy ones will be left behind and eventually synchronized with the Milky Way. The
        Mayans believe this is the movement of the Milky Way. An inevitable law, it is as irresistible as the
        alternation of the four seasons on earth. After the renewal period, the earth will go out of the scope of the
        galactic rays, and the entire solar system will enter the predicted new stage of assimilation of the Milky Way
        (Galatic Synchronization), and mankind will enter another new civilization. The Maya’s "Earth’s end" does not
        mean that the planet Earth will be destroyed, but that the end of the third-dimensional earth is about to come,
        that is, the earth will ascend from the third dimension to the fourth and fifth dimensions, and the earth will
        be With the emergence of new human beings that can resonate and awaken with cosmic consciousness, human
        spirituality or cosmic consciousness will reach a higher dimension, human beings will be awakened and promoted
        in spirit and consciousness, and the earth itself will be purified and regenerated. The current earth has always
        been the third dimension. After 2012, the earth’s magnetic field will be ascended and gradually enter the fourth
        dimension, which is equal to three-dimensional space + one-dimensional time. The third dimension is the space in
        which we live, and the fourth dimension refers to the addition of the time axis. Under the gravitational force
        of the earth and other large planets or stars, space-time will bend. In this way, the three-dimensionality
        cannot be expressed, and the four-dimensionality must be used. . According to the Maya’s long calendar (Long
        Count Calendar), December 21, 2012 will be the end of human civilization, but this end is not another end of the
        world. Mankind will enter a new civilization, and this civilization is not Was Satoshi Nakamoto established a
        new digital bit civilization through the creation of Bitcoin?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "warriorPage1"
}
</script>

<style lang="scss" scoped>
.warrior-page1 {
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
    .warrior-part2{
      margin-top: 60px;
    }
  }
}
</style>
