<!--
 * @Author: Siwen
 * @Date: 2019-08-26 18:02:18
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 18:18:57
 * @Description: 钱包充值
 -->
<template>
  <div class="wallet_recharge">
    <nav-bar title="钱包充值"></nav-bar>
    <div class="container">
      <div class="main">
        <div class="title">X币</div>
        <div class="address_title">钱包地址</div>
        <div class="address_string">{{ address }}</div>
        <div class="copye_btn" v-clipboard:copy="address" v-clipboard:success="onCopy">复制钱包地址</div>
      </div>
    </div>
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
export default class WalletRecharge extends Vue {
  private address: string = 'kodnuaso97caskashca8u78axkas8ycscy8casckodnuaso97caskashca'
  private onCopy() {
    this.$toast('复制成功')
  }
}
</script>
<style lang='scss'>
.wallet_recharge {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 28px;
    .main {
      width: 90%;
      background-color: #fff;
      min-height: 256px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #ebebeb;
        font-size: 15px;
        color: #333;
        padding-left: 13px;
      }
      .address_title {
        font-size: 14px;
        color: #333;
        margin: 35px 0 20px 15px;
        font-weight: 700;
      }
      .address_string {
        width: 90%;
        text-align: center;
        word-wrap:break-word;
        font-size: 14px;
        margin-left: 15px;
        color: #666;
      }
      .copye_btn {
        width: 189px;
        height: 41px;
        text-align: center;
        line-height: 41px;
        background-image: linear-gradient(-90deg, 
          #dc35ce 0%, 
          #a049f0 100%);
        box-shadow: 0px 2px 6px 0px 
          rgba(190, 63, 223, 0.42);
        border-radius: 3px;
        font-size: 16px;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 27px;
      }
    }
  }
}
</style>
