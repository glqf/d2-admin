<template>
  <the-section title="toggle">
    <d2-button @click="toggle">toggle</d2-button>
  </the-section>
  <the-section title="loading">
    <d2-button :loading="loading">button</d2-button>
  </the-section>
  <the-section title="right">
    <d2-button :loading-right="loading">button</d2-button>
  </the-section>
  <the-section title="left icon is loading">
    <d2-button icon="heroicons-solid:menu" :loading="loading">button</d2-button>
  </the-section>
  <the-section title="right icon is loading">
    <d2-button icon-right="heroicons-solid:menu" :loading-right="loading">button</d2-button>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const loading = ref(true)

    function toggle () {
      loading.value = !loading.value
    }

    return {
      loading,
      toggle
    }
  }
}
</script>
