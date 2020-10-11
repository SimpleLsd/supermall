<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper :bannerItems="banners"></Swiper>
    <RecommendViews :recommends="recommends"></RecommendViews>
    <FeatureView></FeatureView>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import RecommendViews from 'views/home/childComps/RecommendViews'
import FeatureView from 'views/home/childComps/FeatureView'
import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'Home',

  components: {
    NavBar,
    Swiper,
    RecommendViews,
    FeatureView,
  },

  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
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
