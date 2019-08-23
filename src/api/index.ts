/*
 * @Author: Siwen
 * @Date: 2019-08-14 16:49:43
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-22 10:49:45
 * @Description: 接口中心
 */
import axios from './request'

/**首页数据 */
export const getHomeData = () => {
  return axios.get('/lc/lottery/homepage')
}
/**开奖历史列表
 * @param lotteryType 彩种类型
 * @param lotteryName [可选] 彩种名称
 * @param pageNo [可选] 页码
 * @param pageSize [可选] 页大小
 */
export const getLotteryList = (lotteryType: string, lotteryName?: string, pageNo?: number, pageSize: number = 10) => {
  return axios.get('/lc/lottery/list', { params: { lotteryType, lotteryName, pageNo, pageSize }})
}
/**彩种历史开奖信息
 * @param lotteryType 彩种类型
 * @param date [可选] 查询日期
 * @param pageNo [可选] 页码
 * @param pageSize [可选] 页大小
 */
export const geLotteryHistory = (lotteryType: string, date?: string, pageNo?: number, pageSize: number = 10) => {
  return axios.get('/lc/lottery/history', { params: { lotteryType, date, pageNo, pageSize }})
}
/**首页搜索
 * @param keyword 彩种关键字
 */
export const search = (keyword: string) => {
  return axios.get('/lc/lottery/search', { params: { keyword }})
}
