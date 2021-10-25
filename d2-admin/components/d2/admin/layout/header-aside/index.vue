<style lang="scss" scoped>
.layout-header-aside__body {
  position: absolute;
}
.layout-header-aside__header {
  position: absolute;
  top: 0;
  right: 0;
}
.layout-header-aside__aside {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #F1F3F4;
}
</style>

<template>
  <div class="layout-header-aside__body" :style="position">
    <d2-scroll class="w-full h-full">
      <slot/>
    </d2-scroll>
  </div>
  <div class="layout-header-aside__header" :style="headerStyle">
    <d2-admin-layout-header-aside-menu-horizontal/>
  </div>
  <div class="layout-header-aside__aside" :style="asideStyle">
    <d2-scroll class="w-full h-full">
      <d2-admin-layout-header-aside-menu-vertical/>
    </d2-scroll>
  </div>
</template>

<script>
import { makeComponentName } from 'd2-projects/d2-utils/special/d2-components/name.js'

export default {
  name: makeComponentName('admin/layout/header-aside')
}
</script>

<script setup>
import { computed, ref } from 'vue'
import { px } from 'd2-projects/d2-utils/css.js'
import { useCssPosition } from 'd2-projects/d2-use/use-css-position.js'

const headerHeight = ref(61)
const asideWidth = ref(200)

const { position } = useCssPosition(headerHeight, 0, 0, asideWidth)

const headerStyle = computed(() => ({
  height: px(headerHeight),
  left: px(asideWidth)
}))

const asideStyle = computed(() => ({
  width: px(asideWidth)
}))
</script>
