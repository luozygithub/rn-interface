import getContract from "@/utils/abiUtil";

const state = {
    released: 0,//已释放
    totalExc: 0,//总兑换
    extracted: 0, //已提取
    records: [], //转换记录
    token: null, // 合约实例
}
const mutations = {
    SET_TOTALEXC(state, value) {
        state.totalExc = value
    },
    SET_EXTRACTED(state, value) {
        state.extracted = value
    },
    SET_RELEASED(state, value) {
        state.released = value
    },
    SET_RECORDS(state, arr) {
        state.records = arr
    },
}



function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('SeedExc', rootState.app.web3)
}


const actions = {
    async getSubData({state, commit, rootState}, userAddress) {
        judgeToken(rootState)
        userAddress?'':userAddress=rootState.app.account
        // 获取user提取次数
        await state.token.methods.userRecordingLth(userAddress).call(function (err, rs) {

            let userExcRecord = []
            let totalExc = 0, totalExracted = 0, userHasReleased = 0;
            //遍历去获取值
            for (let i = 0; i < rs; i++) {
                state.token.methods.waitSurplus(userAddress, i).call(function (err, res) {

                    totalExc += parseFloat(res.amount);
                    totalExracted += parseInt(res.extracted);
                    let now = (new Date()).getTime() / 1000;
                    let tempData = 0;
                    if (now > parseInt(res.startTime)) {
                        tempData = parseInt(parseInt(now - parseInt(res.startTime)) / 86400)
                    }
                    userHasReleased += tempData * parseInt(res.amount) * 0.9 / 365
                    userHasReleased += res.amount / 10

                    userExcRecord.push({
                        excStartTime: new Date(parseInt(res.startTime) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' '),
                        excEndTime: new Date(parseInt(parseInt(res.endTime)) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' '),
                        amount: parseInt(res.amount * Math.pow(10, -18)),
                        extracted: parseInt(res.extracted) * Math.pow(10, -18),
                        mortgage: parseInt(res.mortgage) * Math.pow(10, -18),
                        xuhao: i,
                    })
                    if (i == rs - 1) {
                        //遍历结束
                        commit('SET_TOTALEXC', totalExc / 10 ** 18)
                        commit('SET_EXTRACTED', totalExracted / 10 ** 18)
                        commit('SET_RELEASED', userHasReleased / 10 ** 18)
                        commit('SET_RECORDS', userExcRecord)
                    }
                })
            }
        });
    },
    // seed兑换rbt
    seedExchange({rootState}, amount) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.exchange(rootState.app.web3.utils.toWei(amount)).estimateGas({
                from: rootState.app.account
            }).then(gas=>{
                state.token.methods.exchange(rootState.app.web3.utils.toWei(amount)).send({
                    from: rootState.app.account,
                    gas:parseInt(gas*1.2)
                }, (err) => {
                    if (err) {
                        console.log(err)
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    }
                }).then((res)=>{
                    resolve(res)
                })
            }).catch(err=>{
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })

        })
    },

    //兑换的rbt提取
    seedExtract({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            // state.token.extract().send({
            state.token.methods.extract().estimateGas().then(gas=>{
                state.token.methods.extract().send({
                    from: rootState.app.account,
                    gas: gas*1.2
                }, (err) => {
                    if (err) {
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    }
                }).on('receipt', function (receipt) {
                    resolve(receipt)
                }).catch(err=>reject(JSON.parse(err.message.substr(24,err.message.length)).message))
            })

        });
    },
    //兑换的rbt提取一笔
    seedExtractOne({rootState}, index) {
        judgeToken(rootState)
        console.log("&&&&&&&&&&")
        console.log(111111111)
        return new Promise((resolve, reject) => {
            state.token.methods.extractOne(index).send({
                from: rootState.app.account,
                gas: 3000000
            }, (err) => {
                if (err) {
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }
            }).on('receipt', function (receipt) {
                resolve(receipt)
            })
        });
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
