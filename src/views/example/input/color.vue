<template>
  <the-section title="color">
    <p>
      <d2-input v-model:value="value" class="mb-4"/>
      <d2-button>Submit</d2-button>
    </p>
    <p v-for="color in colorNames" :key="color">
      <d2-input :color="color" v-model:value="value" class="mb-4"/>
      <d2-button :color="color">Submit</d2-button>
    </p>
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
