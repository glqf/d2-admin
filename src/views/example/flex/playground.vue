<template>
  <the-section title="playground">
    <d2-flex dir="left" box="first">
      <d2-flex main="center" cross="center" class="view">
        <d2-flex
          class="flex"
          :dir="dirValue"
          :main="mainValue"
          :cross="crossValue"
          :box="boxValue"
          :space="spaceValue"
        >
          <d2-flex
            class="flex__item"
            :class="`flex__item--${n}`"
            v-for="n in 5"
            :key="n"
            center
          >
            {{ n }}
          </d2-flex>
        </d2-flex>
      </d2-flex>
      <div class="control">
        <div class="control__row">
          <p>dir</p>
          <playground-control :options="dir" v-model:value="dirValue"/>
        </div>
        <div class="control__row">
          <p>main</p>
          <playground-control :options="main" v-model:value="mainValue"/>
        </div>
        <div class="control__row">
          <p>cross</p>
          <playground-control :options="cross" v-model:value="crossValue"/>
        </div>
        <div class="control__row">
          <p>box</p>
          <playground-control :options="box" v-model:value="boxValue"/>
        </div>
        <div class="control__row">
          <p>space</p>
          <playground-control :options="space" v-model:value="spaceValue"/>
        </div>
      </div>
    </d2-flex>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { flexProps, spaceNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'
import PlaygroundControl from '../components/playground-control.vue'

const { dir, main, cross, box } = flexProps

export default {
  components: {
    TheSection,
    PlaygroundControl
  },
  setup () {
    const dirValue = ref('')
    const mainValue = ref('')
    const crossValue = ref('')
    const boxValue = ref('')
    const spaceValue = ref('base')

    return {
      dir: ['', ...dir],
      dirValue,
      main: ['', ...main],
      mainValue,
      cross: ['', ...cross],
      crossValue,
      box: ['', ...box],
      boxValue,
      space: [false, ...spaceNames],
      spaceValue
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  @apply mr-4;
  .flex {
    @apply w-64 h-64 p-1 bg-gray-100;
    .flex__item {
      @apply p-2 text-white transition-all rounded-sm;
      &.flex__item--1 { @apply bg-indigo-700; }
      &.flex__item--2 { @apply bg-indigo-600; }
      &.flex__item--3 { @apply bg-indigo-500; }
      &.flex__item--4 { @apply bg-indigo-400; }
      &.flex__item--5 { @apply bg-indigo-300; }
    }
  }
}
.control {
  .control__row {
    @apply mb-2;
    p {
      @apply mb-2 text-gray-500;
    }
  }
}
</style>
