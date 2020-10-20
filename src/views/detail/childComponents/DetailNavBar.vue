<template>
  <div>
    <NavBar class="detail-nav-bar">
      <div slot="left" class="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="detail-nav-items">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="nav-item"
          :class="{ active: index === currentNavItem }"
          @click="navItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      navItems: ['商品', '参数', '评论', '推荐'],
      currentNavItem: 0,
    }
  },
  methods: {
    navItemClick(index) {
      this.currentNavItem = index
    },
    back() {
      this.$router.back()
    },
  },
  components: {
    NavBar,
  },
}
</script>

<style scroped>
.detail-nav-bar img {
  line-height: 0;
}
.detail-nav-items {
  display: flex;
  padding: 0 10px;
}
.nav-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-tint);
  /* border-bottom: 3px solid var(--color-tint); */
}
</style>
