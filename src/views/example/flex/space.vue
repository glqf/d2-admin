<template>
  <the-section title="space off">
    <d2-flex class="flex-example" box="mean">
      <div class="flex-example__item" v-for="n in 3" :key="n"/>
    </d2-flex>
  </the-section>
  <the-section title="space">
    <d2-flex space="large">
      <d2-flex class="flex-example" space>
        <div class="flex-example__item" v-for="n in 3" :key="n" box="mean"/>
      </d2-flex>
      <d2-flex v-for="size in buttonSizeNames" :key="size" class="flex-example" :space="size" box="mean">
        <div class="flex-example__item" v-for="n in 3" :key="n"/>
      </d2-flex>
    </d2-flex>
  </the-section>
  <the-section v-for="_dir in dir" :key="_dir" :title="`dir:${_dir}`">
    <d2-flex space="large">
      <d2-flex class="flex-example" :dir="_dir" space>
        <div class="flex-example__item" v-for="n in 3" :key="n" box="mean"/>
      </d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import { buttonSizeNames, flexProps } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { dir } = flexProps

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      buttonSizeNames,
      dir
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-example {
  @apply w-24 h-24 p-1 bg-gray-100 rounded;
  .flex-example__item {
    @apply p-1 rounded-sm bg-indigo-500;
    &.flex-example__item--1 { @apply bg-indigo-600; }
  }
}
</style>
