<template>
  <template v-for="dirValue in flex.dir" :key="dirValue">
    <template v-for="mainValue in flex.main" :key="mainValue">
      <template v-for="crossValue in flex.cross" :key="crossValue">
        <the-section :title="`dir:${dirValue} main:${mainValue} cross:${crossValue}`">
          <d2-flex :class="ground" :main="mainValue" :cross="crossValue" :dir="dirValue">
            <div :class="point">1</div>
            <div :class="point">2</div>
            <div :class="point">3</div>
          </d2-flex>
        </the-section>
      </template>
    </template>
  </template>
</template>

<script>
import { flex } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      flex,
      ground: 'w-32 h-32 p-1 bg-gray-100 rounded',
      point: 'd2-flex m-1 bg-indigo-500'
    }
  }
}
</script>
