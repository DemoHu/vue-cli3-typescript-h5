<!--
 * @Author: Siwen
 * @Date: 2019-08-26 11:49:53
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-27 10:58:56
 * @Description: 节点申请
 -->
<template>
  <div class="nodes_view">
    <ul class="tabs">
      <li :class="{'active': switch_tabs === '1'}" @click="changeTbas('1')">节点申请</li>
      <li :class="{'active': switch_tabs === '2'}" @click="changeTbas('2')">推荐节点</li>
    </ul>
    <div v-if="switch_tabs === '1'" :class="{'nodes_apply': switch_tabs === '1'}" class="container">
      <h3>节点申请</h3>
      <h4>申请条件</h4>
      <p>伞下社区用户充值量需大于10万枚X，参与充值抽奖的一级社区用户大于20个，则申请后自动成为社区节点；并获得社区节点权益。</p>
      <h4>节点权益</h4>
      <p>1、社区节点分红：可获得自己伞下邀请社区用户无限层中奖奖励综合的10%分红激励。</p>
      <p>2、社区节点享有伞下社区用户持币总量日千分之一的激励。</p>
      <p>3、社区节点享有伞下社区用户提币手续费50%的激励。</p>
      <div class="submit" @click="submitApply">提交申请</div>
    </div>
    <div v-if="switch_tabs === '2'" :class="{'nodes_recommend': switch_tabs === '2'}" class="container">
      <h3>推荐节点</h3>
      <input
        v-model="uid"
        v-enter-number
        step="0.0000000001"
        type="number"
        placeholder="请输入被推荐人UID"
        oninput="if(value.length>11)value=value.slice(0,11)"
      >
      <input
        v-model="phone"
        v-enter-number
        step="0.0000000001"
        type="number"
        placeholder="请输入被推荐人手机号"
        oninput="if(value.length>11)value=value.slice(0,11)"
      >
      <div class="tips">成功推荐节点可获得社区节点中奖分红的 5%</div>
      <div class="submit" @click="submitRecom">提交</div>
    </div>
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
export default class Nodes extends Vue {
  private switch_tabs: string = '1'
  private uid: string = ''
  private phone: string = ''
  private created() {
    this.switch_tabs = (this.$route.query.tabs as string) || '1'
  }
  private changeTbas(tabs: string) {
    this.switch_tabs = tabs
    this.$router.push({
      query: { tabs: this.switch_tabs }
    })
  }
  private submitApply() {
    
  }
  private submitRecom() {
    if (!this.uid || !this.$utils.isPhone(this.phone)) {
      this.$toast('请检查填写信息')
      return
    }
  }
}
</script>
<style lang='scss'>
.nodes_view {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tabs {
    width: 280px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    border: solid 2px #5f89f5;
    margin: 0 auto;
    margin-top: 33px;
    display: flex;
    li {
      width: 50%;
      height: 100%;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5f89f5;
      &.active {
        background-color: #5f89f5;
        color: #ffffff;
      }
    }
  }
  .container {
    width: 90%;
    min-height: 440px;
    margin-top: 32px;
    background-color: #fff;
    color: #666;
    padding: 24px 20px;
    h3 {
      width: 100%;
      text-align: center;
      color: #333;
      font-size: 17px;
    }
    h4 {
      color: #666;
      font-size: 14px;
      line-height: 23px;
      margin-top: 20px;
    }
    p {
      font-size: 13px;
      line-height: 23px;
    }
    .submit {
      width: 189px;
      height: 41px;
      line-height: 41px;
      background-image: linear-gradient(-90deg, 
        #dc35ce 0%, 
        #a049f0 100%);
      box-shadow: 0px 2px 6px 0px 
        rgba(190, 63, 223, 0.42);
      border-radius: 3px;
      margin: 0 auto;
      margin-top: 30px;
      color: #fff;
      font-size: 16px;
      text-align: center;
    }
  }
  .nodes_recommend {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 25px;
    }
    input {
      width: 95%;
      height: 50px;
      background-color: #fff;
      border-radius: 3px;
      border: solid 1px #ccc;
      margin-bottom: 20px;
      padding-left: 10px;
      font-size: 15px;
      &::placeholder {
        font-size: 15px;
        color: #999;
      }
    }
    .tips {
      font-size: 12px;
      color: #999;
      margin-top: 80px;
    }
  }
}
</style>
