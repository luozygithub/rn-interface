import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('GovernanceTokenMarket', rootState.app.web3)
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
    applyNode({rootState}, params){ // 社区令牌 申请城市节点
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
                let arg = [params.tokenId, params.token, params.amount]
                state.token.methods.applyNode(...arg).estimateGas({
                    from: rootState.app.account,
                }).then(gas => {
                    state.token.methods.applyNode(...arg).send({
                        from: rootState.app.account,
                        gas: parseInt(gas * 1.2)
                    }).then(res => {
                        resolve(res)
                    })
                }).catch(err=>{
                    console.log(err)
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                })

        })
    },
    async sell({rootState}, params) {  //出售令牌
        // let arr1=[],arr2=[],arr3=[]
        // params.forEach(item=>{
        //     arr1.push(item.tokenId)
        //     arr2.push(item.price)
        //     arr3.push(item.token)
        // })
        // console.log(arr1,arr2,arr3)
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            for (let i = 0; i < params.length; i++) {

                state.token.methods.sell(params[i].tokenId, rootState.app.web3.utils.toWei(params[i].price), params[i].token).estimateGas({
                    from: rootState.app.account,
                }).then(gas => {
                    state.token.methods.sell(params[i].tokenId, rootState.app.web3.utils.toWei(params[i].price), params[i].token).send({
                        from: rootState.app.account,
                        gas: parseInt(gas * 1.2)
                    }).then(res => {
                        resolve(res)
                    })
                }).catch(err=>{
                    console.log(err)
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                })
            }
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
                console.log(err)
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })

        })
    },
    async sellRecords({rootState, dispatch, commit}) { //所有在售令牌
        judgeToken(rootState)

        state.token.methods.getRecordLength().call().then(length => {
            let marketRecords = []
            for (let i = 0; i < length; i++) {
                state.token.methods.sellRecords(i).call().then(record => {
                    dispatch("rainbow/getUser", record.owner, {root: true}).then(user => {
                        marketRecords.push({
                            addressGovernanceToken: record.addressGovernanceToken,
                            creationTime: record.creationTime,
                            owner: record.owner,
                            ownerName: user.nickname,
                            price: rootState.app.web3.utils.fromWei(record.price),
                            tokenId: record.tokenId
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
