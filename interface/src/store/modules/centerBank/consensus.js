import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('RbConsensus', rootState.app.web3)
}

let state = {
    rbtPirce:0,
    owner: '',
    curRate: 40,
    price:0.4,//当前共识挖矿价格
    tableData: null,
    token: null,
    digOutAmount: 0,
    cumulRbt: 0,
    records: [], //转换记录
    allUsdtAmount:0,
    allRbt: 0,//我的总兑换
    getRbtRecord:{
        allRbt:0,
        extractable:0,
        lockNum:0,
    },
    extractable:0,//我的待提取
    exchangeRatio:{
        amount:0,
        amount1:0,
    }
}



const mutations = {
    SET_RBTPIRCE(state,value){
        state.rbtPirce = value
    },
    SET_ACCOUNTS: (state, array) => {
        state.tableData = array
    },
    //兑换记录
    SET_RECORDS(state, OBJ) {
        state.records = OBJ
    },
    //兑换总消耗量
    SET_ALLUSDTAMOUNT(state, value) {
        state.allUsdtAmount = value
    },
    //矿池里总的挖出量
    SET_DIGOUTAMOUNT(state, value) {
        state.digOutAmount = value;
    },
    //每轮rbt数量
    SET_CUMULRBT(state, value) {
        state.cumulRbt = value;
    },
    //个人 挖出总量 锁仓量 待提取量
    SET_GETRBTRECORD(state,{allRbt, lockNum, extractable}){
        state.getRbtRecord = {allRbt, lockNum, extractable}
    },
    //用于邀请挖矿
    SET_EXCHANGERATIO(state, {amount, amount1}){
        state.exchangeRatio = {amount , amount1}
    },
    SET_PRICE(state, price){
        state.price = price
    }
}

const actions = {
    transferPrice({ rootState, commit}){
        judgeToken(rootState)
        state.token.methods.transferPrice().call().then(price=>{
            commit("SET_PRICE",price)
        })
    },

    getRBT({ rootState}, {amount,token,slipPrice}) {
        console.log(amount,token,slipPrice)
        judgeToken(rootState)
        let args=[rootState.app.web3.utils.toWei(amount.toString()),token, slipPrice]
        return new Promise((resolve, reject) => {
            state.token.methods.getRBT(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.getRBT(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).on('error', (err) => {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }).then((res) => {//成功回调
                    resolve(res)
                });
            }).catch(err=>{
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })

    },
    getRbtPrice({rootState,commit}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getRbtPrice().call().then(res => {
                resolve(res)

                commit("SET_RBTPIRCE",res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    async getSomeoneData({state, rootState}, userAddress) {
        judgeToken(rootState)
        return new Promise(resolve => {
            state.token.methods.lockUpTotalLength(userAddress).call(async function (err, rs) {
                let amount = 0
                //遍历去获取值
                for (let i = 0; i < rs; i++) {
                    await state.token.methods.lockUpTotal(userAddress, i).call(function (err, res) {
                        amount += parseInt(res.usdtAmount)
                    })
                }
                resolve(amount)
            })
        })
    },
    getSubData({state, commit, rootState}, userAddress) {
        !userAddress ? userAddress = rootState.app.account : ''
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            // 获取user提取次数
            state.token.methods.digOutAmount().call().then(res => {
                commit("SET_DIGOUTAMOUNT", res / 10 ** 18)
            })
            state.token.methods.cumulRbt().call().then(res => {
                commit("SET_CUMULRBT", res / 10 ** 18)
            })
            state.token.methods.lockUpTotalLength(userAddress).call(function (err, rs) {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
                let userExcRecord = []
                let allUsdtAmount = 0
                //遍历去获取值
                for (let i = 0; i < rs; i++) {
                    state.token.methods.lockUpTotal(userAddress, i).call(function (err, res) {
                        if (err) {
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        }

                        allUsdtAmount += parseInt(res.amount)/100*(res.price)* Math.pow(10, -18)

                        userExcRecord.push({
                            StartTime: res.startTime,//交易时间
                            EndTime: res.endTime,
                            amount: parseInt(res.amount * Math.pow(10, -18)*1.25),
                            extracted: parseInt(res.extracted * Math.pow(10, -18)),
                            price: parseInt(res.price),
                            usdtAmount: parseInt(res.amount/100*(res.price) * Math.pow(10, -18)),//usd数量
                            xuhao: i,
                        })
                        if (i == rs - 1) {
                            //遍历结束
                            commit("SET_ALLUSDTAMOUNT", allUsdtAmount)
                            commit('SET_RECORDS', userExcRecord)
                            resolve(userExcRecord)
                        }
                    })
                }
            })

        });
    },
    extract({rootState}){
        judgeToken(rootState)
        return new Promise((resolve,reject)=>{
            state.token.methods.extract().estimateGas({
                from:rootState.app.account,
            }).then(gas=>{
                state.token.methods.extract().send({
                   from:rootState.app.account,
                    gas:parseInt(gas * 1.2)
                }).on('error',(err)=>{
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }).then((res)=>{
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    }
    ,
    exchangeRatio({commit, rootState} ,userAddress){
        !userAddress ? userAddress = rootState.app.account : ''

        judgeToken(rootState)
        return new Promise(()=>{

            state.token.methods.exchangeRatio(userAddress).call({from:rootState.app.account}).then(res =>{

                commit("SET_EXCHANGERATIO",{
                    amount: res[0] / 10 ** 18,
                    amount1: res[1] / 10 ** 18,
                })
            })
        })
    },

    getExtract({commit, rootState}, amount) {
        commit;
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getRBT(rootState.app.web3.utils.toWei(amount)).call(function (err) {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }

            })
        });
    },
    async getExchangeRatio({rootState}, addr) { //获取邀请奖励
        judgeToken(rootState)
        return new Promise( (resolve) => {
            state.token.methods.exchangeRatio(addr).call().then(res=>{
                resolve(res)
            })
        });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
