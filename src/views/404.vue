<!--
 * @Author: Siwen
 * @Date: 2019-08-22 13:58:38
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 10:49:42
 * @Description: 404
 -->
<template>
  <div class="wscn-http404-container">
    <h1>404</h1>
  </div>
</template>
   
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
   
@Component
export default class NotFoundComponent extends Vue {
  private message: string = '这个页面似乎不存在......'
  private beforeCreate() {
    this.$event.$emit('page404', true)
  }
  private beforeDestroy() {
    this.$event.$emit('page404', false)
  }
}
</script>
<style lang='scss'>
.wscn-http404-container{
  
}
</style>
