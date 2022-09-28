import getContract from '@/utils/abiUtil'




function judgeToken(rootState){
	if (!state.token) state.token = getContract.getContractByName('Invite',rootState.app.web3)
}
const state = {
   owner:'',
   token: null,
   digOutAmount:0,
    records:[]
}


const mutations = {
    SET_DIGOUTAMOUNT(state,value){
        state.digOutAmount = value
    }
}


const actions = {
    getRBT({rootState}, amount) {
		judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getRBT(rootState.app.web3.utils.toWei(amount)).estimateGas({from:rootState.app.account}).then(gas=>
				state.token.methods.getRBT(rootState.app.web3.utils.toWei(amount)).send({
					from: rootState.app.account,
					gas:gas
				}).then(res=>resolve(res))
				.catch(err=>reject(JSON.parse(err.message.substr(24,err.message.length)).message)))
                .catch(err=>reject(JSON.parse(err.message.substr(24,err.message.length)).message))
        })
    },


    async getSubData({state, commit,rootState}) {
        judgeToken(rootState)
        await state.token.methods.digOutAmount().call().then(res => {
            commit("SET_DIGOUTAMOUNT", res / 10 ** 18)
        })
    }


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
