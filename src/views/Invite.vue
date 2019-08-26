<!--
 * @Author: Siwen
 * @Date: 2019-08-26 15:24:04
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 16:08:44
 * @Description: 我的邀请
 -->
<template>
  <div class="invite_view">
    <van-icon name="arrow-left" @click="$router.go(-1)" />
    <div class="container">
      <div class="tips">邀请好友一起玩，好友中奖你也有份</div>
      <div class="invite_code_tips tips">您的邀请码</div>
      <h3>{{ inviteCode }}</h3>
      <div class="copye_btn" v-clipboard:copy="inviteCode" v-clipboard:success="onCopy">复制邀请码</div>
      <div class="rorward">一键转发，构建人脉社区</div>
      <div class="rorward_tips">成为节点，无限躺赚奖池收益</div>
      <div class="line"></div>
      <qriously :value="qrcode" :size="200" class="qrcode_box" />
      <div class="scanning_tips">扫描二维码下载游戏</div>
      <router-link to="/explain" class="explain">奖励规则</router-link>
    </div>
  </div>
</template>
   
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
   
@Component
export default class Invite extends Vue {
  private inviteCode: string = '3K4HJ'
  private qrcode: string = 'wwww'
  private onCopy() {
    this.$toast('复制成功')
  }
}
</script>
<style lang='scss'>
.invite_view {
  width: 100vw;
  height: 100vh;
  @include background-func('../assets/main_bg.png');
  display: flex;
  flex-direction: column;
  .van-icon-arrow-left {
    font-size: 24px;
    margin-left: 15px;
    margin-top: 15px;
  }
  .container {
    width: 90%;
    height: 80%;
    overflow-y: hidden;
    border-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tips {
      font-size: 15px;
      color: #666;
      margin-top: 26px;
    }
    .invite_code_tips {
      font-size: 13px;
      margin-top: 34px;
      margin-bottom: 25px;
    }
    h3 {
      font-size: 28px;
      color: #333;
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
    .rorward {
      font-size: 15px;
      color: #5f89f5;
    }
    .rorward_tips {
      font-size: 13px;
      color: #333;
      margin-top: 12px;
    }
    .line {
      width: 90%;
      height: 1px;
      margin-top: 25px;
      border-bottom: .5px dashed #5f89f5;
    }
    .qrcode_box {
      width: 110px;
      height: 110px;
      margin-top: 25px;
      border: .7px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .scanning_tips {
      font-size: 12px;
      color: #999999;
      margin-top: 10px;
    }
    .explain {
      font-size: 15px;
      color: #5f89f5;
      margin-top: 10px;
    }
  }
}
</style>
