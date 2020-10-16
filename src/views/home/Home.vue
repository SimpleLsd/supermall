<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>

    <Scroll class="scroll-content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <Swiper :bannerItems="banners"></Swiper>
      <RecommendViews :recommends="recommends"></RecommendViews>
      <FeatureView></FeatureView>
      <TabControl :tabItems="['流行', '新款', '精选']" @tabClick="tabClick" />
      <GoodsList :goods="showGoods" />
    </Scroll>

    <BackTop @click.native="backClick" v-show="backTopIsShow" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

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
    Scroll,
    BackTop,
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
    backClick() {
      this.$refs.scroll.Scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      if (position < -400) {
        this.backTopIsShow = true
      } else {
        this.backTopIsShow = false
      }
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
      backTopIsShow: false,
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {},
}
</script>

<style scroped>
.home {
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
}
li {
  list-style: none;
}
.scroll-content {
  margin-top: 44px;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
