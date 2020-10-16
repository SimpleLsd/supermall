<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in tabItems"
      :key="item.index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
}
</script>

<style scroped>
.tab-control {
  display: flex;
  justify-content: space-around;
  top: 44px;
  height: 44px;
  line-height: 44px;
  margin-bottom: 8px;
  font-size: 14px;
  background-color: #fff;
}
.tab-control span {
  padding: 5px;
}
.active {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>
