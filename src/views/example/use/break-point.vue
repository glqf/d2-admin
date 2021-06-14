<template>
  <the-section title="window size">
    <d2-button icon="gg:arrows-breake-h">
      breakPoint {{ breakPoint }}
    </d2-button>
  </the-section>
  <the-section title="data">
    <div class="group">
      <p :class="{ active: min }">
        <span>min</span><span>{{ min }}</span>
      </p>
      <p :class="{ active: sm }">
        <span>sm</span><span>{{ sm }}</span>
      </p>
      <p :class="{ active: md }">
        <span>md</span><span>{{ md }}</span>
      </p>
      <p :class="{ active: lg }">
        <span>lg</span><span>{{ lg }}</span>
      </p>
      <p :class="{ active: xl }">
        <span>xl</span><span>{{ xl }}</span>
      </p>
      <p :class="{ active: xxl }">
        <span>xxl</span><span>{{ xxl }}</span>
      </p>
    </div>
  </the-section>
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
    const { breakPoint, sm, md, lg, xl, xxl, min } = useBreakPoint({ config: breakPoints })

    return { breakPoint, sm, md, lg, xl, xxl, min }
  }
}
</script>

<style lang="scss" scoped>
.group {
  p {
    @apply mb-1 text-gray-300;
    span {
      &:first-child {
        @apply inline-block w-8;
      }
    }
    &.active {
      @apply text-gray-500;
      span {
        &:last-child {
          @apply text-indigo-500;
        }
      }
    }
  }
}
</style>
