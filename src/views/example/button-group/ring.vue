<template>
  <the-section title="ring">
    <d2-button-group ring>
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group ring>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group ring>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="ring width">
    <d2-button-group ring>
      <d2-button :color="color" :ring-width="4">item</d2-button>
    </d2-button-group>
    <d2-button-group ring>
      <d2-button :color="color" :ring-width="4">item</d2-button>
      <d2-button :color="color" :ring-width="4">item</d2-button>
    </d2-button-group>
    <d2-button-group ring>
      <d2-button :color="color" :ring-width="4">item</d2-button>
      <d2-button :color="color" :ring-width="4">item</d2-button>
      <d2-button :color="color" :ring-width="4">item</d2-button>
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
