<template>
  <template v-for="_content in content" :key="_content">
    <the-section :title="_content || 'default'">
      <d2-flex class="flex-example" :content="_content" wrap>
        <div
          class="flex-example__item flex-example__item--size"
          :class="`flex-example__item--${n}`"
          v-for="n in 6"
          :key="n"/>
      </d2-flex>
    </the-section>
  </template>
</template>

<script>
import { flex } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { content } = flex

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      content: ['', ...content]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-example {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex-example__item {
    @apply p-1 m-1 rounded-sm;
    &.flex-example__item--1 { @apply bg-indigo-600; }
    &.flex-example__item--2 { @apply bg-indigo-500; }
    &.flex-example__item--3 { @apply bg-indigo-400; }
    &.flex-example__item--4 { @apply bg-indigo-300; }
    &.flex-example__item--5 { @apply bg-indigo-200; }
    &.flex-example__item--6 { @apply bg-indigo-100; }
    &.flex-example__item--size {
      @apply w-4;
    }
  }
}
</style>
