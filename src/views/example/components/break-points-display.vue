<template>
  <h1 class="break-point-display__title">{{ status.breakPoint }}</h1>
  <d2-flex class="break-point-display__data" center>
    <break-points-display-item
      :value="status.min"
      name="min"
    />
    <break-points-display-item
      v-for="name in breakPointsName"
      :key="name"
      :value="status[name]"
      :name="name"
    />
  </d2-flex>
</template>

<script>
import { breakPointsName } from 'd2-components/utils/const.js'
import BreakPointsDisplayItem from './break-points-display-item.vue'

export default {
  components: {
    BreakPointsDisplayItem
  },
  props: {
    status: { type: Object }
  },
  setup () {
    return {
      breakPointsName
    }
  }
}
</script>

<style lang="scss" scoped>
.break-point-display__title {
  @apply mb-4 text-center text-gray-500 text-9xl;
}
</style>
