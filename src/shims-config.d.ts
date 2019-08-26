/*
 * @Author: Siwen
 * @Date: 2019-08-08 18:31:51
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 17:07:35
 * @Description: vue原型上的属性方法声明
 */
import Vue from "vue"
declare module 'vue/types/vue' {
  interface Vue {
    $api: any,
    $utils: any,
    $event: any,
    $navigation: any,
  }
}
