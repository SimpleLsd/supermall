<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
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
  height: 49px;
  background-color: #ffffff;

  box-shadow: 0 0 5px #0000000f;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
