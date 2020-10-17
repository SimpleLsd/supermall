<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style scroped>
#tab-bar {
  display: flex;
  position: fixed;
  width: 375px;
  bottom: 0;
  height: 49px;
  background-color: #ffffff;
  box-shadow: 0 0 5px #0000000f;
}
</style>
