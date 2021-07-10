<template>
  <the-section title="color">
    <d2-input v-model:value="value" class="mb-4"/>
    <d2-input v-for="color in colorNames" :key="color" :color="color" v-model:value="value" class="mb-4"/>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { colorNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const value = ref('Hello World')

    return {
      value,
      colorNames
    }
  }
}
</script>
