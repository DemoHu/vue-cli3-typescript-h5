<!--
 * @Author: Siwen
 * @Date: 2019-08-26 14:34:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 17:24:50
 * @Description: 订单记录
 -->
<template>
  <div class="order_view">
    <nav-bar title="中奖记录"></nav-bar>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh" :head-height="100" class="refresh_box">
      <van-list v-model="listLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="item_order" v-for="(item, index) in orderList" :key="index">
          <div class="left">
            <div class="title">中奖获得</div>
            <div class="date">{{ item.date }}</div>
          </div>
          <div class="right">+ {{ item.win }} X</div>
        </div>
      </van-list>
    </van-pull-refresh>
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
export default class Order extends Vue {
  private isRefresh: boolean = false
  private listLoading: boolean = false
  private finished: boolean = false
  private orderList: any[] = [
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 },
    { date: '2018-10-22 12:22:33', win: 239.323 }
  ]
  private created() {
    this.onLoad()
  }
  /**下拉刷新 */
  private onRefresh() {
    setTimeout(() => {
      this.$toast('刷新成功')
      this.isRefresh = false
    }, 500)
  }
  /**加载更多 */
  private onLoad() {
    console.log(111)
    this.listLoading = false
    this.finished = this.orderList.length < 20
  }
}
</script>
<style lang='scss'>
.order_view {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .refresh_box {
    height: calc(100% - 44px);
    overflow-y: auto;
    background-color: #fff;
    .van-pull-refresh__track {
      height: calc(100% - 44px);
      .item_order {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        padding-bottom: 5px;
        border-bottom: 0.7px solid #ddd;
        .left {
          .title {
            color: #333;
            font-size: 13px;
            line-height: 58px;
          }
          .date {
            color: #999;
            font-size: 12px;
          }
        }
        .right {
          color: #333;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

