import { defineComponent, computed, unref } from 'vue'
import { useConfig } from '../../../utils/config.js'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'
import { useBreakPoint } from '../../../use/break-point.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: {
    config: { type: Object },
    wait: { type: Number },
    min: { type: String }
  },
  setup (props, { slots }) {
    const $D2COM = useConfig()

    const breakPointConfig = computed(() => props.config || $D2COM.breakPoints)

    const breakPointWait = computed(() => props.wait || $D2COM.breakPointWait)

    const breakPointMin = computed(() => props.min || $D2COM.breakPointMin)

    const { breakPoint } = useBreakPoint({
      config: breakPointConfig.value,
      wait: breakPointWait.value,
      min: breakPointMin.value
    })

    provide('name', computed(() => breakPoint))
    
    return () => slots.default?.({
      breakPoint: unref(breakPoint)
    })
  }
})
