<!--
 * @Author: Siwen
 * @Date: 2019-08-26 11:26:25
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 11:35:42
 * @Description: 注册
 -->
<template>
  <div class="register_view">
    <div class="form_input">
      <div class="ipt_box">
        <input
          v-model="nickName"
          placeholder="请输入昵称"
          class="form_input1"
          oninput="if(value.length>7)value=value.slice(0,7)"
        >
      </div>
      <div class="ipt_box">
        <input
          v-model="inviteCode"
          placeholder="请输入邀请码(必填)"
          class="sign_one_input1"
          oninput="if(value.length>6)value=value.slice(0,6)"
        >
      </div>
    </div>
    <div class="btn_box">
      <div class="btn_login" @click="loginBtn">确认</div>
    </div>
  </div>
</template>
  
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
  
@Component
export default class Register extends Vue {
  private nickName: string = ''
  private inviteCode: string = ''
  private loginBtn() {
    
  }
}
</script>
<style lang='scss'>
.register_view {
  width: 100%;
  height: 100%;
  @include background-func('../assets/main_bg.png');
  display: flex;
  flex-direction: column;
  align-items: center;
  .form_input {
    width: 100%;
    flex: 0.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .ipt_box {
      display: flex;
      align-items: center;
      width: 85%;
      margin: 0 auto;
      height: 66px;
      border-bottom: 1px #4b2e87 solid;
      position: relative;
      color: $text;
      input {
        width: 100%;
        height: 66px;
        color: white;
        font-size: 16px;
        background: none;
        border: none;
        &::placeholder {
          color: #9f9bfa;
        }
      }
    }
  }
  .btn_box {
    width: 100%;
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn_login {
      width: 85%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      font-size: 18px;
      background-image: linear-gradient(-90deg, 
        #931a70 0%, 
        #6010cb 100%);
      border-radius: 3px;
    }
  }
}
</style>

