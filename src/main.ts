/*
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 17:04:01
 * @Description: main
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import '@/plugins'
import '@/filters'
import '@/directive'
import * as api from '@/api'
import utils from '@/utils'
import Navigation from 'vue-navigation'
Vue.use(Navigation, { router })
// 记得前往shims-config.d.ts 配置声明
Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.prototype.$event = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
