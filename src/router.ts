/*
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 11:10:59
 * @Description: 路由管理
 */

import Vue from 'vue'
import Router from 'vue-router'
process.env.NODE_ENV !== 'production' && Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
    { path: '*', component: () => import('@/views/404.vue') }
  ]
})
