import { defineComponent, computed, unref } from 'vue'
import { useGlobalConfig } from '../../../utils/config.js'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'
import { useBreakPoint } from 'd2-use/break-point.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: {
    config: { type: Object }
  },
  setup (props, { slots }) {
    const $D2COMPONENT = useGlobalConfig()

    const config = props.config || $D2COMPONENT.breakPoints

    const { breakPoint } = useBreakPoint({ config })

    provide('name', computed(() => breakPoint))
    
    return () => slots.default?.({
      breakPoint: unref(breakPoint)
    })
  }
})
