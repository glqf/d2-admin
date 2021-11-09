<template>
  <div :class="`${classname}__body`" :style="bodyStyle">
    <d2-scroll class="body__scroll">
      <router-view/>
    </d2-scroll>
  </div>
  <div :class="`${classname}__header`" :style="headerStyle">
    <d2-admin-layout-header-aside-menu-header/>
  </div>
  <div :class="`${classname}__aside`" :style="asideStyle">
    <d2-scroll class="aside__scroll">
      <d2-admin-layout-header-aside-menu-aside/>
    </d2-scroll>
  </div>
</template>

<script>
import { makeNameByUrl, makeClassNameByUrl } from 'd2/utils/component.js'
import { computed, ref } from 'vue'
// import { storeToRefs } from 'pinia'
import { cssUnit } from 'd2/utils/css.js'
import { useCssPosition } from 'd2/use/css-position.js'
// import { useD2AdminLayoutHeaderAsideStore } from 'd2/components/d2/admin/layout/header-aside/store/index.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const classname = makeClassNameByUrl(import.meta.url)

    // const d2AdminLayoutHeaderAsideStore = useD2AdminLayoutHeaderAsideStore()
    // const { isCustomBody } = storeToRefs(d2AdminLayoutHeaderAsideStore)
    
    const headerHeight = ref(46)
    const asideWidth = ref(200)

    const { style: bodyStyle } = useCssPosition(headerHeight, 0, 0, asideWidth)

    const headerStyle = computed(() => ({
      height: cssUnit(headerHeight),
      left: cssUnit(asideWidth)
    }))

    const asideStyle = computed(() => ({
      width: cssUnit(asideWidth)
    }))

    return {
      classname,
      bodyStyle,
      headerStyle,
      asideStyle
    }
  }
}
</script>
