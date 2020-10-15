<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from 'components/content/tabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
  },
}
</script>

<style>
@import 'assets/css/base.css';
#app {
  width: 375px;
  margin: 0 auto;
}
</style>
