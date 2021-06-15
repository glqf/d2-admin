import { defineComponent, computed, unref } from 'vue'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'
import { useBreakPoint } from '../../../use/break-point.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  setup (props, { slots }) {
    const { breakPoint } = useBreakPoint()

    provide('name', computed(() => breakPoint))
    
    return () => slots.default?.({
      breakPoint: unref(breakPoint)
    })
  }
})
