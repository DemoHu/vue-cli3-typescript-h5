/*
 * @Author: Siwen
 * @Date: 2019-08-08 15:20:25
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 11:12:40
 * @Description: 第三方插件载入
 */
import Vue from 'vue'
import 'lib-flexible' //rem适配方案
import { Icon, Toast, Dialog, List, Loading } from 'vant'
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(List)
Vue.use(Loading)

