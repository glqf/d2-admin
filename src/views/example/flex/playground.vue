<template>
  <the-section title="playground">
    <d2-flex dir="left" box="last">
      <div class="control">
        <div>
          <p>dir</p>
          <d2-button v-for="_dir in dir" :key="_dir" :color="dirValue === _dir ? 'indigo' : ''" size="mini" @click="dirValue = _dir">{{ _dir || 'none = left' }}</d2-button>
        </div>
        <div>
          <p>main</p>
          <d2-button v-for="_main in main" :key="_main" :color="mainValue === _main ? 'indigo' : ''" size="mini" @click="mainValue = _main">{{ _main || 'none = left' }}</d2-button>
        </div>
        <div>
          <p>cross</p>
          <d2-button v-for="_cross in cross" :key="_cross" :color="crossValue === _cross ? 'indigo' : ''" size="mini" @click="crossValue = _cross">{{ _cross || 'none = stretch' }}</d2-button>
        </div>
        <div>
          <p>box</p>
          <d2-button v-for="_box in box" :key="_box" :color="boxValue === _box ? 'indigo' : ''" size="mini" @click="boxValue = _box">{{ _box || 'none' }}</d2-button>
        </div>
      </div>
      <d2-flex main="center" cross="center" class="view">
        <d2-flex class="view__flex" :dir="dirValue" :main="mainValue" :cross="crossValue" :box="boxValue">
          <div class="flex__item" :class="`flex__item--${n}`" v-for="n in 5" :key="n"/>
        </d2-flex>
      </d2-flex>
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

<style lang="scss" scoped>
.control {}
.view {
  .view__flex {
    @apply w-64 h-64 p-1 bg-gray-50;
    .flex__item {
      @apply p-1 m-1 transition-all rounded-sm;
      &.flex__item--1 { @apply bg-indigo-600; }
      &.flex__item--2 { @apply bg-indigo-500; }
      &.flex__item--3 { @apply bg-indigo-400; }
      &.flex__item--4 { @apply bg-indigo-300; }
      &.flex__item--5 { @apply bg-indigo-200; }
    }
  }
}
</style>
