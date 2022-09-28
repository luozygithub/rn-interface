import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('MortgageLoan', rootState.app.web3)
}

const state = {
    token: null,
    mortgageMarketTokenArr: [],//抵押市场令牌数组
    myMortgageArr:[],//我的抵押借款数组
    myMortgageExpiredArr: [],//我的已过期抵押借款数组
    myBorrowArr:[],//我的借款数组
}

const mutations = {
    SET_MARKETTOKENARR: (state, arr) => {
        state.mortgageMarketTokenArr = arr
    },
    SET_MYMARKETTOKENARR(state, arr){
        state.myMortgageArr = arr
    },
    SET_MYEXPIRETOKENARR(state, arr){
        state.myMortgageExpiredArr = arr
    },
    SET_MYBORROWARR(state, arr){
        state.myBorrowArr = arr
    },
}
const actions = {
    async mortgage({rootState}, params) {  // 抵押借款
        judgeToken(rootState)
        return new Promise((resolve) => {
            console.log(params)
            state.token.methods.mortgage(params.id, params.amount, params.day, params.apy).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.mortgage(params.id, params.amount, params.day, params.apy).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            });
        })
    },
    async backMortgage({rootState}, tokenId) {  // 撤销抵押借款
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.backMortgage(tokenId).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.backMortgage(tokenId).send({
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
    async lend({rootState}, tokenId) { // 出借钱
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.lend(tokenId).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.lend(tokenId).send({
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
    async liquidation({rootState}, tokenId) { // 清算
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.liquidation(tokenId).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.liquidation(tokenId).send({
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
    async repayment({rootState}, tokenId) { // 还款
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.repayment(tokenId).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.repayment(tokenId).send({
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

        state.token.methods.allRecordLength().call().then(length => {
            let marketRecords = [], myRecords=[],expiredRecords=[],myBorrowRecords=[],token
            //市场上的，我的，我的过期的
            for (let i = 0; i < length; i++) {
                state.token.methods.sellRecords(i).call().then(record => {
                    dispatch("rainbow/getUser", record.owner, {root: true}).then(user => {
                        token = {
                            amount: record.amount,
                            rbtAmount: record.rbtAmount,
                            owner: record.owner,
                            ownerName: user.nickname,
                            day: record.day,
                            tokenId: record.tokenId,
                            expireTime: record.expireTime,
                            apy: record.apy,//借款比率
                            interestFee: record.interestFee,
                            status: record.status,
                            lendOwner: record.lendOwner
                        }

                        if(record.owner.toLowerCase()==rootState.app.account.toLowerCase() && record.status == 2){
                            expiredRecords.push(token)
                        }else if(record.owner.toLowerCase()==rootState.app.account.toLowerCase()){
                            myRecords.push(token)
                        }else if(record.owner.toLowerCase()==record.lendOwner.toLowerCase()){
                            myBorrowRecords.push(token)
                        }{
                            marketRecords.push(token)
                        }

                        if (i == length - 1) {
                            commit("SET_MARKETTOKENARR", marketRecords)
                            commit("SET_MYMARKETTOKENARR", myRecords)
                            commit("SET_MYEXPIRETOKENARR", expiredRecords)
                            commit("SET_MYBORROWARR", myBorrowRecords)
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
