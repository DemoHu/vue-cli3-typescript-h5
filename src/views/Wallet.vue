<!--
 * @Author: Siwen
 * @Date: 2019-08-26 16:43:50
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 18:22:53
 * @Description: 我的钱包
 -->
<template>
  <div class="wallet_view">
    <nav-bar title="我的钱包">
      <template slot="right">
        <router-link to="">记录</router-link>
      </template>
    </nav-bar>
    <div class="container">
      <div class="assets_box">
        <div class="assets_top"><span>可使用X</span><span>{{ amount }}</span></div>
        <div class="assets_bottom"><span>总价值= {{ total }} CNY</span><span>当前汇率≈ {{ rate }}</span></div>
      </div>
      <ul class="assets_list">
        <li v-for="(item, index) in assetsList" :key="index">
          <div class="item_title">{{ item.title }}</div>
          <div class="item_amount">{{ item.amount }}</div>
        </li>
      </ul>
    </div>
    <div class="handle_btn">
      <div class="recharge_btn" @click="showPopup = true">充值</div>
      <router-link to="/withdrawal" class="withdrawal_btn">提现</router-link>
    </div>
    <!-- 充值 -->
    <van-popup v-model="showPopup" position="bottom" :style="{ height: '20%' }">
      <div class="quick" @click="quickRecharge">
        <img src="@/assets/quick_recharge.png">
        <span>快捷充币</span>
      </div>
      <router-link to="/walletrecharge" class="qianbao">
        <img src="@/assets/wallet_recharge.png">
        <span>钱包充币</span>
      </router-link>
    </van-popup>
  </div>
</template>
   
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'

@Component({
  components: {
    NavBar
  }
})
export default class Wallet extends Vue {
  private amount: number = 0
  private total: number = 0
  private rate: number = 0
  private showPopup: boolean = false
  private assetsList: any[] = [
    { 'title': '被冻结X', amount: 0 },
    { 'title': '已充值X', amount: 133 },
    { 'title': '已抢到X', amount: 7 }
  ]
  private quickRecharge() {
    
  }
}
</script>
<style lang='scss'>
.wallet_view {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .container {
    width: 100%;
    padding: 0 15px;
    background-color: #fff;
    .assets_box {
      width: 100%;
      .assets_top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 0 18px 0;
        padding-top: 23px;
        span {
          font-size: 15px;
          color: #333;
        }
      }
      .assets_bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        span {
          font-size: 13px;
          color: #999;
        }
      }
    }
    .assets_list {
      width: 100%;
      li {
        width: 100%;
        height: 55px;
        border-top: 0.7px solid #ddd;
        color: #333;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .handle_btn {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    .recharge_btn,
    .withdrawal_btn {
      width: 140px;
      height: 37px;
      font-size: 15px;
      background-color: #e551b2;
      border-radius: 3px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .withdrawal_btn {
      background-color: #5f89f5;
    }
  }
  .van-popup--bottom {
    color: #333;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .quick,.qianbao {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50%;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
    .quick {
      border-bottom: 0.7px solid #ddd;
    }
  }
}
</style>
