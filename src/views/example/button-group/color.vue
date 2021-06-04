<template>
  <the-section title="color">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color">item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color">item</d2-button>
        <d2-button :color="color">item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color">item</d2-button>
        <d2-button :color="color">item</d2-button>
        <d2-button :color="color">item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="color plain">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain>item</d2-button>
        <d2-button :color="color" plain>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain>item</d2-button>
        <d2-button :color="color" plain>item</d2-button>
        <d2-button :color="color" plain>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
</template>

<script>
import { colors } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      colors
    }
  }
}
</script>
