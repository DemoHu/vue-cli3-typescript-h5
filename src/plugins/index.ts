/*
 * @Author: Siwen
 * @Date: 2019-08-08 15:20:25
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 16:04:07
 * @Description: 第三方插件载入
 */
import Vue from 'vue'
import 'lib-flexible' //rem适配方案
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)
import { Icon, Toast, Dialog, List, Loading, PullRefresh } from 'vant'
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(List)
Vue.use(Loading)
Vue.use(PullRefresh)


