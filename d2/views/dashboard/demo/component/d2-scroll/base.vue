<style lang="scss" scoped>
.d2-scroll--demo {
  height: 200px;
  width: 200px;
  .row {
    @apply px-4 py-2 text-gray-100 bg-gray-700 border-b border-gray-800 cursor-pointer;
    &:hover {
      @apply text-gray-200 bg-gray-800;
    }
    &:last-child {
      @apply border-b-0;
    }
  }
}
</style>

<route>
{
  "meta": {
    "d2admin.menu.title": "-"
  }
}
</route>

<template>
  <d2-scroll class="d2-scroll--demo">
    <div class="row" v-for="n in 100" :key="n">
      n: {{ n }}
    </div>
  </d2-scroll>
</template>
