<!--
 * @Author: Siwen
 * @Date: 2019-08-26 16:43:50
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 16:46:32
 * @Description: 我的钱包
 -->
<template>
  <div class="wallet_view">
    <nav-bar title="我的钱包">
      <template slot="right">记录</template>
    </nav-bar>
    <div class="container"></div>
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

}
</script>
<style lang='scss'>
.wallet_view {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
