import getContract from '@/utils/abiUtil'
import addressJson from "@/utils/address.json"
const state={
    token:new Map(),
    USD: null,
    RBTSeed: null,
    RBD:0,
    RBT: 0,
    RBTEx:0,
}
const mutations = {
    SET_COIN(state,{coinName,value}){
        state[coinName] = value
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
        judgeToken(rootState,coinName)
        return new Promise((resolve, reject) => {
            state.token[coinName].methods.balanceOf(owner).call( (err, res) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
                commit("SET_COIN",{ coinName,value:rootState.app.web3.utils.fromWei(res)})
                resolve(rootState.app.web3.utils.fromWei(res));
            })
        })
    },
    allowance({rootState},{owner,coinName,contractName}){
        owner?owner:rootState.app.account
        judgeToken(rootState,coinName)
        return new Promise((resolve, reject) => {
           console.log(addressJson)
            state.token[coinName].methods.allowance(owner,addressJson[contractName]).call({from:rootState.app.account}, (err,) => {
                console.log(err)
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
            }).then(res=>{
                resolve(res)
            })
        })
    },
    approve({rootState},{coinName,contractName,amount}){
        judgeToken(rootState,coinName)
        return new Promise((resolve, reject) => {
            state.token[coinName].methods.approve(addressJson[contractName],rootState.app.web3.utils.toWei(amount)).estimateGas({
                from:rootState.app.account
            }).then(gas=>{
                state.token[coinName].methods.approve(addressJson[contractName],rootState.app.web3.utils.toWei(amount)).send({
                    from:rootState.app.account,
                    gas
                }).on('error',(err)=>{
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }).then(res=>{
                    console.log(res)
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
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

