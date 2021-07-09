<template>
  <d2-flex dir="top" cross="center" class="item">
    <d2-icon
      v-if="value"
      class="item__icon item__icon--active"
      icon="akar-icons:circle-check-fill"
    />
    <d2-icon
      v-else
      class="item__icon"
      icon="akar-icons:circle-x"
    />
    <span class="item__label">
      {{ name }}
    </span>
  </d2-flex>
</template>

<script>
export default {
  props: {
    value: { type: Boolean },
    name: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.item {
  @apply w-14;
  .item__label {
    @apply text-lg text-gray-500;
  }
  .item__icon {
    @apply text-2xl text-gray-300;
    &.item__icon--active {
      @apply text-green-500;
    }
  }
}
</style>