<template>
  <the-section title="loading">
    <d2-button loading>button</d2-button>
  </the-section>
  <the-section title="right">
    <d2-button loading-right>button</d2-button>
  </the-section>
  <the-section title="left icon is loading">
    <d2-button icon="heroicons-solid:menu" loading>button</d2-button>
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
