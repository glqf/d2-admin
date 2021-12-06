<route>
{}
</route>

<template>
  <d2-scroll ref="scrollbar" class="body__scroll">
    <div class="scroll__body" :style="scrollInnerStyle">
      <slot/>
    </div>
  </d2-scroll>
  <div ref="header" class="body__header container__blur">
    <slot name="header"/>
  </div>
  <div ref="footer" class="body__footer container__blur">
    <slot name="footer"/>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onBeforeUpdate, onMounted, ref } from 'vue'
import { bind, clear } from 'size-sensor'
import { makeNameByUrl } from 'd2/utils/component.js'
import { cssUnit } from 'd2/utils/css.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup (props, { slots }) {
    const scrollbar = ref(null)

    const header = ref(null)
    const footer = ref(null)

    const headerHeight = ref(0)
    const footerHeight = ref(0)

    const scrollInnerStyle = computed(() => ({
      paddingTop: cssUnit(headerHeight.value),
      paddingBottom: cssUnit(footerHeight.value)
    }))

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onMounted(() => {
      console.log(slots.default)
      console.log(slots.header)
      console.log(slots.footer)
      bind(header.value, element => {
        headerHeight.value = element.offsetHeight
        const scrollbarElement = scrollbar.value.$el
        const scrollbarVertical = scrollbarElement.getElementsByClassName('os-scrollbar-vertical')[0]
        const scrollInner = document.getElementsByClassName('scroll__body')[0]
        let scrollInnerMarginTop = 0


        if (window.getComputedStyle) {
          scrollInnerMarginTop = getComputedStyle(scrollInner, null).marginTop
        } else {
          scrollInnerMarginTop = scrollInner.currentStyle.marginTop // IE
        }
        
        scrollbarVertical.style.top = cssUnit(Number(scrollInnerMarginTop.replace('px', '')) + element.offsetHeight)
      })
      bind(footer.value, element => {
        footerHeight.value = element.offsetHeight
        const scrollbarElement = scrollbar.value.$el
        const scrollbarVertical = scrollbarElement.getElementsByClassName('os-scrollbar-vertical')[0]        
        scrollbarVertical.style.bottom = cssUnit(element.offsetHeight)
      })
    })

    onBeforeUnmount(() => {
      clear(header.value)
      clear(footer.value)
    })

    return {
      scrollbar,
      header,
      footer,
      scrollInnerStyle
    }
  }
}
</script>
