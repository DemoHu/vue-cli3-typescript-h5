/*
 * @Author: Siwen
 * @Date: 2019-08-14 16:49:43
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 11:23:04
 * @Description: 接口中心
 */
import axios from './request'

/**gt初始化 */
export const initGt = (account: string| number) => {
  return axios.post('/user/initGt', {
    account,
    clientType: 'web'
  })
}
export const verifyGt = (data: any) => {
  axios.post('/user/verifyGt', data)
}
export const verifyCode = (data: any) => {
  axios.post('/user/verifyCode', data)
}
export const sendCode = (account: string| number, codeType: number) => {
  axios.post('/user/sendCode', { account, codeType })
}
export const login = (account: string| number) => {
  axios.post('/user/login', { account, orgId: 4 })
}

/**首页搜索
 * @param keyword 彩种关键字
 */
export const search = (keyword: string) => {
  return axios.get('/lc/lottery/search', { params: { keyword }})
}
