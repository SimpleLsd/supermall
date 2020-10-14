<template>
  <div class="goods-item">
    <div class="goods-item-container">
      <img :src="listItem.show.img" alt="" />
      <p class="title">{{ listItem.title }}</p>
      <div class="good-info">
        <span class="price">{{ listItem.price }}</span>
        <img src="~assets/img/common/collect.svg" alt="" />
        <span class="collect">
          {{ listItem.cfav }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scroped>
.goods-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.goods-item-container {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.goods-item img {
  width: 100%;
  margin-bottom: 8px;
  border-radius: 4px;
}
.goods-item .title {
  font-size: 14px;
  margin-bottom: 4px;
  width: 96%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-item .good-info {
  font-size: 15px;
  display: flex;
}
.goods-item .good-info .price {
  color: var(--color-tint);
}
.goods-item .good-info img {
  width: 16px;
  margin-left: 5px;
  margin-right: 3px;
  display: inline-block;
}
</style>
