<template>
  <the-section title="break point">
    <d2-break-point v-slot="{ breakPoint }">
      <d2-button :color="getBreakPointColor(breakPoint)">
        {{ breakPoint || 'min' }}
      </d2-button>
    </d2-break-point>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const breakPointColor = {
      'sm': 'red',
      'md': 'yellow',
      'lg': 'green',
      'xl': 'blue',
      'xxl': 'indigo'
    }

    function getBreakPointColor (breakPoint) {
      return breakPointColor[breakPoint] || 'gray'
    }

    return {
      getBreakPointColor
    }
  }
}
</script>
