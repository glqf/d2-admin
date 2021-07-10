<template>
  <the-section title="size">
    <p>
      <d2-input v-model:value="value" class="mb-4"/>
      <d2-button>Submit</d2-button>
    </p>
    <p v-for="size in sizeNames" :key="size">
      <d2-input :size="size" v-model:value="value" class="mb-4"/>
      <d2-button :size="size">Submit</d2-button>
    </p>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { sizeNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const value = ref('Hello World')

    return {
      value,
      sizeNames
    }
  }
}
</script>
