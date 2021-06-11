<template>
  <the-section title="flex">
    <template v-for="d in dir" :key="d">
      <template v-for="m in main" :key="m">
        <template v-for="c in cross" :key="c">
          <template v-for="b in box" :key="b">
            <!-- item -->
            <d2-flex dir="left" cross="center" class="row">
              <d2-flex :dir="d" :main="m" :cross="c" :box="b" class="row__flex">
                <div class="flex__item" :class="`flex__item--${n}`" v-for="n in 3" :key="n"/>
              </d2-flex>
              <div class="row__code">
                <span class="code__prop" :class="{ 'code__prop--empty': !d }">dir="<span class="prop__highlight">{{ d }}</span>"</span>
                <span class="code__prop" :class="{ 'code__prop--empty': !m }">main="<span class="prop__highlight">{{ m }}</span>"</span>
                <span class="code__prop" :class="{ 'code__prop--empty': !c }">cross="<span class="prop__highlight">{{ c }}</span>"</span>
                <span class="code__prop" :class="{ 'code__prop--empty': !b }">box="<span class="prop__highlight">{{ b }}</span>"</span>
              </div>
            </d2-flex>
            <!-- item end -->
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
      dir: ['', ...dir],
      main: ['', ...main],
      cross: ['', ...cross],
      box: ['', ...box]
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  @apply mb-4 transition-all rounded-sm;
  &:hover {
    @apply bg-gray-50;
  }
  .row__flex {
    @apply w-24 h-24 p-1 mr-12 bg-gray-50;
    .flex__item {
      @apply p-1 m-1 rounded-sm;
      &.flex__item--1 { @apply bg-indigo-600; }
      &.flex__item--2 { @apply bg-indigo-300; }
      &.flex__item--3 { @apply bg-indigo-100; }
    }
  }
  .row__code {
    @apply text-gray-500;
    .code__prop {
      @apply mr-2;
      &.code__prop--empty {
        @apply text-gray-200;
      }
      .prop__highlight {
        @apply mx-1 text-indigo-500;
      }
    }
  }
}
</style>
