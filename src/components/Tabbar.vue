<!--
 * @Author: Siwen
 * @Date: 2019-08-26 11:36:39
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 13:45:18
 * @Description: tabbar
 -->
<template>
  <div class="tabbar">
    <div class="footer_box">
      <div
        class="item_tabbar"
        :class="{'item_tabbar_active':item.url == $route.path}"
        v-for="(item, index) in routerList"
        :key="index"
      >
      <router-link :to="item.url" exact>
        <img :src="item.url == $route.path ? item.icon2 : item.icon1">
        <p class="tabbar-label" :class="{'active':item.url === $route.path}">{{item.name}}</p>
      </router-link>
      </div>
    </div>
  </div>
</template>
  
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
  
@Component
export default class Tabbar extends Vue {
  private routerList: any[] = [
    {
      url: '/',
      name: '首页',
      icon1: require('../assets/home_1.png'),
      icon2: require('../assets/home_2.png')
    },
    {
      url: '/nodes',
      name: '节点申请',
      icon1: require('../assets/nodes_1.png'),
      icon2: require('../assets/nodes_2.png')
    },
    {
      url: '/center',
      name: '我的',
      icon1: require('../assets/center_1.png'),
      icon2: require('../assets/center_2.png')
    }
  ]
}
</script>
<style lang='scss'>
.tabbar {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  .footer_box {
    margin: 0 auto;
    width: 100%;
    height: 49px;
    background-color: #0d042a;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item_tabbar {
      color: #9ba1b5;
      font-size: 10px;
      text-align: center;
      width: 50px;
      img {
        width: 25px;
        height: 25px;
        background-size: cover;
      }
      .tabbar-label{
        color: #9ba1b5;
        &.active {
          color: #5f89f5;
        }
      }
    }
  }
}
</style>
