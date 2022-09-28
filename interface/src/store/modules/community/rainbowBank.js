import { getList } from "../../../api/rbtBank";
const state = {
    
    tokenId:'',
    depositor:'',
    month:'',
    records: [],
    amount:''
    // created_at,
    // updated_at
    
};
const mutations = {
    SET_RECORDS: (state, arr) => {
        state.records  = arr
    }
};
const actions = {
    getInfo({commit}) {
        getList().then(res=>{
            commit("SET_RECORDS",res)
        })
    }
 }
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
