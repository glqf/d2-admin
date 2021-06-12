<template>
  <the-section title="nesting">
    <d2-flex class="outer" box="mean">
      <d2-flex class="inner" style="align-self: flex-start;">
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </d2-flex>
      <d2-flex class="inner" cross="center" box="mean" flex>
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.outer {
  @apply w-36 h-36 p-1 bg-gray-100 rounded;
  .inner {
    @apply text-center m-1 p-1 bg-gray-200 rounded;
  }
}
</style>
