<template>
  <the-section title="flex">
    <template v-for="d in flex.dir" :key="d">
      <template v-for="m in flex.main" :key="m">
        <template v-for="c in flex.cross" :key="c">
          <template v-for="b in flex.box" :key="b">
            <d2-flex dir="left" cross="center" class="mb-1">
              <d2-flex
                class="w-24 h-24 p-1 bg-gray-100 hover:bg-indigo-100 group rounded"
                :dir="d"
                :main="m"
                :cross="c"
                :box="b">
                <div
                  v-for="n in 3"
                  :key="n"
                  class="m-1 p-1 bg-indigo-500 group-hover:bg-indigo-600 text-white rounded text-center"/>
              </d2-flex>
              <p class="ml-4 text-lg">
                <span class="text-gray-400 mr-4">dir="<span class="text-indigo-500 mx-1">{{ d }}</span>"</span>
                <span class="text-gray-400 mr-4">main="<span class="text-indigo-500 mx-1">{{ m }}</span>"</span>
                <span class="text-gray-400 mr-4">cross="<span class="text-indigo-500 mx-1">{{ c }}</span>"</span>
                <span class="text-gray-400 mr-4">box="<span class="text-indigo-500 mx-1">{{ b }}</span>"</span>
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
