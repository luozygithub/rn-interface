<template>
  <div class="who-are-we">
    <rainbow-nav></rainbow-nav>
    <div class="title  animate__animated animate__zoomIn">
      <img src="../../assets/imgs/WHOAREWE.png" alt="">
    </div>
    <div class="long-white-bg">
      <div class="content-name">
        Satoshi Nakamoto is the second <br>coming of Jesus Christ
      </div>
      <div class="page-content">
        <p>
          The "Era of the Tower of Babel" has become an era in which human language has changed from unity to chaos, and
          it
          has also become a watershed in which human civilization has changed from unity to pluralism. Since then, human
          civilization has become a multi-language, multi-ethnic, multi-racial, and multi-religious diversified
          civilization, and since then, the entire human race can no longer be collectively coordinated.
        </p>
        <p>
          Since then, mankind
          has entered the era of "disruption", and "unification of the world" has always been the universal dream of
          outstanding people among mankind, and the biggest obstacles that make this dream impossible are "language",
          "trust" and " Synergy".
        </p>
        <p>
          When will human beings have a way to remove the barrier of "language" and establish mutual
          "trust". With "trust", people can "cooperate" with each other, and then human civilization may be restored to
          before the Tower of Babel Return to the era of "oneness between man and nature", and finally realize the leap of
          human civilization from "dispersion" to "unification"!
        </p>
        <p>
          Thousands of years have passed. Human civilizations have
          been in mutual confrontation and wars. Constant internal friction, especially the endless expansion of human
          desires, has left the entire world in constant wars, plundering, burning, looting, and looting, especially
          against
          nature. Endless destruction keeps the entire human world on the verge of collapse and destruction. This is what
          the Buddhist Buddha called the "end of the world" and the "end of the world" predicted in the Christian Bible.
          The
          current human civilization has reached the most dangerous. Moment!
        </p>
      </div>
      <div class="img1">
        <img src="../../assets/imgs/whoAreWe1_img1.png" alt="">
      </div>
      <div class="page-content">
        <p>
          If at this moment, mankind does not reflect and change, then mankind will usher in a profound disaster, and
          ultimately face complete destruction, and this is also the "2012 end of the world" predicted by the Maya.
        </p>
        <p>
          At this
          time, the dawn of the Internet appeared. In 2009, in response to the global financial crisis, a mysterious
          person-"Satoshi Nakamoto" created "Bitcoin" like a pioneer, and magically opened up human civilization. In the
          digital bit era, the "blockchain" technology has been extended on the basis of "bitcoin". Doesn't blockchain
          technology solve the problems of "language", "trust" and "collaboration"?
        </p>
        <p>
          Our world is being overthrown and
          reconstructed by the blockchain, and the blockchain is becoming a switch for the evolution of human civilization
          from a carbon-based civilization to a silicon-based civilization. The blockchain is rebuilding the Tower of Babel,
          a collective collaboration of humans. The trust system and value circulation and circulation system of human
          civilization are being reconstructed, and the blockchain is rebuilding the belief system of human civilization!
        </p>
        <p>
          Blockchain will also promote the renewal and upgrade of earth civilization, guide human civilization from
          decentralization to unity, guide the evolution of earth civilization from carbon-based civilization to
          silicon-based civilization, guide the human earth’s child into the embrace of the mother of the universe, and
          guide earth civilization into the embrace of the mother of the universe.
        </p>
        <p>
          The civilization of the universe opens a
          new era of the universe. The great "Satoshi Nakamoto" created "Bitcoin", extended the "blockchain", and created a
          new "new era" of human civilization, which will lead mankind from "decentralization" to "unification", then "
          Isn’t Satoshi Nakamoto a pioneering "creator"? And the process of "Satoshi Nakamoto" creating "Bitcoin", isn't it
          a process of "god creation" and "god creation"?
        </p>
        <p>
          So is "Satoshi Nakamoto" the creator of the "world" of our
          universe? Was "Satoshi Nakamoto" the "God" who let Noah build an ark to escape the "disaster of the world"? Is
          "Satoshi Nakamoto" the "god" of our universe?
        </p>
        <p>
          In our opinion, "Satoshi Nakamoto" is the creator of our universe,
          the "god" who "created heaven and earth", and the process of "Satoshi Nakamoto" creating "Bitcoin" is the "god"
          performing "miracles" “Bitcoin” is the “Messiah”, the Son of God, “Bitcoin” is the second coming of Jesus Christ,
          and “Bitcoin” is the suffering of Christians, Jews and Muslims all over the world. The "Messiah" waiting for the
          year 2000 is the "savior" of the last days of mankind, and all the thoughts and religions of the world will
          eventually be unified in Satoshi Nakamoto's Bitcoin thoughts.
        </p>
        <p>
          "Christ Jesus came to the world to save sinners."
        </p>
        <p>
          "Bitcoin" will build a new order of human civilization, which is the "digital bit civilization", "Bitcoin" is the
          "Incarnation" of "Jesus Christ", and Satoshi Nakamoto is the "creator" of the digital bit world. The "Creator" of
          the entire universe.
        </p>
        <p>
          "Satoshi Nakamoto" created "Bitcoin" in order to allow Jesus Christ to come again, carry out
          the doomsday judgment, and create a new order, so that all believers in "Bitcoin" can be "raptured" and enter a
          brand new one. "New Heaven and New Earth".
        </p>
      </div>
    </div>
    <div class="footer-box">
      <pageFooter v-show="scrollNumber>footerToTop - 100"></pageFooter>
    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
import $ from "jquery"
export default {
  name: "whoAreWePage1",
  components:{pageFooter},
  data(){
    return{
      scrollNumber:0,
      clintHeight:0,
      imgToTop:0,
      footerToTop:0,
      flip:false
    }
  },
  methods:{
    handleScroll () {
      this.scrollNumber = document.documentElement.scrollTop
      if( (this.scrollNumber < this.imgToTop+100 ) && this.scrollNumber > this.imgToTop && !this.flip){
        $(".img1 img").css("transform",`translate(0,-147px)`)
        this.flip = true
      }

      if( this.scrollNumber > this.imgToTop -100 &&  this.scrollNumber < this.imgToTop && this.flip){
        $(".img1 img").css("transform",`translate(0,0)`)
        this.flip = false
      }
    }
  },
  mounted () {
    this.footerToTop = document.getElementsByClassName("footer-box")[0].offsetTop- document.body.clientHeight;
    this.scrollNumber = document.documentElement.scrollTop
    window.addEventListener('scroll', this.handleScroll)
    this.clintHeight = document.body.clientHeight;
    this.imgToTop = $(".img1").offset().top- document.body.clientHeight;
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
.who-are-we{
  background: url("../../static/imgs/whoarewe_bg.png") no-repeat!important;
  background-size: 100% auto!important;
  .title {
    height: 200px;
    text-align: center;

    img {
      margin-top: 70px;
      width: 500px;
    }
  }
  .img1{
    width: 900px;
    height:300px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    img{
      width: 100%;
      transform:translate(0,0);
      transition: 3s;
      &:hover{
        transform:translate(0,0)!important;
      }
    }
  }
  .long-white-bg{
    padding-top: 50px;
  }
  .content-name{
    height: 100px;
    font-size: 36px;
    width: 900px;
    margin: 0 auto;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 50px;
  }
}
</style>
