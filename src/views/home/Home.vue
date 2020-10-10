<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper :bannerItems="banners"></Swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'Home',

  components: {
    NavBar,
    Swiper,
  },

  data() {
    return {
      banners: {
        state: '',
        data: [],
      },
      recommends: {},
    }
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = {
        state: '',
        data: res.data.banner.list,
      }
      this.recommends = res.data.recommend
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
