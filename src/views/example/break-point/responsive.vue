<template>
  <the-section title="break point">
    <d2-break-point :responsive="config" v-slot="status">
      {{ status.responsive }}
    </d2-break-point>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'
import BreakPointsDisplay from '../components/break-points-display.vue'

export default {
  components: {
    TheSection,
    BreakPointsDisplay
  },
  setup () {
    return {
      config: {
        name: ['MIN', { sm: 'SM', lg: 'LG' }]
      }
    }
  }
}
</script>
