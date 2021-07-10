<template>
  <the-section title="input">
    <p class="mb-4">{{ value }}</p>
    <d2-input v-model:value="value" class="mb-4"/>
    <d2-input v-model:value="value"/>
    <d2-input v-model:value="value" size="mini"/>
    <d2-input v-model:value="value" size="small"/>
    <d2-input v-model:value="value" size="large"/>
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
