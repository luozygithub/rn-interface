import {getUserPurchase} from "../../../api/test";

let state = {
    owner: '',
    curRate: 20,
    tableData: null,
    token: null,
    digOutAmount: 0,
    allAmount:0,
    allRbdAmount:0,
    records:[],
    getRbtRecord:{
        allRbt:0,
        extractable:0,
        lockNum:0,
    },
    allRbt:0,//我的总兑换
    extractable:0,//我的待提取
}



const mutations = {
    SET_RECORDS(state, array) {
        state.records = array
    },
    SET_RECOROBJ(state, param) {
        state.getRbtRecord = param
    },

}
const actions = {
   async getinfo({commit}) {
        await getUserPurchase().then(res=>{
           commit("SET_RECORDS",res)
       })
   },

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
