<!--
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-27 11:36:13
 * @Description: App
 -->
<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view @child-get-info="childGetInfo" />
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  private page404: boolean = false
  private transitionName: string = ''
  public created() {
    this.$event.$on('page404', (status: boolean) => {
      this.page404 = status
    })
    this.$navigation.on('forward', (to: any) => {
      this.transitionName = to.route.meta.isTransition ? 'slide-left' : ''
    })
    this.$navigation.on('back', (to: any, from: any) => {
      if (to.route.meta.isTransition || from.route.meta.isTransition) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = ''
      }
    })
  }
  public mounted() {}
  private childGetInfo() {
    console.log(1111)
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  perspective: 800;
}
.slide-right-enter {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
