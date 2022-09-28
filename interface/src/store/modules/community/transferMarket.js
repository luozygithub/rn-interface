import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('TransferMarket', rootState.app.web3)
}

const state = {
    token: null,
    marketTokenArr: []
}

const mutations = {
    SET_MARKETTOKENARR: (state, arr) => {
        state.marketTokenArr = arr
    }
}
const actions = {
    async publish({rootState}, params) {  //出售令牌
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.publish(params.tokenId, rootState.app.web3.utils.toWei(params.amount)).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.publish(params.tokenId, rootState.app.web3.utils.toWei(params.amount)).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err=>{
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    async buy({rootState}, tokenId) { // 购买令牌
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.buy(tokenId).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.buy(tokenId).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err=>{
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    async sellRecords({rootState, dispatch, commit}) { //所有在售令牌
        judgeToken(rootState)
        state.token.methods.arrLength().call().then(length => {
            let marketRecords = []
            for (let i = 0; i < length; i++) {
                state.token.methods.sellRecords(i).call().then(record => {
                    dispatch("rainbow/getUser", record.owner, {root: true}).then(user => {
                        marketRecords.push({
                            creationTime: record.creationTime,
                            owner: record.owner,
                            ownerName: user.nickname,
                            price: record.price / 10 ** 18,
                            tokenId: record.tokenId,
                            id: record.id
                        })

                        if (i == length - 1) {
                            commit("SET_MARKETTOKENARR", marketRecords)
                        }
                    })
                })
            }
        })

    },
    async mySellRecords({rootState}) { // 我的所有在售令牌（还未被购买）
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.sellRecords().call().then(sellArr => {
                let tokenArr = sellArr.filter(token => {
                    return token.owner = rootState.rainbow.token
                })
                resolve(tokenArr)
            })
        })
    },
};
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
