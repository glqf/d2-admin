<template>
  <the-section title="input">
    <d2-input v-model:value="value" disabled/>
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
