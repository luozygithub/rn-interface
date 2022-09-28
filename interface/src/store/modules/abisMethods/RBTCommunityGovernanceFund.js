
		import getContract from "@/utils/abiUtil";
		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('RBTCommunityGovernanceFund', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
Rbt ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.Rbt().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
activeToParliaments ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.activeToParliaments().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.activeToParliaments().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"activeToParliaments",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
addTokenStorage ({rootState}, {store,token,amount}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.addTokenStorage(store,token,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.addTokenStorage(store,token,amount).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"addTokenStorage",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
applyParliament ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.applyParliament().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.applyParliament().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"applyParliament",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
applyTokenExtract ({rootState}, {receiver,portion,where,token}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.applyTokenExtract(receiver,portion,where,token).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.applyTokenExtract(receiver,portion,where,token).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"applyTokenExtract",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
cgInfo ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.cgInfo().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
core ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.core().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
endToParliament ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.endToParliament().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.endToParliament().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"endToParliament",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
getApplyParliamentVoteId ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getApplyParliamentVoteId().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getBlockNumber ({rootState}, id){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getBlockNumber(id).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getUserReward ({rootState}, {user,token}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getUserReward(user,token).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
hasParliament ({rootState}, user){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.hasParliament(user).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
impeachExtract ({rootState}, {token,amount,receiver}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.impeachExtract(token,amount,receiver).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.impeachExtract(token,amount,receiver).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"impeachExtract",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
managerAndParliamentsReward ({rootState}, {param0,param1}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.managerAndParliamentsReward(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
parliamentApplyRecords ({rootState}, {param0,param1}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.parliamentApplyRecords(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
parliamentTakeOffice ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.parliamentTakeOffice().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.parliamentTakeOffice().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"parliamentTakeOffice",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
parliamentUp ({rootState}, {param0,param1}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.parliamentUp(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
removeParliament ({rootState}, user){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.removeParliament(user).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.removeParliament(user).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"removeParliament",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
setCore ({rootState}, core){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setCore(core).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setCore(core).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setCore",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
setManagerInfo ({rootState}, manager){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setManagerInfo(manager).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setManagerInfo(manager).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setManagerInfo",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
setParliament ({rootState}, {voteId,index}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setParliament(voteId,index).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setParliament(voteId,index).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setParliament",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
setUserReward ({rootState}, {user,token,amount,operate}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setUserReward(user,token,amount,operate).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setUserReward(user,token,amount,operate).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setUserReward",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
tokenStorage ({rootState}, {param0,param1}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenStorage(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
voteIdAddress ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.voteIdAddress().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
voteToParliament ({rootState}, {voteId,user,tickets}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.voteToParliament(voteId,user,tickets).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.voteToParliament(voteId,user,tickets).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"voteToParliament",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
active ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.active().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.active().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"active",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
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
	