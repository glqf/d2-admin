<template>
  <the-section title="break point">
    <d2-break-point v-slot="status">
      <h1 class="break-point__title">{{ status.breakPoint }}</h1>
      <d2-flex class="break-point__data" center>
        <d2-flex dir="top" class="data__item">
          <d2-icon v-if="status.min" class="item__icon item__icon--active" icon="akar-icons:circle-check-fill"/>
          <d2-icon v-else class="item__icon" icon="akar-icons:circle-x"/>
          <span class="item__label">min</span>
        </d2-flex>
        <d2-flex v-for="name in breakPointsName" :key="name" dir="top" class="data__item">
          <d2-icon v-if="status[name]" class="item__icon item__icon--active" icon="akar-icons:circle-check-fill"/>
          <d2-icon v-else class="item__icon" icon="akar-icons:circle-x"/>
          <span class="item__label">{{ name }}</span>
        </d2-flex>
      </d2-flex>
    </d2-break-point>
  </the-section>
</template>

<script>
import { breakPointsName } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      breakPointsName
    }
  }
}
</script>

<style lang="scss" scoped>
.break-point__title {
  @apply mb-4 text-center text-gray-500 text-9xl;
}
.break-point__data {
  @apply text-lg text-center;
  .data__item {
    @apply w-14;
    .item__label {
      @apply text-gray-500;
    }
    .item__icon {
      @apply text-gray-300;
      &.item__icon--active {
        @apply text-green-500;
      }
    }
  }
}
</style>
