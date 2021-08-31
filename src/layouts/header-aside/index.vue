<style lang="scss" scoped>
.layout-header-aside__body {
  position: absolute;
}
</style>

<template>
  <div class="layout-header-aside__body" :style="positionStyle">
    <slot/>
  </div>
  <div class="layout-header-aside__header">
    header
  </div>
  <div class="layout-header-aside__aside">
    aside
  </div>
</template>

<script setup>
import { useCssPosition } from 'd2-projects/d2-use/use-css-position.js'

const {
  top,
  right,
  bottom,
  left,
  positionStyle
} = useCssPosition(50, 0, 0, 50)
</script>
