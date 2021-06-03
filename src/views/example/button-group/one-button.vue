<template>
  <the-section title="one button">
    <d2-button-group>
      <d2-button>button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="one text button">
    <d2-button-group>
      <d2-button text>button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="one button with icon">
    <d2-button-group>
      <d2-button icon="heroicons-solid:menu">button</d2-button>
    </d2-button-group>
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
