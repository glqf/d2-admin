<style lang="scss" scoped>
.d2-scroll--demo {
  height: 200px;
  width: 200px;
  .row {
    @apply cursor-pointer px-4 py-2 bg-gray-700 text-gray-100 border-b border-gray-800;
    &:hover {
      @apply bg-gray-800 text-gray-200;
    }
    &:last-child {
      @apply border-b-0;
    }
  }
}
</style>

<template>
  <d2-scroll class="d2-scroll--demo">
    <div class="row" v-for="n in 100" :key="n">
      n: {{ n }}
    </div>
  </d2-scroll>
</template>
