import getContract from "@/utils/abiUtil";

// 提案

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('Proposal', rootState.app.web3)
}

const state = {
    token: null,
    proposalArr: [],//抵押市场令牌数组
    voteNumber:0,//多签提案已投票人数
}

const mutations = {
    SET_PROPOSALARR: (state, arr) => {
        state.proposalArr = arr
    },
    SET_VOTENUMBER: (state, number) => {
        state.voteNumber = number
    },

}
const actions = {
    getVoteProposalList({rootState, commit}, id){//获取多签投票已经投票人数
        console.log(id)
        judgeToken(rootState)
        state.token.methods.getVoteProposalList(id).call().then(async length=>{
            console.log(length)
            commit('SET_VOTENUMBER', length)
        })
    },
    getNodeProposal({rootState,commit,dispatch},address){//获取城市节点下提案
        judgeToken(rootState)
        state.token.methods.getProposalLength(address).call({from:rootState.app.account}).then(async length=>{
            let proposalArr=[]
            for(let i=0;i<length;i++){
                await state.token.methods.governanceProposal(address,i).call().then(async proposalId=>{
                    await state.token.methods.proposalInfo(proposalId).call().then(proposal=>{
                        dispatch("rainbow/getUser", proposal.proposalOwner, {root: true}).then(userInfo=>{
                            proposalArr.push({
                                proposalOwnerName:userInfo.nickname,
                                ...proposal,
                                proposalId
                            })
                        })
                    })

                })
            }
            console.log(proposalArr)
            commit("SET_PROPOSALARR",proposalArr)
        })
    },
    /**
     * 发起提案
     * @param rootState
     * @param params {nodeId,name,description,depositType,withdrawalNumber,withdrawalCount,interval, govAddress}
     *               节点Id，名字，描述，押金类型（100rbt/申请金额5%），申请金额，分几次，每个阶段的间隔，管理员地址
     * @returns {Promise<unknown>}
     */
    async doProposal({rootState}, {nodeId,name,description,depositType,withdrawalNumber,withdrawalCount,interval,govAddress}) {  // 发起提案
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            let args = [nodeId,name,description,depositType,withdrawalNumber,withdrawalCount,interval,govAddress]
            console.log(args)
            state.token.methods.doProposal(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.doProposal(...args).send({
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
    /**
     * 投票阶段 13多签管理员 多签给提案投票
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @returns {Promise<unknown>}
     */
    async proposalMsManagerVote({rootState}, {proposalId,nodeId}) {
        judgeToken(rootState)
        let args= [proposalId,nodeId]
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
            }).catch(err=>{
        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
            })
        })
    },
    /**
     * 公示阶段 踩 老成员给提案提异议
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @param amount
     * @returns {Promise<unknown>}
     */
    async proposalPersonVote({rootState}, {proposalId,nodeId,amount}) {
        judgeToken(rootState)
        let args= [proposalId,nodeId,amount]
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
            }).catch(err=>{
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
    async extract({rootState}, {proposalId,nodeId}) { // 出借钱
        judgeToken(rootState)
        let args = [proposalId,nodeId]
        return new Promise((resolve,reject) => {
            state.token.methods.extract(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.extract(...args).send({
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
    /**
     * 提交报告
     * @param rootState
     * @param proposalId
     * @param content
     * @returns {Promise<unknown>}
     */
    async submitReport({rootState}, {proposalId,content}) { // 出借钱
        judgeToken(rootState)
        let args = [proposalId,content]
        console.log(args)
        return new Promise((resolve,reject) => {
            state.token.methods.submitReport(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.submitReport(...args).send({
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
    /**
     * 多签对报告的审核
     * @param rootState
     * @param proposalId
     * @param nodeId
     * @returns {Promise<unknown>}
     */
    async reportReview({rootState}, {proposalId,nodeId}) { // 清算
        judgeToken(rootState)
        let args = [proposalId,nodeId]
        return new Promise((resolve,reject) => {
            state.token.methods.reportReview(...args).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.reportReview(...args).send({
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

};
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
