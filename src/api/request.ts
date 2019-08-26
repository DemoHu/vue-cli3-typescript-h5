/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:47:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 11:24:06
 * @Description: axios封装
 */
import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true //请求携带cookie
axios.defaults.baseURL = process.env.VUE_APP_API_URL
// 公共参数
const publicParams: any = {}

// 防止重复请求相关配置
const pending: any[] = []
const CancelToken: any = axios.CancelToken
interface pendingRequest {
  UrlPath: string
  Cancel: () => void
}
const cancelPending = (config: any) => {
  pending.forEach((item: pendingRequest, index) => {
    if (!config || item.UrlPath === config.url) {
      item.Cancel() //取消请求
      pending.splice(index, 1) //移除当前请求记录
    }
  })
}
//不进行防重处理的接口集合
const noCancelPending: string[] = ['/order/createQuiz']

//request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['AHost'] = 'x_star'
    // 防止重复请求 ↓↓↓↓
    if (!noCancelPending.includes(config.url as string)) {
      cancelPending(config)
      config.cancelToken = new CancelToken((res: any) => {
        pending.push({ 'UrlPath': config.url, 'Cancel': res })
      })
    }
    // 防止重复请求 ↑↑↑↑
    if (config.method === 'post') {
      config.data = qs.stringify(Object.assign(config.data || {}, publicParams))
    } else if (config.method === 'get') {
      config.params = Object.assign(config.params || {}, publicParams)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//response 拦截器
axios.interceptors.response.use(
  response => {
    cancelPending(response.config) // 防止重复请求
    // 具体业务处理
    const res = response.data
    if (typeof res === 'string') {
      return res
    } else if (!res.success) {
      return Promise.reject(res.error)
    } else {
      return res.payload || {}
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios

