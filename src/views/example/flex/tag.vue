<template>
  <the-section title="tag">
    <d2-flex class="flex-example" tag="section">
      <div class="flex-example__item" :class="`flex-example__item--${n}`" v-for="n in 3" :key="n"/>
    </d2-flex>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.flex-example {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex-example__item {
    @apply p-1 m-1 rounded-sm;
    &.flex-example__item--1 { @apply bg-indigo-600; }
    &.flex-example__item--2 { @apply bg-indigo-300; }
    &.flex-example__item--3 { @apply bg-indigo-100; }
  }
}
</style>
