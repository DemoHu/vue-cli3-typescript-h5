<!--
 * @Author: Siwen
 * @Date: 2019-08-26 14:40:00
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 16:45:50
 * @Description: NavBar 导航栏
 -->
<template>
  <div class="nav_bar">
    <van-icon name="arrow-left" @click="backPage" />
    <div class="title">{{ title }}</div>
    <div class="right_slot">
      <slot name="right"></slot>
    </div>
  </div>
</template>
  
<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
  
@Component
export default class NavBar extends Vue {
  @Prop() private title!: string
  private backPage() {
    this.$router.go(-1)
  }
}
</script>
<style lang='scss'>
.nav_bar {
  width: 100vw;
  height: 44px;
  background-color: #02041c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .van-icon-arrow-left {
    margin-left: 15px;
    font-size: 18px;
  }
  .title {
    font-size: 18px;
  }
  .right_slot {
    margin-right: 15px;
    font-size: 14px;
  }
}
</style>
