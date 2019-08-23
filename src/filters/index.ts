/*
 * @Author: Siwen
 * @Date: 2019-08-08 15:19:05
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-08 15:20:08
 * @Description: Vue过滤器
 */
import Vue from 'vue'
import utils from '@/utils'
//时间格式化
Vue.filter('formatDate', (v: number, format: string) => {
  return utils.formatDate(v, format)
})
Vue.filter('toDecimal', (num: number | string) => {
  return utils.toDecimal(num, 2)
})
//数字千分位格式化
Vue.filter('comdify', (num: number | string) => {
  return utils.comdify(num)
})
