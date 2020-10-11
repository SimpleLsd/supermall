<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" height="195px" indicator-position="outside">
        <el-carousel-item v-for="item in bannerItems" :key="item.title">
          <a :href="item.link">
            <img :src="item.image" :alt="item.title" />
            {{ item.img }}
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
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
  height: 195px;
  width: 375px;
}
</style>
