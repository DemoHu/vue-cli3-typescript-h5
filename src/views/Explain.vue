<!--
 * @Author: Siwen
 * @Date: 2019-08-26 16:08:53
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 17:15:22
 * @Description: 说明
 -->
<template>
  <div class="explain_view">
    <div class="top_box">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
    </div>
    <div class="container">
      <div class="title">X星球玩法简介</div>
      <p>X星球以参与抽奖并中奖的方式进行挖矿激励，来获得X矿池奖励，奖池总量：500万枚X。</p>
      <p>X星球注册即送5枚X；推荐注册也将获得5枚X，以参与抽奖并中奖的方式进行解锁释放。</p>
      <p class="blue">注：推荐注册赠送X仅一级邀请获得。</p>

      <div class="title">参与矿池抽奖机制</div>
      <p>1、每个新注册用户享有一次抽奖体验。</p>
      <p>2、持续参与每日抽奖需提前充值存入不低于30枚X资产到钱包账户。</p>
      <p>3、每日进行三轮开抢和开奖时间如下：</p>
      <p>第一轮：每日<span class="blue">11:00</span>整开抢，<span class="blue">12:00</span>开奖；</p>
      <p>第二轮：每日<span class="blue">17:00</span>整开抢，<span class="blue">18:00</span>开奖；</p>
      <p>第三轮：每日<span class="blue">20:30</span>整开抢，<span class="blue">21:30</span>开奖；</p>
      
      <div class="title title_long">邀请用户中奖奖励规则</div>
      <p><span class="fw700">邀请用户中奖奖励：</span>可获得自己下一级用户中奖奖励数量的51%奖励；并按照中奖者向上三级进行激励。</p>
      <p><span class="fw700">举例说明：</span>例如你的下一级中奖数量为100枚X；则你将得到51%中奖奖励51没X；你的上一级将得到26%奖励26枚X；再上一级将得到13%奖励13枚X。</p>
      <p><span class="fw700">重点说明：</span>获得自己中奖奖励和邀请用户中奖奖励，都需要自己账户提前充值存入10倍于中奖奖励的可用资产，方可获得。</p>
      <p><span class="fw700">举例说明：</span>若抽奖中奖100枚X；此时你的账户可用资产需提前存入大于1000枚以上方可获得；若下一级抽奖并中奖100枚X，那么你可获得51枚，此时你的账户可用资产需提前充值存入大于510枚X才能获得。</p>

      <div class="title title_long">邀请用户中奖奖励规则</div>
      <p>X星球社区用户都可以邀请推荐优质社区成为社区节点；可获得社区节点中奖分红的5%。</p>
       
      <div class="title title_long">成为社区节点的权益</div>
      <p>1、社区节点分红：可获得自己伞下邀请社区用户无限层中奖奖励综合的10%分红激励。</p>
      <p>2、社区节点享有伞下社区用户持币总量日千分之一的激励。</p>
      <p>3、社区节点享有伞下社区用户提币手续费50%的激励。</p>

      <div class="title">如何成为社区节点？ </div>
      <p>其伞下社区用户充值量需大于10万枚X，参与充值抽奖的一级社区用户大于20个，则自动成为社区节点；并获得社区节点权益。</p>
      <p><span class="blue">特别说明：</span>若其伞下社区用户充值量小于10万枚X，参与充值抽奖的一级社区用户小于20个，则自动取消社区节点资格和社区节点权益；节点持币量是从申请节点后重新统计的，申请节点之前的伞下社区持币量属于上一级，例如A邀请B，B申请节点，B申请节点之前的用户伞下持币仍属于A，以此类推。</p>

      <div class="title title_long">成为社区超级节点收益 </div>
      <p>1、超级节点分红：可获得自己伞下邀请社区用户无限层中奖奖励总和的15%分红奖励。</p>
      <p>2、超级节点享有伞下社区用户持币总量日0.12%的激励。</p>
      <p>3、超级节点享有伞下社区用户提币手续费60%的激励。 </p>

      <div class="title title_long2">如何升级成为社区超级节点？ </div>
      <p>升级成为社区超级节点，其伞下社区用户充值量需大于100万枚X，同时社区充值抽奖并中奖用户大于1000个，全网仅限5位超级节点，由节点排名决定，排名规则，综合人数与社区持币总量进行评分，总分=（持币量-100）*0.6+（人数-1000）/10*0.4，通俗的讲，按照1人=8000X换算，来计算总持币数。</p>
      <p><span class="blue">特别说明：</span>若其伞下社区用户充值量小于100万枚X，社区充值抽奖并中奖用户小于1000个，则自动取消超级社区节点资格和以上社区节点权益；超级节点伞下有节点，超级节点收益将减去节点收益部分。</p>
    </div>
  </div>
</template>
   
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
   
@Component
export default class Explain extends Vue {

}
</script>
<style lang='scss'>
.explain_view {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .top_box {
    width: 100%;
    height: 160px;
    @include background-func('../assets/explain.png');
    .van-icon-arrow-left {
      font-size: 24px;
      margin-left: 15px;
      margin-top: 15px;
    }
  }
  .container {
    width: 100%;
    height: calc(100% - 160px);
    overflow-y: auto;
    padding-bottom: 80px;
    .title {
      @extend .title_bg_class;
    }
    .title_long {
      width: 150px !important;
    }
    .title_long2 {
      width: 175px !important;
    }
    p {
      font-size: 12px;
      color: #333;
      line-height: 20px;
      padding: 0 20px;
    }
  }
}

.title_bg_class {
  width: 123px;
  height: 23px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-image: linear-gradient(-90deg, 
    #dc35ce 0%, 
    #a049f0 100%);
  box-shadow: 0px 2px 6px 0px 
    rgba(190, 63, 223, 0.42);
  border-radius: 0px 20px 3px 0px;
  margin-top: 18px;
  margin-bottom: 10px;
}
.blue {
  color: #5f89f5;
}
.fw700 {
  color: #333333;
  font-weight: 700;
}
</style>
