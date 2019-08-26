<!--
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 11:47:48
 * @Description: Home
 -->
<template>
  <div class="home">
    <tabbar></tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tabbar from '@/components/Tabbar.vue'

@Component({
  components: {
    Tabbar
  }
})
export default class Home extends Vue {}
</script>
<style lang='scss'>
 
</style>
