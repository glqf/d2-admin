<route>
{}
</route>

<template>
  <d2-scroll ref="scrollbar" class="body__main">
    <div class="main__inner" :style="scrollInnerStyle">
      <slot/>
    </div>
  </d2-scroll>
  <d2-size-sensor class="body__header container__blur" @resize="onHeaderResize">
    {{ cssVar }}
    <slot name="header"/>
  </d2-size-sensor>
  <d2-size-sensor class="body__footer container__blur" @resize="onFooterResize">
    <slot name="footer"/>
  </d2-size-sensor>
</template>

<script>
import { computed, ref } from 'vue'
import { makeNameByUrl } from 'd2/utils/component.js'
import { px } from 'd2/utils/css.js'
import { useCssVar } from 'd2/use/css-var.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup (props, { slots }) {
    const scrollbar = ref(null)

    const header = ref(null)
    const footer = ref(null)

    const headerHeight = ref(0)
    const footerHeight = ref(0)

    const cssVar = useCssVar('--d2-admin-layout-dashboard-body-padding')

    const scrollInnerStyle = computed(() => ({
      paddingTop: px(headerHeight),
      paddingBottom: px(footerHeight)
    }))

    function onHeaderResize ({ style }) {
      const { offsetHeight } = style
      headerHeight.value = offsetHeight
    }

    function onFooterResize ({ style }) {
      const { offsetHeight } = style
      footerHeight.value = offsetHeight
    }

    function getScrollbarVertical () {
      return scrollbar.value.$el.getElementsByClassName('os-scrollbar-vertical')[0]
    }

    function updateScrollbarVerticalMarginTop () {
      const scrollbarVertical = getScrollbarVertical()
      scrollbarVertical.style.top = px(value)
    }

    function updateScrollbarVerticalMarginBottom () {
      const scrollbarVertical = getScrollbarVertical()
      scrollbarVertical.style.bottom = px(value)
    }

    // onMounted(() => {
    //   console.log(slots.default)
    //   console.log(slots.header)
    //   console.log(slots.footer)
    //   bind(header.value, element => {
    //     headerHeight.value = element.offsetHeight
    //     const scrollbarElement = scrollbar.value.$el
    //     const scrollbarVertical = scrollbarElement.getElementsByClassName('os-scrollbar-vertical')[0]
    //     const scrollInner = document.getElementsByClassName('main__inner')[0]
    //     let scrollInnerMarginTop = getStyle(scrollInner, 'marginTop')
    //     scrollbarVertical.style.top = px(Number(scrollInnerMarginTop.replace('px', '')) + element.offsetHeight)
    //   })
    //   bind(footer.value, element => {
    //     footerHeight.value = element.offsetHeight
    //     const scrollbarElement = scrollbar.value.$el
    //     const scrollbarVertical = scrollbarElement.getElementsByClassName('os-scrollbar-vertical')[0]        
    //     scrollbarVertical.style.bottom = px(element.offsetHeight)
    //   })
    // })

    return {
      cssVar,
      scrollbar,
      header,
      footer,
      scrollInnerStyle,
      onHeaderResize,
      onFooterResize
    }
  }
}
</script>
