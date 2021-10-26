<template>
  <h1 class="title">{{ status.breakPoint }}</h1>
  <d2-flex class="main" center>
    <demo-break-points-display-item
      :value="status.min"
      name="min"
    />
    <demo-break-points-display-item
      v-for="name in breakPointsName"
      :key="name"
      :value="status[name]"
      :name="name"
    />
  </d2-flex>
  <pre class="code">{{ status }}</pre>
</template>

<script>
import { breakPointsName } from 'd2-admin/utils/special/d2-components/const.js'

export default {
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
.title {
  @apply mb-8 text-center text-gray-500 text-9xl;
}
.main {
  @apply mb-8;
}
.code {
  @apply p-4 text-gray-600 border border-gray-100 rounded bg-gray-50;
}
</style>
