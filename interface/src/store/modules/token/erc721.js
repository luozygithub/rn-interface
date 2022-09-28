import getContract from '@/utils/abiUtil'
const state={
    token:new Map(),
    USD: 0,
    RBTVIP:0,
    RbtCityNodeArr:[]
}
const mutations = {
    SET_COIN(state,{coinName,value}){
        state[coinName] = value
    },
    SET_COINARR(state,{coinName,arr}){
        state[coinName+'Arr'] = arr
    }
}

function judgeToken(rootState,coinName) {
    if (!state.token[coinName]) state.token[coinName] = getContract.getContractByName(coinName, rootState.app.web3)
}


const actions = {

    getBalanceOf({rootState,commit},{owner,coinName}){
        if(!owner){
            owner = rootState.app.account
        }
        judgeToken(rootState, coinName)
        console.log(coinName)
        return new Promise((resolve, reject) => {
            state.token[coinName].methods.balanceOf(owner).call( (err, res) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
                commit("SET_COIN",{coinName,value:res})
                resolve(res);
            })
        })
    },
    tokenOfOwnerByIndex({rootState},{owner,index,coinName}){
        if(!owner){
            owner = rootState.app.account
        }
        judgeToken(rootState,coinName)
        return new Promise((resolve) => {
            state.token[coinName].methods.tokenOfOwnerByIndex(owner, index).call().then(res => {
                resolve(res)
            })
        })
    },
    allowance({rootState},{coinName ,tokenId ,contractName}){
        judgeToken(rootState,coinName)
        return new Promise((resolve, reject) => {
            state.token[coinName].methods.getApproved(tokenId).call({from:rootState.app.account}, (err,) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
            }).then(res=>{
                resolve(res == getContract.CONTRACTS[contractName].address)
            })
        })
    },
    approve({rootState},{coinName,contractName,tokenId}){
        judgeToken(rootState,coinName)
        return new Promise((resolve, reject) => {
            state.token[coinName].methods.approve(getContract.CONTRACTS[contractName].address,tokenId).estimateGas({
                from:rootState.app.account
            }).then(gas=>{
                state.token[coinName].methods.approve(getContract.CONTRACTS[contractName].address,tokenId).send({
                    from:rootState.app.account,
                    gas
                }).on('error',(err)=>{
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }).then(res=>{
                    resolve(res)
                })
            })
        })
    },
    getPastEvents({rootState},{coinName}){
        judgeToken(rootState,coinName)
        return new Promise((resolve) => {
            state.token[coinName].getPastEvents('Transfer', {
                filter: {_from: rootState.app.account},
                fromBlock: 0,
                toBlock: 'latest'
            }, (error, events) => { resolve(events) });
        })
    },
    async getTokenIdArr({rootState,dispatch,commit},{coinName}){
        judgeToken(rootState,coinName)
        await dispatch("getBalanceOf",{coinName}).then(async length=>{
            let idArr = []
            for(let i=0;i<length;i++){
                await dispatch("tokenOfOwnerByIndex",{index:i,coinName}).then(id=>{
                    idArr.push(id)
                })
            }
            commit("SET_COINARR", {
                coinName,
                arr:idArr
            })
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

