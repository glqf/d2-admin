<template>
  <the-section title="icon">
    <d2-button-group>
      <d2-button icon="heroicons-solid:menu">button</d2-button>
      <d2-button icon="heroicons-solid:menu">button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button icon="heroicons-solid:menu">button</d2-button>
      <d2-button icon="heroicons-solid:menu">button</d2-button>
      <d2-button icon="heroicons-solid:menu">button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="icon right">
    <d2-button-group>
      <d2-button icon-right="heroicons-solid:menu">button</d2-button>
      <d2-button icon-right="heroicons-solid:menu">button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button icon-right="heroicons-solid:menu">button</d2-button>
      <d2-button icon-right="heroicons-solid:menu">button</d2-button>
      <d2-button icon-right="heroicons-solid:menu">button</d2-button>
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
