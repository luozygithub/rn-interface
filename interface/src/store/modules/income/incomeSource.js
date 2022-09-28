
import {receiveList} from "@/api/receive"
import {userReceiveWeekList} from "@/api/receive"
import {userReceiveMonthList} from "@/api/receive"

const state = {
    contract_name:"",
    token_address:"",
    source:"",
    monthAmount:0,
    weekAmount:0,
    receives: [],
    
}
const mutations = {
    SET_RECEIVELIST: (state, arr) => {
        state.receives = arr
    },
    SET_MONTHRECEIVELIST: (state, arr) => {
        state.monthAmount = arr
    },
    SET_WEEKRECEIVELIST: (state, arr) => {
        state.weekAmount = arr
    },
   
}
const actions = {
  async getReceiveList({commit},{tokenAddress,source}){
    
    await receiveList({
        tokenAddress,
        source
    }).then(res=>{
        commit("SET_RECEIVELIST",res)
    })
  },
  async getWeekReceiveList({commit},{tokenAddress,source}){
    
    await userReceiveWeekList({
        tokenAddress,
        source
    }).then(res=>{
        commit("SET_WEEKRECEIVELIST",res)
    })
  },
  async getMonthReceiveList({commit},{tokenAddress,source}){
    
    await userReceiveMonthList({
        tokenAddress,
        source
    }).then(res=>{
        commit("SET_MONTHRECEIVELIST",res)
    })
  },
  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
