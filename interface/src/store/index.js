import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";
import rainbow from "./modules/rainbow";
import abisMethods from "./modules/abisMethods/index"
import community from "./modules/community"
import centerBank from "./modules/centerBank"
import erc20 from "@/store/modules/token/erc20";
import erc721 from "@/store/modules/token/erc721";
import vip from "@/store/modules/vipCenter/index";
import incomeSource from "@/store/modules/income/incomeSource.js"
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    rainbow,
    ...abisMethods,
    ...community,
    ...centerBank,
    erc20,
    erc721,
    ...vip,
    incomeSource
  }
})
