<template>
  <the-section title="order">
    <d2-flex class="group" center>
      <d2-flex class="item" :grow="1" flex center>1</d2-flex>
      <d2-flex class="item" :grow="2" flex center>2</d2-flex>
      <d2-flex class="item" :grow="0" flex center>0</d2-flex>
      <d2-flex class="item" :grow="4" flex center>4</d2-flex>
      <d2-flex class="item" :grow="2" flex center>2</d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      orders: [1, 4, 3, -2, 2, -1, 0]
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  @apply bg-gray-100 p-1 rounded;
  .item {
    @apply p-1 m-1 h-10 w-10 bg-indigo-500 text-white rounded;
  }
}
</style>
