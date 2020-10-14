<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :key="item.iid" :listItem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scroped>
.goods {
  width: 375px;
  flex-wrap: wrap;
  display: flex;
}
</style>
