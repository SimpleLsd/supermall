<template>
  <div id="detail">
    <DetailNavBar />
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
  },
  data() {
    return {
      id: null,
    }
  },
  created() {
    // this.id = this.$route.query.id
    this.id = this.$route.params.id
  },
}
</script>

<style scroped></style>
