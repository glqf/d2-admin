<template>
  <the-section title="flex">
    <template v-for="d in dir" :key="d">
      <template v-for="m in main" :key="m">
        <template v-for="c in cross" :key="c">
          <template v-for="b in box" :key="b">
            <d2-flex dir="left" cross="center" class="mb-4 group">
              <d2-flex
                class="w-36 h-36 p-1 bg-gray-100 rounded"
                :dir="d"
                :main="m"
                :cross="c"
                :box="b">
                <div
                  v-for="n in 3"
                  :key="n"
                  class="m-1 p-1 bg-gray-200 group-hover:bg-indigo-500 text-white rounded text-center"/>
              </d2-flex>
              <p class="ml-4 text-lg bg-gray-100 group-hover:bg-indigo-500 text-gray-400 group-hover:text-indigo-300 px-4 py-1 rounded">
                <span class="mr-4">dir="<span class="text-indigo-500 group-hover:text-white mx-1">{{ d }}</span>"</span>
                <span class="mr-4">main="<span class="text-indigo-500 group-hover:text-white mx-1">{{ m }}</span>"</span>
                <span class="mr-4">cross="<span class="text-indigo-500 group-hover:text-white mx-1">{{ c }}</span>"</span>
                <span>box="<span class="text-indigo-500 group-hover:text-white mx-1">{{ b }}</span>"</span>
              </p>
            </d2-flex>
          </template>
        </template>
      </template>
    </template>
  </the-section>
</template>

<script>
import { flex } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { dir, main, cross, box } = flex

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      flex,
      dir: ['', ...dir],
      main: ['', ...main],
      cross: ['', ...cross],
      box: ['', ...box]
    }
  }
}
</script>
