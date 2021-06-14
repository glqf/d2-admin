<template>
  <the-section title="break point">
    <d2-break-point v-slot="{ breakPoint }">
      {{ breakPoint }}
    </d2-break-point>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  }
}
</script>
