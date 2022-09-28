import { get } from './http'
export const nodeList = param => get('nodelist', param)
export const tokenApplyList = param => get('tokenApplyList', param)
export const parliamentList = param => get('parliamentList', param)
