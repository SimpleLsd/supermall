<template>
  <div>
    <div class="detail-swiper">
      <el-carousel trigger="click" height="300px" indicator-position="outside">
        <el-carousel-item v-for="item in bannerItems" :key="item.title">
          <img :src="item" @load="imageLoad" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
      isLoad: false,
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) this.$emit('detailSwiperImageLoad')
      this.isLoad = true
    },
  },
  props: {
    bannerItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scroped>
.detail-swiper {
  overflow: hidden;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item img {
  height: auto;
  width: 100%;
}
</style>
