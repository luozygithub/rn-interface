import getContract from '@/utils/abiUtil'
import addressObj from "@/utils/address.json"
let state = {
    token: null,
    elfAmount: 0,
    envoyAmount: 0,
    partnerAmount: 0,
    nodeAmount: 0,
    tokenArr: [], // 我的令牌
    expiredTokenArr:[], //过期令牌
    cityNodeTokenArr:[],//城市节点令牌
    RbtNode:null,
    RbtPartner:null,
    RbtEnvoy:null,
    RbtElf:null,
}

function judgeToken(rootState) {
    if (!state.RbtNode) state.RbtNode = getContract.getContractByAddress('Governance721',addressObj["elf"], rootState.app.web3)
    if (!state.RbtPartner) state.RbtPartner = getContract.getContractByAddress('Governance721',addressObj["envoy"], rootState.app.web3)
    if (!state.RbtEnvoy) state.RbtEnvoy = getContract.getContractByAddress('Governance721',addressObj["partner"], rootState.app.web3)
    if (!state.RbtElf) state.RbtElf = getContract.getContractByAddress('Governance721',addressObj["node"], rootState.app.web3)
}

const mutations = {
    SET_ACCOUNTS: (state, array) => {
        state.tableData = array
    },
    SET_COMMUNITYTOKENBALANCE: (array) => {
        state.elfAmount = array[0]
        state.envoyAmount = array[1]
        state.partnerAmount = array[2]
        state.nodeAmount = array[3]
    },
    SET_TOKENARR: (state,array) => {
        state.tokenArr = array
    },
    SET_EXPOREDTOKENARR: (state,array) => {
        state.expiredTokenArr = array
    },
    SET_CITYNODETOKENBALANCE: (state,array) => {
        state.expiredTokenArr = array
    },
}

async function getToken(coinName, dispatch, tokenNumArr, tokenArr) {
    await dispatch("erc721/getBalanceOf", {coinName}, {root: true}).then(async  num => {
        tokenNumArr?tokenNumArr.push(num):""
        for (let i = 0; i < num; i++) {
            await dispatch("erc721/tokenOfOwnerByIndex", {coinName, index: i}, {root: true}).then(async  id => {
                await dispatch("getTokenInfo", {coinName, index: id}).then(async token => {
                    let firstOwner = null, owner = null
                    await dispatch("rainbow/getUser", token.firstOwner, {root: true}).then(userInfo => {
                        firstOwner = userInfo
                    })
                    await dispatch("rainbow/getUser", token.owner, {root: true}).then(userInfo => {
                        owner = userInfo
                    })

                    tokenArr.push({
                        createTimes: token.createTimes,
                        expireTimes: token.expireTimes,
                        firstOwner: token.firstOwner,
                        firstOwnerName: firstOwner.nickname,
                        owner: token.owner,
                        ownerName: owner.nickname,
                        type: coinName,
                        id: token.id,
                        totalToken:token.totalToken,
                        createdToken:token.createdToken
                    })
                })
            })
        }
    })
}

const actions = {
    allowance({rootState}, {name, owner, to}) {
        if (!owner) owner = rootState.app.account
        if (!to) to = addressObj["LoanMarket"]

        judgeToken(rootState)
        return new Promise((resolve) => {
            console.log(state[name], owner, to)

            state[name].methods.allowance(owner, to).call().then(res => resolve(res))
        })
    },
    approve({rootState, dispatch}, {
        name,
        to,
        tokenId
    }){
        if (!to) to = addressObj["LoanMarket"]
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state[name].methods.approve(to,tokenId).estimateGas({from: rootState.app.account}).then(gas =>
                state.token.methods.approve(to,tokenId).send({
                    from: rootState.app.account,
                    gas: parseInt(gas*1.2)
                }).then(res => {
                    dispatch("rbtDeposit/getDepositList", null, {root: true})
                    resolve(res)
                }).catch(err => reject(JSON.parse(err.message.substr(24,err.message.length)).message))).catch(err => reject(JSON.parse(err.message.substr(24,err.message.length)).message))
        })
    },
    exchange({rootState, dispatch}, args) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.exchange(...args).estimateGas({from: rootState.app.account}).then(gas =>
                state.token.methods.exchange(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas*1.2)
                }).then(res => {
                    dispatch("rbtDeposit/getDepositList", null, {root: true})
                    resolve(res)
                }).catch(err => reject(JSON.parse(err.message.substr(24,err.message.length)).message))).catch(err => reject(JSON.parse(err.message.substr(24,err.message.length)).message))
        })
    },
    getTokenInfo({rootState}, {coinName, owner, index}) {
        if (!owner) owner = rootState.app.account
        judgeToken(rootState)
        return new Promise((resolve) => {
            state[coinName].methods.governanceTokenRecords(index).call().then(res => resolve(res))
        })
    },
    async getBalanceOf({rootState, dispatch, commit}) {
        judgeToken(rootState)
        let tokenNumArr = [], tokenArr = []
        await getToken("RBTElf", dispatch, tokenNumArr, tokenArr)
        await getToken("RBTEnvoy", dispatch, tokenNumArr, tokenArr)
        await getToken("RBTPartner", dispatch, tokenNumArr, tokenArr)
        await getToken("RBTNode", dispatch, tokenNumArr, tokenArr)

        let myTokenArr = [],expiredTokenArr = []
        for(let i =0;i<tokenArr.length; i++){
            let token = tokenArr[i]
            if((parseInt(token.expireTimes) - parseInt(token.createTimes) )<=0){
                expiredTokenArr.push(token)
            }else{
                myTokenArr.push(token)
            }
        }
        commit("SET_COMMUNITYTOKENBALANCE", tokenNumArr)
        commit("SET_TOKENARR", myTokenArr)
        commit("SET_EXPOREDTOKENARR",expiredTokenArr)
    },

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
