<template>
  <the-section title="break point">
    <d2-break-point v-slot="status">
      <break-points-display :status="status"/>
    </d2-break-point>
  </the-section>
  <the-section title="filter">
    {{ want }}
  </the-section>
</template>

<script>
import { useBreakPoint } from 'd2-components/use/break-point.js'
import TheSection from '../components/the-section.vue'
import BreakPointsDisplay from '../components/break-points-display.vue'

export default {
  components: {
    TheSection,
    BreakPointsDisplay
  },
  setup () {
    const status = useBreakPoint()

    const filter = status.filter

    const want = filter(0, {
      sm: 1,
      md: 2
    })

    return {
      status,
      want
    }
  }
}
</script>
