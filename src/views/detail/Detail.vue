<template>
  <div id="detail">
    <DetailNavBar />
    <DetailSwiper :topImages="topImages" />
    <DetailBaseInfo :goodsInfo="goodsInfo" />
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'

import { getDetailData, Goods } from 'network/detail.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
  methods: {
    getDetailData() {
      getDetailData(this.id).then((res) => {
        // this.data = res
        this.topImages = res.result.itemInfo.topImages
        this.goodsInfo = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        )
      })
    },
  },
  data() {
    return {
      id: null,
      data: null,
      topImages: [],
      goodsInfo: {},
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getDetailData()
  },
  mounted() {},
}
</script>

<style scroped></style>
