<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style scroped>
.back-top {
  z-index: 7;
  position: absolute;
  right: 10px;
  bottom: 60px;
  /* background-color: #fff; */
}

.back-top img {
  width: 60px;
  height: 60px;
}
</style>
