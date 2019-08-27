<!--
 * @Author: Siwen
 * @Date: 2019-08-26 09:50:36
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 11:27:32
 * @Description: 登录
 -->
<template>
  <div class="login_view">
    <div class="form_input">
      <div class="ipt_box">
        <div class="img_bg img_bg1"></div>
        <input
          v-model="phone"
          v-enter-number
          step="0.0000000001"
          type="number"
          placeholder="请输入手机号码"
          class="form_input1"
          oninput="if(value.length>11)value=value.slice(0,11)"
        >
      </div>
      <div class="ipt_box">
        <div class="img_bg img_bg2"></div>
        <input
          v-model="code"
          v-enter-number
          step="0.0000000001"
          type="number" 
          placeholder="请输入验证码"
          class="sign_one_input1"
          oninput="if(value.length>6)value=value.slice(0,6)"
        >
        <p id="btnclick" class="codeTime" @click="getAuthCode">{{codeState}}</p>
      </div>
    </div>
    <div class="btn_box">
      <div class="btn_login" @click="loginBtn">登录</div>
    </div>
  </div>
</template>
  
<script lang='ts'>
import { Vue, Component, Emit } from 'vue-property-decorator'
  
@Component
export default class Login extends Vue {
  private phone: string = ''
  private code: string = ''
  private time: number = 0
  private timer: any = null
  private isEnterTime: boolean = false
  private isClickBtn: boolean = false
  get codeState() {
    if (this.time <= 0) return '获取验证码'
    let time = String(this.time)
    time = time.length < 2 ? `0${time}` : time
    return `重新获取${time}`
  }
  private getAuthCode() {
    if (!this.$utils.isPhone(this.phone)) {
      this.$toast('手机号格式错误')
      return
    } else if (!this.isEnterTime && this.time === 0) {
      this.isEnterTime = true
      this.$toast.loading({
        duration: 0,
        mask: true,
        forbidClick: true,
        message: '发送中...'
      })
      this.Verification()
    }
  }
  private Verification() {
    this.$api.initGt(this.phone).then((res: any) => {
      (window as any).initGeetest(
        {
          // 以下 4 个配置参数为必须，不能缺少
          gt: res.gt,
          challenge: res.challenge,
          offline: !res.success, // 表示用户后台检测极验服务器是否宕机
          new_captcha: res.new_captcha, // 用于宕机时表示是新验证码的宕机
          product: 'bind', // 产品形式，包括：float，popup, custom
          width: '100%'
        },
        this.handler
      )
      this.isEnterTime = false
    }).catch((err: any) => {
      this.isClickBtn = false
      this.$toast.clear()
    })
  }
  private handler(captchaObj: any) {
    captchaObj.onReady(() => {
      this.$toast.clear()
      captchaObj.verify()
    }).onSuccess(() => {
      const result = captchaObj.getValidate()
      this.time = 60
      this.timer = setInterval(() => {
        this.time--
        if (this.time <= 0) clearInterval(this.timer)
      }, 1000)
      this.$api.verifyGt({
        account: this.phone,
        orgId: 4,
        clientType: 'web',
        captchaType: 1001,
        challenge: result.geetest_challenge,
        validate: result.geetest_validate,
        seccode: result.geetest_seccode
      }).then((res: any) => {
        this.$toast.clear()
        if (!res.code) {
          this.sendCode()
        } else {
          this.isEnterTime = false
        }
      })
    })
  }
  private sendCode() {
    this.$api.sendCode(this.phone, 1001).then((res: any) => {
      this.isEnterTime = false
      this.$toast('发送成功')
    }).catch((err: any) => {
      this.isEnterTime = false
    })
  }
  private loginBtn() {
    if (!this.$utils.isPhone(this.phone)) {
      this.$toast('手机号码格式错误')
    } else if (!this.phone) {
      this.$toast('请输入手机号码')
    } else if (!this.code || this.code.length < 6) {
      this.$toast('验证码错误')
    } else {
      this.verifyCode()
    }
  }
  private verifyCode() {
    if (this.isClickBtn) return false
    this.isClickBtn = true
    this.$toast.loading({
      mask: true,
      message: '登录中'
    })
    this.$api.verifyCode({
      orgId: 4,
      codeType: '1001',
      account: this.phone,
      code: this.code
    }).then((res: any) => {
      this.login()
    }).catch((err:any) => {
      this.isClickBtn = false
      this.$toast(err.message)
    })
  }
  private login() {
    this.$api.login(this.phone).then((res: any) => {
      this.isClickBtn = false
      this.$toast.clear()
      this.childGetInfo()
    }).catch((err: any) => {
      if (err.code === 1008) {
        //用户不存在
        // this.$router.push({
        //   path: "/register",
        //   query: { account: this.phone,inviteCode:inviteCode }
        // });
      } else {
        this.$toast(err.message)
      }
    })
  }
  @Emit() private childGetInfo() {}
}
</script>
<style lang='scss'>
.login_view {
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
      .img_bg {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
      .img_bg1 {
        background: url("../assets/phone_icon.png") no-repeat;
        background-size: 100% 100%;
      }
      .img_bg2 {
        background: url("../assets/code_icon.png") no-repeat;
        background-size: 100% 100%;
      }
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
      .codeTime {
        font-size: 16px;
        color: white;
        position: absolute;
        right: 0;
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
