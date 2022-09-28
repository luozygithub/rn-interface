
		import getContract from "@/utils/abiUtil";
		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('RainbowRbtVip', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
FoundationAddress ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.FoundationAddress().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
RBTEX ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.RBTEX().call().then(res => {
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
name ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.name().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
referrerMaps ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.referrerMaps(param0).call().then(res => {
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
symbol ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.symbol().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
userListArray ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.userListArray(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
validity ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.validity().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
vipArray ({rootState}, param0){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.vipArray(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
vipPrice ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.vipPrice().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
register ({rootState}, {referrerId,nickname}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.register(referrerId,nickname).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.register(referrerId,nickname).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"register",
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
exchangeVip ({rootState}, {vipNumber,token}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.exchangeVip(vipNumber,token).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.exchangeVip(vipNumber,token).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"exchangeVip",
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
getVipLevel ({rootState}, addr){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getVipLevel(addr).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getAllVipIneffective ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getAllVipIneffective().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getOwerVipIneffective ({rootState}, addr){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getOwerVipIneffective(addr).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
ownerOf ({rootState}, tokenId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.ownerOf(tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getVipInfo ({rootState}, tokenId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getVipInfo(tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getUserInfo ({rootState}, addr){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getUserInfo(addr).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
sendVipByWhiteList ({rootState}, {addr,amount}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.sendVipByWhiteList(addr,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.sendVipByWhiteList(addr,amount).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"sendVipByWhiteList",
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
tokenOfOwnerByIndex ({rootState}, {owner,index}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenOfOwnerByIndex(owner,index).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
balanceOf ({rootState}, addr){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.balanceOf(addr).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
totalSupply ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.totalSupply().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
approve ({rootState}, {to,tokenId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.approve(to,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.approve(to,tokenId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"approve",
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
transfer ({rootState}, {from,to,tokenId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transfer(from,to,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transfer(from,to,tokenId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"transfer",
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
safeTransferFrom ({rootState}, {from,to,tokenId}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.safeTransferFrom(from,to,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.safeTransferFrom(from,to,tokenId).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"safeTransferFrom",
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
safeTransferFrom ({rootState}, {from,to,tokenId,_data}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.safeTransferFrom(from,to,tokenId,_data).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.safeTransferFrom(from,to,tokenId,_data).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"safeTransferFrom",
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
setApprovalForAll ({rootState}, {operator,approved}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setApprovalForAll(operator,approved).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setApprovalForAll(operator,approved).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"setApprovalForAll",
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
isApprovedForAll ({rootState}, {owner,operator}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.isApprovedForAll(owner,operator).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getApproved ({rootState}, tokenId){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getApproved(tokenId).call().then(res => {
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
	