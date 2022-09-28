import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('RBTDeposit', rootState.app.web3)
}

const state = {
    owner: '',
    bankTokenArr: [],
    expiredBankTokenArr:[],
}

const mutations = {
    SET_BANKTOKENARR(state, arr) {
        state.bankTokenArr = arr
    },
    SET_EXPIREDBANKTOKENARR(state, arr) {
        state.expiredBankTokenArr = arr
    }
}
const actions = {
    async getDepositList({commit, rootState ,dispatch}, userAddress) {
        userAddress ? '' : userAddress = rootState.app.account
        judgeToken(rootState)
        await state.token.methods.recordingLength().call(async function (err, recordingLength) {

            let userDeposits = [],expiredDeposits = []
            for (let i = 0; i < recordingLength; i++) {
                await state.token.methods.recordingArr(i).call(async function (err, res) {
                    if (String(res.owner).toUpperCase() == String(userAddress).toUpperCase()) {
                        let firstOwnerName,  ownerName
                        await dispatch("rainbow/getUser",res.firstOwner,{root: true}).then(async user=>{
                            firstOwnerName =  user.nickname
                            await dispatch("rainbow/getUser",res.owner,{root: true}).then(user=>{
                                ownerName =  user.nickname
                                let token = {
                                    tokenId: res.tokenId,
                                    creationTime: res.creationTime,
                                    expireTime: res.expireTime,
                                    usedAmount: rootState.app.web3.utils.fromWei(res.usedAmount),
                                    owner: res.owner,
                                    firstOwner: res.firstOwner,
                                    firstOwnerName,
                                    ownerName,
                                    mortgageAmount: rootState.app.web3.utils.fromWei(res.mortgageAmount),
                                    mortgageMonth: res.mortgageMonth
                                }
                                userDeposits.push(token)
                                if(res.expireTime - (new Date().getTime()/1000)<0){
                                    expiredDeposits.push(token)
                                }
                            })
                        })
                    }
                })
            }
            commit("SET_BANKTOKENARR", userDeposits)
            commit("SET_EXPIREDBANKTOKENARR", expiredDeposits)
        });

    },
};
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
