<template>
  <the-section title="nesting with out d2-flex if no special settings">
    <d2-flex class="outer" cross="center" box="mean">
      <div class="inner">
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </div>
      <d2-flex class="inner" cross="center" box="mean" flex>
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </d2-flex>
    </d2-flex>
  </the-section>
  <the-section title="nesting by d2-flex and has special settings">
    <d2-flex class="outer" cross="center" box="mean">
      <d2-flex class="inner" order="2" self="bottom" display="block">
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
  @apply w-36 h-36 p-1 bg-indigo-500 rounded;
  .inner {
    @apply text-center p-1 bg-white text-indigo-500 rounded;
  }
}
</style>
