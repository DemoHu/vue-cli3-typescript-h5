<!--
 * @Author: Siwen
 * @Date: 2019-08-23 10:17:56
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 10:28:47
 * @Description: App
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  private page404: boolean = false
  public created() {
    this.$event.$on('page404', (status: boolean) => {
      this.page404 = status
    })
  }
  public mounted() {}
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
