/*
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-27 10:39:59
 * @Description: 路由管理
 */

import Vue from 'vue'
import Router from 'vue-router'
process.env.NODE_ENV !== 'production' && Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', meta: { isTransition: false }, component: () => import('@/views/Home.vue') },
    { path: '/nodes', name: '节点申请', meta: { isTransition: false }, component: () => import('@/views/Nodes.vue') },
    { path: '/center', name: '我的', meta: { isTransition: false }, component: () => import('@/views/Center.vue') },
    { path: '/order', name: '中奖记录', meta: { isTransition: true }, component: () => import('@/views/Order.vue') },
    { path: '/wallet', name: '我的钱包', meta: { isTransition: true }, component: () => import('@/views/Wallet.vue') },
    { path: '/walletrecharge', name: '钱包充值', meta: { isTransition: true }, component: () => import('@/views/WalletRecharge.vue') },
    { path: '/withdrawal', name: '提现', meta: { isTransition: true }, component: () => import('@/views/Withdrawal.vue') },
    { path: '/invite', name: '我的邀请', meta: { isTransition: true }, component: () => import('@/views/Invite.vue') },
    { path: '/explain', name: '游戏说明', meta: { isTransition: true }, component: () => import('@/views/Explain.vue') },
    { path: '/about', name: '关于', meta: { isTransition: true }, component: () => import('@/views/About.vue') },
    { path: '/login', name: '登录', meta: { isTransition: true }, component: () => import('@/views/Login.vue') },
    { path: '/register', name: '注册', meta: { isTransition: true }, component: () => import('@/views/Register.vue') },
    { path: '*', component: () => import('@/views/404.vue') }
  ]
})
