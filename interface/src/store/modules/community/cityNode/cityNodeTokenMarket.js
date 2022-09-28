import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('CityNodeTokenMarket', rootState.app.web3)
    if (!state.RbtCityNode) state.RbtCityNode = getContract.getContractByName('RbtCityNode', rootState.app.web3)
}

const state = {
    token: null,
    RbtCityNode:null,
    marketTokenArr: [],
    cityNodeArr:[]
}

const mutations = {
    SET_MARKETTOKENARR: (state, arr) => {
        state.marketTokenArr = arr
    },
    SET_CITYNODEARR(state, arr){
        state.cityNodeArr = arr
    }
}
const actions = {
    async getCityTokens({rootState,commit,dispatch}){ // 获取城市节点令牌
        judgeToken(rootState)
        await dispatch("erc721/getTokenIdArr", { coinName:"RbtCityNode"}, {root:true})

        let arr = []
        let cityNodeArr = rootState.erc721.RbtCityNodeArr
        console.log(rootState.erc721.RbtCityNodeArr)
        for(let i=0;i<cityNodeArr.length;i++){
            await state.RbtCityNode.methods.CityNodeInfo(cityNodeArr[i]).call().then(async res=>{
                let creatorName,ownerName
                await dispatch("rainbow/getUser", res.creator, {root: true}).then(userInfo => {
                    creatorName=userInfo.nickname
                })
                await dispatch("rainbow/getUser", res.owner, {root: true}).then(userInfo => {
                    ownerName=userInfo.nickname
                })
                if(res.tokenId>0){
                    arr.push({
                        tokenId: res.tokenId,
                        locked:res.locked,
                        creator:res.creator,
                        crtTime:res.crtTime,
                        governTokenId:res.governTokenId,
                        owner:res.owner,
                        creatorName,
                        ownerName,
                        tokenType:res.tokenType
                    })
                }

            })
        }
        commit("SET_CITYNODEARR",arr)
    },

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
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            for (let i = 0; i < params.length; i++) {
                state.token.methods.sell(params[i].tokenId, rootState.app.web3.utils.toWei(params[i].price)).estimateGas({
                    from: rootState.app.account,
                }).then(gas => {
                    state.token.methods.sell(params[i].tokenId, rootState.app.web3.utils.toWei(params[i].price)).send({
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
    async sellRecords({rootState, dispatch, commit}) { // 所有在售令牌
        judgeToken(rootState)

        state.token.methods.getRecordLength().call().then(length => {
            let marketRecords = []
            for (let i = 0; i < length; i++) {
                state.token.methods.sellRecords(i).call().then(record => {
                    dispatch("rainbow/getUser", record.owner, {root: true}).then(user => {
                        if(record.tokenId>0){
                            console.log(marketRecords)
                            marketRecords.push({
                                addressGovernanceToken: record.addressGovernanceToken,
                                creationTime: record.creationTime,
                                owner: record.owner,
                                ownerName: user.nickname,
                                price:  rootState.app.web3.utils.fromWei(record.price),
                                tokenId: record.tokenId
                            })
                        }

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
