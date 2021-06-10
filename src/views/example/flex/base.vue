<template>
  <template v-for="dirValue in flex.dir" :key="dirValue">
    <template v-for="mainValue in flex.main" :key="mainValue">
      <template v-for="crossValue in flex.cross" :key="crossValue">
        <template v-for="boxValue in flex.box" :key="boxValue">
          <the-section :title="`dir:${dirValue} main:${mainValue} cross:${crossValue} box:${boxValue}`">
            <d2-flex
              class="w-32 h-32 p-1 bg-gray-100 rounded"
              :dir="dirValue"
              :main="mainValue"
              :cross="crossValue"
              :box="boxValue">
              <div class="m-1 p-1 bg-indigo-500 text-white rounded text-center"/>
              <div class="m-1 p-1 bg-indigo-500 text-white rounded text-center"/>
              <div class="m-1 p-1 bg-indigo-500 text-white rounded text-center"/>
            </d2-flex>
          </the-section>
        </template>
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
      flex
    }
  }
}
</script>
