<template>
  <div>
    <Swiper :bannerItems="topImages" />
  </div>
</template>

<script>
import Swiper from './Swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scroped></style>
