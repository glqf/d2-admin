<template>
  <the-section title="button">
    <p>width: {{ width }}</p>
    <p>height: {{ height }}</p>
  </the-section>
</template>

<script>
import { useWindowSize } from 'd2-use/window-size.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const { width, height } = useWindowSize()
    return {
      width,
      height
    }
  }
}
</script>
