<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>

    <TabControl
      :tabItems="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tabtop"
      :class="{ tabIsTop: tabIsTop }"
      ref="tabcontrol2"
    />

    <Scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <Swiper :bannerItems="banners" @swiperImageLoad="swiperImageLoad"></Swiper>
      <RecommendViews :recommends="recommends"></RecommendViews>
      <FeatureView></FeatureView>
      <TabControl :tabItems="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabcontrol1" />
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
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
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
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.Scroll.finishPullUp()
      })
    },
    backClick() {
      this.$refs.scroll.Scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      position < -400 ? (this.backTopIsShow = true) : (this.backTopIsShow = false)

      position < -44 - this.tabOffsetUp ? (this.tabIsTop = true) : (this.tabIsTop = false)
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    debounce(func, delay) {
      let timer = null
      return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fun.apply(this, args)
        }, delay)
      }
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabcontrol.$el.offsetTop)
      this.tabOffsetUp = this.$refs.tabcontrol1.$el.offsetTop
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
      tabOffsetUp: 0,
      tabIsTop: false,
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.$bus.$on('itemImageLoad', () => {
      this.$refs.scroll && this.$refs.scroll.Scroll.refresh()
    })
  },
}
</script>

<style scroped>
.home {
  position: relative;
  height: 100%;
}
.home-nav {
  position: absolute;
  top: 0px;
  background-color: var(--color-tint);
  color: white;
}
.tabtop {
  position: absolute;
  top: 0px;
  width: 375px;
  transition: all 200ms 0s ease-out;
}
.tabIsTop {
  top: 44px;
  z-index: 8;
}
li {
  list-style: none;
}
.scroll-content {
  position: absolute;
  top: 44px;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
