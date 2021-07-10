<template>
  <the-section title="size">
    <d2-input v-model:value="value" class="mb-4"/>
    <d2-input v-for="size in sizeNames" :key="size" :size="size" v-model:value="value" class="mb-4"/>
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
