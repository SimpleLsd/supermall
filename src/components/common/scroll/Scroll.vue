<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      Scroll: null,
    }
  },
  mounted() {
    this.Scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      disableMouse: false,
      disableTouch: false,
    })
    this.Scroll.on('scroll', (position) => {
      this.$emit('scroll', position.y)
    })
  },
}
</script>

<style scroped></style>
