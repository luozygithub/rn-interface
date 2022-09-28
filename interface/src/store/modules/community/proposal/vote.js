import getContract from "@/utils/abiUtil";

// 提案

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('RbtVote', rootState.app.web3)
}

const state = {
    token: null,
    myVote: 0,//我得票数 展示用
    myCampaignVote:0,//某次竞选某人总共委托的票数
    allCampaignVote:0,//总共票数
}

const mutations = {
    SET_MyVOTE: (state, votesNumber) => {
        state.myVote = votesNumber
    },
    SET_MyCampaignVOTE: (state, votesNumber) => {
        state.myCampaignVote = votesNumber
    },
    SET_ALLCampaignVOTE: (state, votesNumber) => {
        state.allCampaignVote = votesNumber
    },
}
const actions = {
    /**
     * //获取我得票数
     * @param rootState
     * @param commit
     * @param account
     * @param blockNumber
     */
    getPriorVotes({rootState, commit}, {account, blockNumber}) {
        judgeToken(rootState)
        account ? '' : account = rootState.app.account
        let arg = [account, blockNumber]
        state.token.methods.getPriorVotes(...arg).call({from: rootState.app.account}).then(async myVotes => {
            console.log(myVotes)
            commit("SET_MyVOTE", myVotes[1])
        })
    },
    /**
     * //获取某次竞选某人总共委托的票数
     * @param rootState
     * @param commit
     * @param account
     * @param campaignId
     */
    getUserCampaignVotes({rootState, commit}, {account, campaignId}) {
        judgeToken(rootState)
        account?'':account = rootState.app.account
        let arg = [account, campaignId]
        state.token.methods.getUserCampaignVotes(...arg).call({from: rootState.app.account}).then(async votes => {
            commit("SET_MyCampaignVOTE", votes)
        })
    },
    /**
     * //获取某次竞选总共委托的票数
     * @param rootState
     * @param commit
     * @param campaignId
     */
    getCampaignTotalVotes({rootState, commit}, campaignId) {
        judgeToken(rootState)
        state.token.methods.getCampaignTotalVotes(campaignId).call({from: rootState.app.account}).then(async votes => {
            commit("SET_ALLCampaignVOTE", votes)
        })
    },

    /**
     * 投票期 13多签管理员多签给提案投票
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @returns {Promise<unknown>}
     */
    async proposalMsManagerVote({rootState}, {proposalId, nodeId}) {

        judgeToken(rootState)
        let args = [proposalId, nodeId]
        console.log(args)
        return new Promise((resolve, reject) => {
            state.token.methods.proposalMsManagerVote(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.proposalMsManagerVote(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    /**
     * 公示期 老成员给提案提异议
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @param amount //投多少票
     * @returns {Promise<unknown>}
     */
    async proposalPersonVote({rootState}, {proposalId, nodeId, amount}) {
        judgeToken(rootState)
        let args = [proposalId, nodeId, amount]
        return new Promise((resolve, reject) => {
            state.token.methods.proposalPersonVote(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.proposalPersonVote(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    /**
     * 申请提取相应的钱数
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @returns {Promise<unknown>}
     */
    async extract({rootState}, {proposalId, nodeId}) { // 出借钱
        judgeToken(rootState)
        let args = [proposalId, nodeId]
        return new Promise((resolve, reject) => {
            state.token.methods.extract(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.extract(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })

        })
    },
    /**
     * 提交报告
     * @param rootState
     * @param proposalId
     * @param content
     * @returns {Promise<unknown>}
     */
    async submitReport({rootState}, {proposalId, content}) { // 出借钱
        judgeToken(rootState)
        let args = [proposalId, content]
        return new Promise((resolve, reject) => {
            state.token.methods.submitReport(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.submitReport(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })

        })
    },
    /**
     * 多签对报告的审核
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @returns {Promise<unknown>}
     */
    async reportReview({rootState}, {proposalId, nodeId}) { // 清算
        judgeToken(rootState)
        let args = [proposalId, nodeId]
        return new Promise((resolve, reject) => {
            state.token.methods.reportReview(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.reportReview(...args).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24,err.message.length)).message)
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
