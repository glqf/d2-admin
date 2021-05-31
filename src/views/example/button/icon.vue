<template>
  <the-section title="icon">
    <d2-button icon="heroicons-solid:menu">Menu</d2-button>
  </the-section>
  <the-section title="icon right">
    <d2-button icon="heroicons-solid:menu" icon-right>Menu</d2-button>
  </the-section>
  <the-section title="icon right way2">
    <d2-button icon-right="heroicons-solid:menu">Menu</d2-button>
  </the-section>
  <the-section title="icon left right">
    <d2-button icon="akar-icons:chevron-left">Left</d2-button>
    <d2-button icon-right="akar-icons:chevron-right">Right</d2-button>
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
