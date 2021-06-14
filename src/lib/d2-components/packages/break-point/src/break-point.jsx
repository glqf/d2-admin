import { defineComponent, computed, unref } from 'vue'
import { useConfigForD2Components } from '../../../use/config.js'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'
import { useBreakPoint } from '../../../use/break-point.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: {
    config: { type: Object }
  },
  setup (props, { slots }) {
    const $D2COM = useConfigForD2Components()

    const breakPointConfig = computed(() => props.config || $D2COM.breakPoints)

    const { breakPoint } = useBreakPoint(breakPointConfig.value)

    provide('name', computed(() => breakPoint))
    
    return () => slots.default?.({
      breakPoint: unref(breakPoint)
    })
  }
})
