<template>
  <the-section title="flex">
    <template v-for="d in dir" :key="d">
      <template v-for="m in main" :key="m">
        <template v-for="c in cross" :key="c">
          <template v-for="b in box" :key="b">
            <!-- item -->
            <d2-flex dir="left" cross="center" class="row">
              <d2-flex :dir="d" :main="m" :cross="c" :box="b" class="row__flex">
                <div v-for="n in 3" :key="n" class="flex__item"/>
              </d2-flex>
              <div class="row__code">
                <span class="code__prop">dir="<span class="prop__highlight">{{ d }}</span>"</span>
                <span class="code__prop">main="<span class="prop__highlight">{{ m }}</span>"</span>
                <span class="code__prop">cross="<span class="prop__highlight">{{ c }}</span>"</span>
                <span class="code__prop">box="<span class="prop__highlight">{{ b }}</span>"</span>
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
      flex,
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
    .row__flex {
      .flex__item {
        @apply bg-indigo-500;
      }
    }
  }
  .row__flex {
    @apply w-24 h-24 mr-12 bg-gray-50;
    .flex__item {
      @apply p-1 m-1 transition-all bg-indigo-400 rounded-sm;
    }
  }
  .row__code {
    @apply text-gray-300;
    .code__prop {
      @apply mr-2;
      .prop__highlight {
        @apply mx-1 text-indigo-500;
      }
    }
  }
}
</style>
