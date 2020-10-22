<template>
  <div class="base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <!-- {{ goodsInfo }} -->
    <div class="info-title">{{ goodsInfo.desc }}</div>
    <div class="info-price">
      <span class="n-price">{{ goodsInfo.price }}</span>
      <span class="o-price">{{ goodsInfo.oldPrice }}</span>
      <span
        class="discount"
        v-if="goodsInfo.discount"
        :style="{ backgroundColor: goodsInfo.discountBgColor }"
      >
        {{ goodsInfo.discount }}
      </span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>
        {{ goodsInfo.services[goodsInfo.services.length - 1].name }}
      </span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goodsInfo.services.length - 1"
        :key="index"
      >
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  components: {},
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return null
      },
    },
  },
}
</script>
<style scroped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
  font-size: 16px;
  line-height: 20px;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 8px;
  padding: 3px 4px 3px 1px;
  color: #fff;
  vertical-align: var(--color-high-text);
  border-radius: 4px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid #6060601a;
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 44px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
