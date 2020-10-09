<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data() {
    return {
      result: null,
    }
  },
  created() {
    // 组件创建后发送网络请求
    getHomeMultidata().then((res) => {
      console.log(res)
      this.result = res
    })
  },
}
</script>

<style scroped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
