<!--
 * @Author: Siwen
 * @Date: 2019-08-26 11:51:06
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 14:35:12
 * @Description: 我的
 -->
<template>
  <div class="center_view">
    <div class="center_top">
      <img src="" class="avatar">
      <div class="nick_name">
        <div>{{ nickName }}</div>
        <div class="uid">UID: {{ uid }}</div>
      </div>
    </div>
    <div class="page_box">
      <router-link  v-for="(item, index) in pageList" :key="index" :to="item.url" class="item_page">
        <img :src="item.icon" alt="">
        <span>{{ item.name }}</span>
        <van-icon name="arrow" />
      </router-link>
    </div>
    <div class="logout" @click="logout">退出登录</div>
    <tabbar></tabbar>
  </div>
</template>
  
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import Tabbar from '@/components/Tabbar.vue'

@Component({
  components: {
    Tabbar
  }
})
export default class Center extends Vue {
  private nickName: string = '飞翔的河南人'
  private uid: string = '100001'
  private pageList: any[] = [
    { icon: require('@/assets/wallet.png'), name: '我的钱包', url: '/wallet' },
    { icon: require('@/assets/order.png'), name: '中奖记录', url: '/order' },
    { icon: require('@/assets/qrcode.png'), name: '我的邀请码', url: '/invite' }
  ]
  private logout() {
    console.log('退出登录')
  }
}
</script>
<style lang='scss'>
.center_view {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
  .center_top {
    width: 100%;
    height: 232px;
    @include background-func('../assets/center_top.png');
    display: flex;
    align-items: center;
    // justify-content: center;
    .avatar {
      width: 64px;
      height: 64px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 47px;
      margin-right: 13px;
    }
    .nick_name {
      font-size: 18px;
      color: #fff;
      .uid {
        font-size: 14px;
        color: #5f89f5;
        margin-top: 10px;
      }
    }
  }
  .page_box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    a {
      font-size: 17px;
      color: #333;
      display: flex;
      align-items: center;
      height: 56px;
      border-bottom: .7px solid #ddd;
      img {
        width: 30px;
        height: 30px;
        margin-right: 12px;
      }
      span {
        flex: 1;
        font-size: 17px;
        color: #333;
      }
      .van-icon-arrow {
        color: #ddd;
      }
      &:last-child {
        border-bottom: 0px;
      }
    }
  }
  .logout {
    font-size: 15px;
    color: #999;
    text-align: center;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%)
  }
}
</style>
