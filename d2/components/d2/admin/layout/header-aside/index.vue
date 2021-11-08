<template>
  <div :class="`${classname}__body`" :style="position">
    <d2-scroll class="w-full h-full">
      <slot/>
    </d2-scroll>
  </div>
  <div :class="`${classname}__header`" :style="headerStyle">
    <d2-admin-layout-header-aside-menu-header/>
  </div>
  <div :class="`${classname}__aside`" :style="asideStyle">
    <d2-scroll class="w-full h-full">
      <d2-admin-layout-header-aside-menu-aside/>
    </d2-scroll>
  </div>
</template>

<script>
import { makeNameByUrl, makeClassNameByUrl } from 'd2/utils/component.js'
import { computed, ref, unref } from 'vue'
import { cssUnit } from 'd2/utils/css.js'
import { useCssPosition } from 'd2/use/css-position.js'

const classname = makeClassNameByUrl(import.meta.url)

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const headerHeight = ref(46)
    const asideWidth = ref(200)

    const { position } = useCssPosition(headerHeight, 0, 0, asideWidth)

    const headerStyle = computed(() => ({
      height: cssUnit(unref(headerHeight)),
      left: cssUnit(unref(asideWidth))
    }))

    const asideStyle = computed(() => ({
      width: cssUnit(unref(asideWidth))
    }))

    return {
      classname,
      position,
      headerStyle,
      asideStyle
    }
  }
}
</script>
