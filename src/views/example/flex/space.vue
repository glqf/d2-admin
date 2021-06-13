<template>
  <the-section title="space off">
    <d2-flex class="flex-example">
      <div class="flex-example__item" v-for="n in 3" :key="n"/>
    </d2-flex>
  </the-section>
  <the-section title="space">
    <d2-flex class="flex-example" space>
      <div class="flex-example__item" v-for="n in 3" :key="n"/>
    </d2-flex>
  </the-section>
  <the-section v-for="size in sizes" :key="size" :title="`space ${size}`">
    <d2-flex class="flex-example" :space="size">
      <div class="flex-example__item" v-for="n in 3" :key="n"/>
    </d2-flex>
  </the-section>
</template>

<script>
import { sizes } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      sizes
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-example {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex-example__item {
    @apply p-1 rounded-sm bg-indigo-500;
    &.flex-example__item--1 { @apply bg-indigo-600; }
  }
}
</style>
