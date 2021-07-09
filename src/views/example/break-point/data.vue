<template>
  <the-section title="break point">
    <d2-break-point :data="config" v-slot="status">
      <p class="label">
        <span
          class="text-white px-4 py-2 rounded-full"
          :style="{ backgroundColor: status.data.color }"
        >
          {{ status.data.color }}
        </span>
      </p>
      <break-points-display :status="status"/>
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

<style lang="scss" scoped>
.label {
  @apply p-4 mb-8 text-center border border-gray-100 rounded bg-gray-50;
}
</style>
