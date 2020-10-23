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
      <DetailDetailInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <DetailParamsInfo :info="itemParams" />
      <DetailComments :comment="commentInfo" />
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailDetailInfo from './childComponents/DetailDetailInfo'
import DetailParamsInfo from './childComponents/DetailParamsInfo'
import DetailComments from './childComponents/DetailComments'

import Scroll from 'components/common/scroll/Scroll'

import { getDetailData, Goods } from 'network/detail.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDetailInfo,
    DetailParamsInfo,
    DetailComments,
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
        this.detailInfo = res.result.detailInfo
        this.itemParams = res.result.itemParams
        if (res.result.rate !== 0) this.commentInfo = res.result.rate.list[0]
      })
    },
    imageLoad() {
      console.log(11)
      this.$refs.scroll && this.$refs.scroll.Scroll.refresh()
    },
  },
  data() {
    return {
      id: null,
      data: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
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
