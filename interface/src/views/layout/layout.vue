<template>
  <div :class="classObj" class="layout">
    <Sidebar class="sidebar-container"/>
    <div class="layout-main-container">
      <RainbowHeader/>
      <div class="layout-content-box">
        <router-view/>
      </div>
      <RainbowFooter/>
    </div>
  </div>
</template>

<script>

import Sidebar from "../../components/Sidebar/index"
import RainbowHeader from "@/components/RainbowHeader";
import RainbowFooter from "@/components/RainbowFooter";
import {mapGetters} from 'vuex'

export default {
  name: "layout",
  components: {
    Sidebar,
    RainbowHeader,
    RainbowFooter
  },
  data() {
    return {}
  },
  watch: {
    $route(to) {
      console.log(to)
    },
    isConnected() {
      if (this.isConnected) {
        // this.getCommonBalance()
      }
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    classObj() {
      return {
        hideSidebar: !this.$store.state.app.sidebar.opened,
        openSidebar: this.$store.state.app.sidebar.opened,
      }
    },
  },
  created() {
    if (this.isConnected) {
      // this.getCommonBalance()
    }
  },
  methods: {
    async getCommonBalance() {
      let rbd, rbt, rbtex, rbtseed;
      await this.$store.dispatch("ERC20Orchestrator/init").then(address => rbd = address)
      await this.$store.dispatch("ERC20Orchestrator/init").then(address=>rbtex=address)
      await this.$store.dispatch("ERC20Orchestrator/init").then(address=>rbt=address)
      await this.$store.dispatch("ERC20Orchestrator/init").then(address=>rbtseed = address)
      console.log(rbd, rbt, rbtseed, rbtex)
    }
  }
}
</script>

<style lang="scss" scoped>

.layout {
  height: 100%;

  .layout-main-container {
    min-width: 1000px;
    min-height: 100%;
    background: url("../static/img/bg.png");
    background-size: auto;
    .layout-content-box {
      min-height: calc(100vh - 330px);
    }
  }
}
</style>
