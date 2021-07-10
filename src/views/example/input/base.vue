<template>
  <the-section title="input">
    <d2-input v-model:value="value" class="mb-4"/>
    <d2-input v-model:value="value" class="mb-4"/>
  </the-section>
  <the-section title="input + button">
    <d2-input v-model:value="value" class="mb-4"/>
    <d2-button>Submit</d2-button>
  </the-section>
  <the-section title="button + input">
    <d2-button>Submit</d2-button>
    <d2-input v-model:value="value" class="mb-4"/>
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
    const value = ref('Hello World')

    return {
      value
    }
  }
}
</script>
