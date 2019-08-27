<!--
 * @Author: Siwen
 * @Date: 2019-08-26 18:19:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 18:23:19
 * @Description: 提现
 -->
<template>
  <div class="withdrawal_view">
    <nav-bar title="提现">
      <template slot="right">
        <router-link to="">记录</router-link>
      </template>
    </nav-bar>
    <div class="container">
      
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
export default class Withdrawal extends Vue {

}
</script>
<style lang='scss'>
.withdrawal_view {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
} 
</style>
