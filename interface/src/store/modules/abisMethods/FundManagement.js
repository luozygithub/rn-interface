
		import getContract from "@/utils/abiUtil";
		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('FundManagement', rootState.app.web3)
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
RbtVote ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.RbtVote().call().then(res => {
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
proposalFroms ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.proposalFroms(param0).call().then(res => {
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
tokenProposals ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenProposals(param0).call().then(res => {
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
setRbtVote ({rootState}, addr){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setRbtVote(addr).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setRbtVote(addr).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setRbtVote",
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
applyToken ({rootState}, {ip,nodeId,stage,day,depositType,applyAmount,depositAmount,description}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.applyToken(ip,nodeId,stage,day,depositType,applyAmount,depositAmount,description).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.applyToken(ip,nodeId,stage,day,depositType,applyAmount,depositAmount,description).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"applyToken",
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
comGovApplyToken ({rootState}, {cg,stage,day,depositType,applyAmount,depositAmount,description}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.comGovApplyToken(cg,stage,day,depositType,applyAmount,depositAmount,description).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.comGovApplyToken(cg,stage,day,depositType,applyAmount,depositAmount,description).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"comGovApplyToken",
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
parliamentsVoteProposal ({rootState}, {id,stage}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.parliamentsVoteProposal(id,stage).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.parliamentsVoteProposal(id,stage).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"parliamentsVoteProposal",
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
voteToProposal ({rootState}, {id,tickets}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.voteToProposal(id,tickets).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.voteToProposal(id,tickets).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"voteToProposal",
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
receiveToken ({rootState}, {id,stage}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.receiveToken(id,stage).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.receiveToken(id,stage).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"receiveToken",
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
submitReport ({rootState}, {id,stage,description}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.submitReport(id,stage,description).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.submitReport(id,stage,description).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"submitReport",
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
	