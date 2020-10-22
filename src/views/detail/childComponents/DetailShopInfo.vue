<template>
  <div>
    {{ shopInfo }}
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scroped></style>
