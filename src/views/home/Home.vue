<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>

    <div class="wrapper">
      <div class="content">
        <Swiper :bannerItems="banners"></Swiper>
        <RecommendViews :recommends="recommends"></RecommendViews>
        <FeatureView></FeatureView>
        <TabControl :tabItems="['流行', '新款', '精选']" @tabClick="tabClick" />
        <GoodsList :goods="showGoods" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import RecommendViews from 'views/home/childComps/RecommendViews'
import FeatureView from 'views/home/childComps/FeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home.js'

export default {
  name: 'Home',

  components: {
    NavBar,
    Swiper,
    RecommendViews,
    FeatureView,
    TabControl,
    GoodsList,
  },
  methods: {
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
}
</script>

<style scroped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
li {
  list-style: none;
}
</style>
