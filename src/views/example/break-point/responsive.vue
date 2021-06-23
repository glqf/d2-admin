<template>
  <the-section title="break point">
    <d2-break-point :responsive="config" v-slot="status">
      <span
        class="text-white inline-block rounded-full text-center text-4xl px-8 py-4"
        :style="{ backgroundColor: status.responsive.color }">
        {{ status.responsive.color }}
      </span>
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
        color: [
          '#6B7280',
          {
            sm: '#EF4444',
            md: '#F59E0B',
            lg: '#10B981',
            xl: '#3B82F6',
            xxl: '#6366F1'
          }
        ]
      }
    }
  }
}
</script>
