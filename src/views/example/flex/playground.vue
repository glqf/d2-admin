<template>
  <the-section title="flex">
    <d2-flex
      class="w-36 h-36 p-1 bg-gray-100 rounded"
      :dir="dirValue"
      :main="mainValue"
      :cross="crossValue"
      :box="boxValue">
      <div
        v-for="n in 3"
        :key="n"
        class="m-1 p-1 bg-gray-200 group-hover:bg-indigo-500 text-white rounded text-center"/>
    </d2-flex>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { flex } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { dir, main, cross, box } = flex

export default {
  components: {
    TheSection
  },
  setup () {
    const dirValue = ref('')
    const mainValue = ref('')
    const crossValue = ref('')
    const boxValue = ref('')
    return {
      flex,
      dir: ['', ...dir],
      dirValue,
      main: ['', ...main],
      mainValue,
      cross: ['', ...cross],
      crossValue,
      box: ['', ...box],
      boxValue
    }
  }
}
</script>
