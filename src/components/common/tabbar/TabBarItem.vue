<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    },
  },
  data() {
    return {
      // isActive: true,
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/location').catch((err) => {
        console.log(err)
      })
      this.$router.replace(this.link)
    },
  },
}
</script>

<style scroped>
.tab-bar-item {
  color: #666666;
  flex: auto;
  text-align: center;
  line-height: 1.5em;
  font-size: 0.5em;
}
.tab-bar-item img {
  margin-top: 4px;
  width: 24px;
  height: 24px;
}
</style>
