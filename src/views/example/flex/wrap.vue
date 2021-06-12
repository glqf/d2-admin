<template>
  <the-section title="default">
    <d2-flex class="flex-example" cross="top">
      <div
        class="flex-example__item flex-example__item--size"
        :class="`flex-example__item--${n}`"
        v-for="n in 6"
        :key="n"
      />
    </d2-flex>
  </the-section>
  <the-section title="wrap">
    <d2-flex class="flex-example" cross="top" wrap>
      <div
        class="flex-example__item flex-example__item--size"
        :class="`flex-example__item--${n}`"
        v-for="n in 6"
        :key="n"
      />
    </d2-flex>
  </the-section>
  <the-section title="wrap-r">
    <d2-flex class="flex-example" cross="top" wrap-r>
      <div
        class="flex-example__item flex-example__item--size"
        :class="`flex-example__item--${n}`"
        v-for="n in 6"
        :key="n"
      />
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
    &.flex-example__item--2 { @apply bg-indigo-500; }
    &.flex-example__item--3 { @apply bg-indigo-400; }
    &.flex-example__item--4 { @apply bg-indigo-300; }
    &.flex-example__item--5 { @apply bg-indigo-200; }
    &.flex-example__item--6 { @apply bg-indigo-100; }
    &.flex-example__item--size {
      flex-grow: 0;
      flex-shrink: 0;
      @apply w-4;
    }
  }
}
</style>
