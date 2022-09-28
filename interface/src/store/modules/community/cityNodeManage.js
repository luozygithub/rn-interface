import getContract from "@/utils/abiUtil";
function judgeToken(rootState, nodeAddress) {
    if (!state.token) state.token = getContract.getContractByAddress('CityNodeFundManagement',nodeAddress, rootState.app.web3)
}

const state = {};
const mutations = {};
const actions = {
    Rbt({rootState}, nodeAddress) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.Rbt().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    RbtVote({rootState}, nodeAddress) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.RbtVote().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    core({rootState}, nodeAddress) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.core().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    fundOwner({rootState}, nodeAddress) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.fundOwner().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    managerAndParliamentsReward({rootState}, {param0, param1, nodeAddress}) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.managerAndParliamentsReward(param0, param1).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    setCore({rootState}, {core, nodeAddress}) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.setCore(core).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setCore(core).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setCore",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    tokenProposals({rootState}, {param0, nodeAddress}) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.tokenProposals(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    tokenStorage({rootState}, {param0, param1, nodeAddress}) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.tokenStorage(param0, param1).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    setRbtVote({rootState}, {addr, nodeAddress}) {
        judgeToken(rootState, nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.setRbtVote(addr).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setRbtVote(addr).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setRbtVote",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    impeachTokenSend({rootState}, {receiver, amount, token, impeachtype,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.impeachTokenSend(receiver, amount, token, impeachtype).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.impeachTokenSend(receiver, amount, token, impeachtype).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "impeachTokenSend",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    applyToken({rootState}, {nodeId, stage, day, depositType, applyAmount, depositAmount, description,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.applyToken(nodeId, stage, day, depositType, applyAmount, depositAmount, description).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.applyToken(nodeId, stage, day, depositType, applyAmount, depositAmount, description).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "applyToken",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    addTokenStorage({rootState}, {store, token, amount,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.addTokenStorage(store, token, amount).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.addTokenStorage(store, token, amount).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "addTokenStorage",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    parliamentsVoteProposal({rootState}, {Ip, nodeId, id, stage,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.parliamentsVoteProposal(Ip, nodeId, id, stage).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.parliamentsVoteProposal(Ip, nodeId, id, stage).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "parliamentsVoteProposal",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    voteToProposal({rootState}, {nodeId, id, tickets,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.voteToProposal(nodeId, id, tickets).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.voteToProposal(nodeId, id, tickets).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "voteToProposal",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    receiveToken({rootState}, {Ip, id, stage,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.receiveToken(Ip, id, stage).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.receiveToken(Ip, id, stage).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "receiveToken",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    submitReport({rootState}, {id, stage, description,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.submitReport(id, stage, description).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.submitReport(id, stage, description).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "submitReport",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    setUserReward({rootState}, {user, token, amount, operate,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.setUserReward(user, token, amount, operate).estimateGas({
                from: rootState.app.account,
            }).then(gas => {
                state.token.methods.setUserReward(user, token, amount, operate).send({
                    from: rootState.app.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setUserReward",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    getUserReward({rootState}, {user, token,nodeAddress}) {
        judgeToken(rootState,nodeAddress)
        return new Promise((resolve, reject) => {
            state.token.methods.getUserReward(user, token).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}

