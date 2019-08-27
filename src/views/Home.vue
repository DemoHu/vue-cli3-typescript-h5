<!--
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-27 12:03:24
 * @Description: Home
 -->
<template>
  <div class="home_view">
    <div class="container">
      <div class="header">
        <img src="" class="avatar">
        <div class="nick_name">
          <div>飞翔的河南人</div>
          <div>UID: 1000001</div>
        </div>
        <router-link to="/explain" class="explain">游戏规则</router-link>
      </div>
      <div class="amount_box">
        <div class="left">奖池剩余: 14890000.0000</div>
        <div class="right">XX充值总量: 148900.0000</div>
      </div>
      <div class="count_down_box">
        <div class="top">
          <img :src="require('@/assets/ufo.png')" class="ufo">
          <div v-if="OpenAward" class="ufo_guang"></div>
          <div class="text">抽奖倒计时</div>
          <div class="count_down">02:24:28</div>
        </div>
        <img :src="OpenAward ? require('@/assets/ball_ok.png') : require('@/assets/ball_no.png')" class="ball">
      </div>
      <div class="info_box">
        <router-link to="/wallet" class="my_amount">
          <div class="amount_info">0<span>(+5)</span></div>
          <div class="type_name">我的X币</div>
        </router-link>
        <router-link to="/order" class="win_amount">
          <div class="amount_info">365</div>
          <div class="type_name">中奖X币</div>
        </router-link>
        <router-link to="/wallet" class="my_club">
          <div class="amount_info">365</div>
          <div class="type_name">我的社区</div>
        </router-link>
      </div>
      <div class="home_invite">
        <router-link to="/invite" class="home_invite_link">
          <span>每邀请一个用户获得 5 X币</span>
        </router-link>
      </div>
    </div>
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
export default class Home extends Vue {
  private OpenAward: boolean = true
}
</script>
<style lang='scss'>
.home_view {
  width: 100%;
  height: 100%;
  @include background-func('../assets/home_bg.png');
  .container {
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .header {
      width: 100%;
      padding: 0 15px;
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: solid .7px #edf0ff;
        margin-right: 10px;
      }
      .nick_name {
        flex: 1;
        font-size: 12px;
        color: #fefeff;
        div:last-child {
          font-size: 10px;
        }
      }
      .explain {
        width: 74px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #413d97;
        border-radius: 13px;
        font-size: 12px;
        color: #fff;
      }
    }
    .amount_box {
      width: 100%;
      height: 32px;
      @include background-func('../assets/amount_bg.png');
      margin-top: 13px;
      font-size: 11px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 10px;
      .right {
        margin-left: -60px;
      }
    }
    .count_down_box {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #fff;
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .top {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1;
        position: relative;
      }
      .ufo {
        width: 70px;
        height: 67.5px;
      }
      .ufo_guang {
        width: 316px;
        height: 250px;
        @include background-func('../assets/ufo_guang.png');
        position: absolute;
        top: 65px;
      }
      .text {
        margin-top: 10px;
        font-size: 21px;
      }
      .count_down {
        font-size: 20px;
        line-height: 40px;
      }
      .ball {
        width: 148px;
        height: 148px;
        z-index: 2;
        // position: absolute;
        // bottom: 0%;
        // left: 50%;
        // transform: translate(-50%);
      }
    }
    .info_box {
      width: 90%;
      height: 80px;
      background-image: linear-gradient(268deg, 
        #162a5c 0%, 
        #2c1559 100%);
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(91deg, 
        #9439d5 0%, 
        #60ebf3 100%);
      border-image-slice: 1;
      opacity: 0.95;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .my_amount,
      .win_amount,
      .my_club {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: #9f9bfa;
        .amount_info {
          font-size: 15px;
          color: #fff;
          span {
            font-size: 10px;
            color: #fe52d0;
            margin-left: 5px;
          }
        }
      }
    }
    .home_invite {
      width: 100%;
      height: 97px;
      margin-top: 10px;
      font-size: 15px;
      color: #e1beff;
      display: flex;
      align-items: center;
      justify-content: center;
      .home_invite_link {
        width: 90%;
        height: 97px;
        @include background-func('../assets/home_invite.png');
        position: relative;
        span {
          position: absolute;
          right: 17%;
          top: 50%;
        }
      }
    }
  }
}
</style>
