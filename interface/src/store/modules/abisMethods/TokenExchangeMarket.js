
		import getContract from "@/utils/abiUtil";
		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('TokenExchangeMarket', rootState.app.web3)
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
list ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.list(param0).call().then(res => {
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
init ({rootState}, {_agent,_rbt,_elf,_envoy,_partner,_node}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(_agent,_rbt,_elf,_envoy,_partner,_node).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(_agent,_rbt,_elf,_envoy,_partner,_node).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"init",
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
sellToken ({rootState}, {from,tokenId,sellPrice,_types}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.sellToken(from,tokenId,sellPrice,_types).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.sellToken(from,tokenId,sellPrice,_types).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"sellToken",
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
bidToken ({rootState}, {from,id,bid,_types}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.bidToken(from,id,bid,_types).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.bidToken(from,id,bid,_types).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"bidToken",
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
revocation ({rootState}, {id,_types}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.revocation(id,_types).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.revocation(id,_types).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"revocation",
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
	