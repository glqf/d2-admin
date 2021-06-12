<template>
  <the-section title="layout">
    <d2-flex class="layout">
      layout
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
  @apply w-96 h-64 bg-gray-100 rounded overflow-hidden;
  .layout__header {}
  .layout__footer {}
  .layout__body {}
}
</style>
