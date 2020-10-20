<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scroped>
.nav-bar {
  display: flex;
  width: 375px;
  z-index: 9;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 0 5px #00000020;
}
.left,
.right {
  width: 60px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  /* background-color: blue; */
}
.center {
  text-align: center;
  flex: 1;
  /* background-color: red; */
}
</style>
