<template>
  <the-section title="break point">
    <d2-break-point :data="config" v-slot="{ data: { color } }">
      <p class="view" :style="{ color: color }">
        {{ color }}
      </p>
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

<style scoped>
.view {
  @apply text-xl text-center;
}
</style>
