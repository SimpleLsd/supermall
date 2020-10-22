<template>
  <div id="detail">
    <DetailNavBar />
    <Scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
    >
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goodsInfo="goodsInfo" />
      <DetailShopInfo :shopInfo="shopInfo" />
      <div class="blank"></div>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetailData, Goods } from 'network/detail.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
  },
  methods: {
    getDetailData() {
      getDetailData(this.id).then((res) => {
        this.data = res
        this.topImages = res.result.itemInfo.topImages
        this.goodsInfo = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        )
        this.shopInfo = res.result.shopInfo
      })
    },
  },
  data() {
    return {
      id: null,
      data: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getDetailData()
  },
  mounted() {
    this.$refs.scroll && this.$refs.scroll.Scroll.refresh()
  },
}
</script>

<style scroped>
#detail {
  z-index: 10;
  background-color: #fff;
  position: relative;
}
.scroll-content {
  background-color: #fff;
  height: calc(100% - 44px);
}
.blank {
  height: 1000px;
}
</style>
