<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendViews',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scroped>
.recommend {
  font-size: 10px;
  padding: 10px 10px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-bottom: 10px solid #eeeeee;
}
.recommend img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>
