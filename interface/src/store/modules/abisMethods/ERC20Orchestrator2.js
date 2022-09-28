
		import getContract from "@/utils/abiUtil";
		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('ERC20Orchestrator2', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
rbb ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.rbb().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
rbtc ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.rbtc().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
rusd ({rootState} ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.rusd().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
init ({rootState}, manager){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(manager).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(manager).send({
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
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	