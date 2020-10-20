<template>
  <div id="detail">
    <DetailNavBar />
    <DetailSwiper :topImages="topImages" />
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'

import { getDetailData } from 'network/detail.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  methods: {
    getDetailData() {
      getDetailData(this.id).then((res) => {
        this.data = res
        this.topImages = res.result.itemInfo.topImages
      })
    },
  },
  data() {
    return {
      id: null,
      data: null,
      topImages: [],
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getDetailData()
  },
  mounted() {
    console.log(this.topImages)
  },
}
</script>

<style scroped></style>
