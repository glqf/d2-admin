<route>
{}
</route>

<template>
  <d2-scroll ref="scrollbar" :class="bodyClass">
    <div class="main__inner" :style="scrollInnerStyle">
      <slot/>
    </div>
  </d2-scroll>
  <d2-size-sensor v-if="headerActive" class="body__header container__blur" @resize="onHeaderResize">
    <slot name="header"/>
  </d2-size-sensor>
  <d2-size-sensor v-if="footerActive" class="body__footer container__blur" @resize="onFooterResize">
    <slot name="footer"/>
  </d2-size-sensor>
</template>

<script>
import { computed, onMounted, onUpdated, ref, unref, watchPostEffect } from 'vue'
import { useCssVar } from '@vueuse/core'
import makeClassnames from 'classnames'
import { makeNameByUrl } from 'd2/utils/component.js'
import { px, convertCssUnit } from 'd2/utils/css.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup (props, { slots }) {
    const cssVarHeaderHeight = computed(() => convertCssUnit(useCssVar('--d2-admin-layout-dashboard-header-height')))
    const cssVarHeaderBorderWidth = computed(() => convertCssUnit(useCssVar('--d2-admin-layout-dashboard-header-border-width')))

    const scrollbar = ref(null)

    const headerActive = ref(false)
    const footerActive = ref(false)

    const bodyHeaderHeight = ref(0)
    const bodyFooterHeight = ref(0)

    const bodyTopBase = computed(() => unref(cssVarHeaderHeight) + unref(cssVarHeaderBorderWidth))
    const scrollbarVerticalTop = computed(() => unref(bodyTopBase) + unref(bodyHeaderHeight))

    const scrollInnerStyle = computed(() => ({
      ...(unref(headerActive) ? { paddingTop: px(bodyHeaderHeight) } : {}),
      ...(unref(footerActive) ? { paddingBottom: px(bodyFooterHeight) } : {})
    }))

    const bodyClass = computed(() => makeClassnames('body__main', {
      'body__main--with-header': unref(headerActive),
      'body__main--with-footer': unref(footerActive)
    }))

    function onHeaderResize (element) {
      bodyHeaderHeight.value = element.offsetHeight
    }

    function onFooterResize (element) {
      bodyFooterHeight.value = element.offsetHeight
    }

    function getScrollbarVertical () {
      return scrollbar.value.$el.getElementsByClassName('os-scrollbar-vertical')[0]
    }

    function refreshSlotStatus () {
      headerActive.value = !!slots.header
      footerActive.value = !!slots.footer
      if (!unref(headerActive)) {
        bodyHeaderHeight.value = 0
      }
      if (!unref(footerActive)) {
        bodyFooterHeight.value = 0
      }
    }

    refreshSlotStatus()
    onUpdated(() => {
      refreshSlotStatus()
    })
    
    onMounted(() => {
      watchPostEffect(() => {
        getScrollbarVertical().style.top = px(scrollbarVerticalTop)
      })
      watchPostEffect(() => {
        getScrollbarVertical().style.bottom = px(bodyFooterHeight)
      })
    })

    return {
      scrollbar,
      scrollInnerStyle,
      bodyClass,
      onHeaderResize,
      onFooterResize,
      headerActive,
      footerActive
    }
  }
}
</script>
