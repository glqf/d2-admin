<template>
  <the-section title="toggle">
    <d2-button @click="toggle" :icon="loading ? 'mdi:toggle-switch' : 'mdi:toggle-switch-off-outline'" circle/>
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
  <the-section title="circle">
    <d2-button :loading="loading" icon="mdi:hand-right" circle/>
  </the-section>
  <the-section title="disabled">
    <d2-button :loading="loading" disabled>button</d2-button>
  </the-section>
  <the-section title="plain">
    <d2-button :loading="loading" plain>button</d2-button>
  </the-section>
  <the-section title="round">
    <d2-button :loading="loading" round>button</d2-button>
  </the-section>
  <the-section title="round half icon">
    <d2-button icon="akar-icons:chevron-left" :loading="loading" round-left>Left</d2-button>
    <d2-button icon-right="akar-icons:chevron-right" :loading-right="loading" round-right>Right</d2-button>
  </the-section>
  <the-section title="text">
    <d2-button :loading="loading" text>button</d2-button>
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
