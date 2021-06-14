<template>
  <the-section title="window size">
    <d2-button icon="gg-arrows-breake-h">
      breakPoint {{ breakPoint }}
    </d2-button>
  </the-section>
</template>

<script>
import { breakPointsConfig } from 'd2-components/utils/const.js'
import { useBreakPoint } from 'd2-use/break-point.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const { breakPoint } = useBreakPoint({ config: breakPointsConfig })
    return {
      breakPoint
    }
  }
}
</script>
