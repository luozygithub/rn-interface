import { get } from './http'
export const apiuserList = param => get('userList', param)
export const apivipList = param => get('vipList', param)
export const apiuserCount = param => get('userCount', param)
export const  apiqueryNewId =async param =>await get('queryNewId', param)
export const  userCount =async param =>await get('userCount', param)
export const  queryHisRecord =async param =>await get('queryHisRecord', param)
