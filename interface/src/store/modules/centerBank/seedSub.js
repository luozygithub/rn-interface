import getContract from "@/utils/abiUtil";

const state = {
    curRate: 100,//当前兑换比率
    token: null,
    curSubNumber:0,
    records:[],//认购记录
    allAmount:0,
    allUsdtAmount:0,
    account:0,
}

const mutations = {
    SET_CURRATE: (state, rate) => {
        state.curRate = rate
    },
    SET_CURSUBNUMBER: (state, rate) => {
        state.curSubNumber = rate
    },
    SET_RECORDS: (state, rate) => {
        state.records = rate
    },
    SET_ALLAMOUNT(state, value) {
        state.allAmount = value
    },
    SET_USERTOTALRECEIVED(state, value) {
        state.userTotalReceived = value;
    },
   SET_ACCOUNT(state, value){
        state.account = value
    },
    SET_ALLUSDTAMOUNT(state, value){
        state.allUsdtAmount = value
    }
}

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('', rootState.app.web3)
}

const actions = {
    snapUp({state,dispatch, rootState}, amount) {
        amount = amount.toString()
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.seedSubscription(rootState.app.web3.utils.toWei(amount)).estimateGas({
                from: rootState.app.account,
            }).then(gas=>{
                state.token.methods.seedSubscription(rootState.app.web3.utils.toWei(amount)).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).on('error',(err)=>{
                    reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                }).then((res)=> {//成功回调
                    dispatch('getSubRecords');
                    resolve(res)
                });
            })

        });
    },
    getCurRate({commit,rootState}) {
        judgeToken(rootState)
        state.token.methods.curRate().call((err, res) => {
            if (err) return;
            commit('SET_CURRATE', res);
        })
    },
    getSubSeedsNum({commit,rootState}) {
        judgeToken(rootState)
        state.token.methods.isSubSeedsLeftNum().call((err, res) => {
            if (err) return;

            commit('SET_CURSUBNUMBER',  rootState.app.web3.utils.fromWei(res));
        })
    },

    async getSubRecords({commit,rootState}) {
        judgeToken(rootState)
        await state.token.methods.account().call().then(res =>{

            commit("SET_ACCOUNT" , res/10 ** 18)
        }),
        await state.token.methods.getRecordsLength().call({
            from:rootState.app.account
        },(err, length) => {
            let records = []
            let allAmount = 0
            let allUsdtAmount = 0
            for(let i=0;i<length;i++){
                state.token.methods.records(rootState.app.account,i).call((err, res) => {
                    if (err) return;
                    records.push({
                        time:res.time,
                        amount:res.amount,
                        price: 0.1 + (parseInt(res.curRate)-100)/5 * 0.01
                    })
                    allAmount += parseInt(res.amount)
                    allUsdtAmount += parseInt(res.amount/(0.1 + (parseInt(res.curRate)-100)/5 * 0.01)/ 10 ** 18 )
                    commit('SET_RECORDS', records)
                    commit("SET_ALLAMOUNT", allAmount)
                    commit("SET_ALLUSDTAMOUNT", allUsdtAmount)
                })
            }

        })

    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
