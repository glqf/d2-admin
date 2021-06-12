<template>
  <the-section title="layout">
    <d2-flex class="layout" dir="top" box="justify">
      <div class="layout__header">header</div>
      <d2-flex class="layout__body" center>body</d2-flex>
      <div class="layout__footer">footer</div>
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
.layout {
  @apply w-96 h-64 p-1 bg-gray-100 rounded overflow-hidden;
  .layout__header {
    @apply text-center text-lg text-gray-500 py-2 bg-gray-300;
  }
  .layout__footer {
    @apply text-center text-lg text-gray-500 py-2 bg-gray-200;
  }
  .layout__body {
    @apply bg-gray-400;
  }
}
</style>
