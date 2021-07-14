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
          <d2-button
            v-for="_dir in dir"
            :key="_dir"
            :color="dirValue === _dir ? 'indigo' : ''"
            size="small"
            @click="dirValue = _dir"
          >
            {{ _dir || 'default' }}
          </d2-button>
        </div>
        <div class="control__row">
          <p>main</p>
          <d2-button
            v-for="_main in main"
            :key="_main"
            :color="mainValue === _main ? 'indigo' : ''"
            size="small"
            @click="mainValue = _main"
          >
            {{ _main || 'default' }}
          </d2-button>
        </div>
        <div class="control__row">
          <p>cross</p>
          <d2-button
            v-for="_cross in cross"
            :key="_cross"
            :color="crossValue === _cross ? 'indigo' : ''"
            size="small"
            @click="crossValue = _cross"
          >
            {{ _cross || 'default' }}
          </d2-button>
        </div>
        <div class="control__row">
          <p>box</p>
          <d2-button
            v-for="_box in box"
            :key="_box"
            :color="boxValue === _box ? 'indigo' : ''"
            size="small"
            @click="boxValue = _box"
          >
            {{ _box || 'default' }}
          </d2-button>
        </div>
        <div class="control__row">
          <p>space</p>
          <d2-button
            v-for="_space in space"
            :key="_space"
            :color="spaceValue === _space ? 'indigo' : ''"
            size="small"
            @click="spaceValue = _space"
          >
            {{ _space || 'default' }}
          </d2-button>
        </div>
      </div>
    </d2-flex>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { flexProps, spaceNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { dir, main, cross, box } = flexProps

export default {
  components: {
    TheSection
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
