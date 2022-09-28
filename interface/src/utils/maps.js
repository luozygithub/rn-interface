import address from "./address.json"
let tokenByType = new Map()
tokenByType['RBTElf'] = address["RBTElf"]
tokenByType['RBTEnvoy'] = address["RBTEnvoy"]
tokenByType['RBTPartner'] = address["RBTPartner"]
tokenByType['RBTNode'] = address["RBTNode"]

let imgByType = new Map()
imgByType['RBTElf'] = require("@/assets/img/elves.png")
imgByType['RBTEnvoy'] = require("@/assets/img/ambassador.png")
imgByType['RBTPartner'] = require("@/assets/img/partner.png")
imgByType['RBTNode'] = require("@/assets/img/superNode.png")
let typeByToken = new Map([
    [address["RBTElf"], "RBTElf"],
    [address["RBTEnvoy"], "RBTEnvoy"],
    [address["RBTPartner"], "RBTPartner"],
    [address["RBTNode"], "RBTNode"],
])
export {
    tokenByType,
    imgByType,
    typeByToken
}
