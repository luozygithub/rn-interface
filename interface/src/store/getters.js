const getters = {
    isConnected: state => state.app.isConnected,
    account: state => state.app.account,
    isRegister: state => state.rainbow.isisRegister,
    web3: state => state.app.web3,
    btcPrice: state => state.rainbow.btcPrice
}
export default getters
