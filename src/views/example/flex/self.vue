<template>
  <the-section v-for="_self in self" :key="_self" :title="_self || 'default'">
    <d2-flex class="flex-example" box="mean">
      <d2-flex class="flex-example__item"/>
      <d2-flex class="flex-example__item"/>
      <d2-flex class="flex-example__item" :self="_self"/>
      <d2-flex class="flex-example__item"/>
      <d2-flex class="flex-example__item"/>
    </d2-flex>
  </the-section>
</template>

<script>
import { flex } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { self } = flex

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      self: ['', ...self]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-example {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex-example__item {
    @apply p-1 m-1 rounded-sm bg-indigo-500;
  }
}
</style>
