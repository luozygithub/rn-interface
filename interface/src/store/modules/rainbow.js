
const state = {
    nickName:'',
    referrerAddress: '',
    referrerId: 0,
    token: null,
    isRegister:false,
    navName:'',
    country:'',
    city:'',
    area:'',
    role:0,
    myInvitationArr:[],//我邀请的人
    btcPrice:"",
    ethPrice:""
}
const mutations = {
    SET_PRICE(state, {name,price}) {
        state[name] = price
    }
}
const actions={

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
