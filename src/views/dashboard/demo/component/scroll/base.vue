<style lang="scss" scoped>
.d2-scroll--demo {
  @apply w-64 h-64 border border-blue-500 rounded;
}
</style>

<template>
  <d2-scroll class="d2-scroll--demo">
    <p v-for="n in 100" :key="n">n: {{ n }}</p>
  </d2-scroll>
</template>
