
		import getContract from "@/utils/abiUtil";
		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('CityNode', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
Gov721 ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.Gov721().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
NewFundManagement ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.NewFundManagement().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
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
beforeActiveElf ({rootState}, {param0,param1}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.beforeActiveElf(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
cityGovNodes ({rootState}, {param0,param1}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.cityGovNodes(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
cityGovernanceAddr ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.cityGovernanceAddr().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
cityNodeCount ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.cityNodeCount().call().then(res => {
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
nodeParliamentVoteId ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.nodeParliamentVoteId(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
parliamentApplyRecords ({rootState}, {param0,param1,param2}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.parliamentApplyRecords(param0,param1,param2).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
parliamentUp ({rootState}, {param0,param1,param2}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.parliamentUp(param0,param1,param2).call().then(res => {
						resolve(res)
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
userApplyRecords ({rootState}, {param0,param1,param2}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.userApplyRecords(param0,param1,param2).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
userNode ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.userNode(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
voteAddr ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.voteAddr().call().then(res => {
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
voteRecords ({rootState}, {param0,param1,param2}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.voteRecords(param0,param1,param2).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
existsCityNode ({rootState}, nodeId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.existsCityNode(nodeId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
inNode ({rootState}, {nodeId,sender}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.inNode(nodeId,sender).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getUserNode ({rootState}, sender){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getUserNode(sender).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
setVote ({rootState}, addr){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setVote(addr).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setVote(addr).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setVote",
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
setGov721 ({rootState}, addr){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setGov721(addr).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setGov721(addr).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setGov721",
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
setNewFundManagement ({rootState}, addr){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setNewFundManagement(addr).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setNewFundManagement(addr).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setNewFundManagement",
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
getCityNodeInfo ({rootState}, nodeId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getCityNodeInfo(nodeId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
createNode ({rootState}, {tokenId,name,hash,y,a}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.createNode(tokenId,name,hash,y,a).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.createNode(tokenId,name,hash,y,a).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"createNode",
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
joinNode ({rootState}, nodeId){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.joinNode(nodeId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.joinNode(nodeId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"joinNode",
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
quitNode ({rootState} ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.quitNode().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.quitNode().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"quitNode",
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
getCityNodeFMAddress ({rootState}, id){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getCityNodeFMAddress(id).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getCityTrueId ({rootState}, id){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getCityTrueId(id).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
lengthen ({rootState}, {nodeId,tokenId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.lengthen(nodeId,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.lengthen(nodeId,tokenId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"lengthen",
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
activeToCampaign ({rootState}, nodeId){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.activeToCampaign(nodeId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.activeToCampaign(nodeId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"activeToCampaign",
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
applyManager ({rootState}, {nodeId,tokenId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.applyManager(nodeId,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.applyManager(nodeId,tokenId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"applyManager",
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
getExistsApplyUsers ({rootState}, {nodeId,voteId,applicant}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getExistsApplyUsers(nodeId,voteId,applicant).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
voteToManager ({rootState}, {nodeId,voteId,user,tickets}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.voteToManager(nodeId,voteId,user,tickets).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.voteToManager(nodeId,voteId,user,tickets).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"voteToManager",
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
endToManager ({rootState}, {nodeId,voteId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.endToManager(nodeId,voteId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.endToManager(nodeId,voteId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"endToManager",
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
getWinner ({rootState}, {nodeId,voteId}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getWinner(nodeId,voteId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
activeToParliaments ({rootState}, nodeId){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.activeToParliaments(nodeId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.activeToParliaments(nodeId).send({
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
getParliamentLength ({rootState}, id){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getParliamentLength(id).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getParliamentByIndex ({rootState}, {id,i}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getParliamentByIndex(id,i).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
applyParliament ({rootState}, nodeId){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.applyParliament(nodeId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.applyParliament(nodeId).send({
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
getApplyParliament ({rootState}, {nodeId,voteId}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getApplyParliament(nodeId,voteId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getApplyParliamentVoteId ({rootState}, nodeId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getApplyParliamentVoteId(nodeId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
voteToParliament ({rootState}, {nodeId,voteId,user,tickets}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.voteToParliament(nodeId,voteId,user,tickets).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.voteToParliament(nodeId,voteId,user,tickets).send({
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
endToParliament ({rootState}, {nodeId,voteId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.endToParliament(nodeId,voteId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.endToParliament(nodeId,voteId).send({
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
setParliament ({rootState}, {nodeId,voteId,index}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setParliament(nodeId,voteId,index).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setParliament(nodeId,voteId,index).send({
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
parliamentTakeOffice ({rootState}, nodeId){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.parliamentTakeOffice(nodeId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.parliamentTakeOffice(nodeId).send({
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
removeParliament ({rootState}, {nodeId,user}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.removeParliament(nodeId,user).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.removeParliament(nodeId,user).send({
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
hasParliament ({rootState}, {nodeId,user}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.hasParliament(nodeId,user).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
parliamentInfo ({rootState}, nodeId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.parliamentInfo(nodeId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
receiveReward ({rootState}, {nodeId,token,amount}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.receiveReward(nodeId,token,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.receiveReward(nodeId,token,amount).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"receiveReward",
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
impeachExtract ({rootState}, {nodeId,token,amount,receiver,impeachType}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.impeachExtract(nodeId,token,amount,receiver,impeachType).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.impeachExtract(nodeId,token,amount,receiver,impeachType).send({
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
setManagerInfo ({rootState}, {nodeId,manager}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setManagerInfo(nodeId,manager).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setManagerInfo(nodeId,manager).send({
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
getNodeCityGov ({rootState}, nodeId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getNodeCityGov(nodeId).call().then(res => {
						resolve(res)
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
	