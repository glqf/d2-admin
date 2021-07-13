<template>
  <the-section title="input">
    <d2-input v-model:value="value" class="mb-4"/>
  </the-section>
  <the-section title="clearable">
    <d2-input v-model:value="value" class="mb-4" clearable/>
  </the-section>
  <the-section title="clearable size">
    <d2-input v-for="size in sizeNames" :key="size" v-model:value="value" :size="size" clearable/>
  </the-section>
  <the-section title="clearable color">
    <d2-input v-for="color in colorNames" :key="color" v-model:value="value" :color="color" clearable/>
  </the-section>
  <the-section title="input + button">
    <d2-input v-model:value="value" class="mb-4"/>
    <d2-button>Submit</d2-button>
  </the-section>
  <the-section title="disabled">
    <d2-input v-model:value="value" disabled/>
  </the-section>
  <the-section title="color">
    <d2-input v-for="color in colorNames" :key="color" :color="color" v-model:value="value"/>
  </the-section>
  <the-section title="size">
    <d2-input v-for="size in sizeNames" :key="size" v-model:value="value" :size="size"/>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { colorNames, sizeNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const value = ref('Hello World')

    return {
      value,
      colorNames,
      sizeNames
    }
  }
}
</script>
