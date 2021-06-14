<template>
  <the-section title="window size">
    <d2-button icon="gg-arrows-breake-h">
      breakPoint {{ breakPoint }}
    </d2-button>
  </the-section>
  <p>sm {{ sm }}</p>
  <p>md {{ md }}</p>
</template>

<script>
import { breakPoints } from 'd2-components/utils/const.js'
import { useBreakPoint } from 'd2-use/break-point.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const result = useBreakPoint({ config: breakPoints })

    console.log(result)

    return {
      breakPoint: result.breakPoint,
      sm: result.sm,
      md: result.md
    }
  }
}
</script>
