import {apivipList} from "@/api/rbtVip"
import {queryHisRecord} from "@/api/rbtVip"



const state = {
    owner: '',
    records: [3,4,5],
    level: 0,
    vipTokenArr: [], //我所有的VIP令牌
    vipExpiredTokenArr:[{creatorName:"11111111",ownerName:"jt"},{creatorName:"11111111",ownerName:"jt"},{creatorName:"11111111",ownerName:"jt"},{creatorName:"11111111",ownerName:"jt"}], //我所有过期的令牌
    sellTokenArr: [{creatorName:"11111111",ownerName:"jt"},{creatorName:"11111111",ownerName:"jt"}],
    transferRecordArr:[],
}
const mutations = {
    SET_RECORDS: (state, rate) => {
        state.records = rate
    },
    SET_LEVEL(state, level) {
        state.level = level
    },
    SET_VIPTOKENARR(state, arr) {
        state.vipTokenArr = arr
    },
    SET_VIPExpiredTOKENARR(state, arr) {
        state.vipExpiredTokenArr = arr
    },
    SET_SELLTOKENARR(state, arr) {
        state.sellTokenArr = arr
    },
    SET_TRANSTERRECORDARR(state, arr) {
        state.transferRecordArr = arr
    },
}
const actions = {
  getVipRecord({commit}){
    apivipList().then(res=>{
        commit("SET_VIPTOKENARR",res)
    })
  },
  getTransferRecord({commit},tokenId){
    return new Promise(resolve=>{
        queryHisRecord({tokenId:tokenId}).then(res=>{
            commit("SET_TRANSTERRECORDARR",res)
            resolve(res)
        })
    })
  },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
