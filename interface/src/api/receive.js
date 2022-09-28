import { get } from './http'
export const receiveList = async param =>{return get('receiveList', param)}
export const userReceiveMonthList = async param =>{return get('userReceiveMonthList', param)}
export const userReceiveWeekList = async param =>{return get('userReceiveWeekList', param)}