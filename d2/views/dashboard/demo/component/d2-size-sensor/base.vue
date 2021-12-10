<route>
{}
</route>

<template>
  <section class="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
    <a-slider v-model:value="height" :min="30" :max="300" />
  </section>
  <d2-size-sensor class="border border-indigo-500 rounded">
    <d2-flex :style="style" center>
      height: {{ height }}px
    </d2-flex>
  </d2-size-sensor>
</template>

<script>
import { computed, ref, unref } from 'vue'

export default {
  setup () {
    const height = ref(50)

    const style = computed(() => ({
      height: unref(height) + 'px'
    }))

    return {
      height,
      style
    }
  }  
}
</script>
