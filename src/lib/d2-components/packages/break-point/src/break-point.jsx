import { defineComponent, computed, unref } from 'vue'
import { fromPairs, keys } from 'lodash-es'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'
import { useBreakPoint } from '../../../use/break-point.js'
import { useConfigForD2Components } from 'd2-components/use/config.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  setup (props, { slots }) {
    const $D2COM = useConfigForD2Components()

    const config = $D2COM.breakPoints

    const names = keys(config)

    const status = useBreakPoint()

    provide('name', computed(() => status.breakPoint))

    const data = computed(() => ({
      breakPoint: unref(status.breakPoint),
      min: unref(status.min),
      ...fromPairs(names.map(e => [e, unref(status[e])]))
    }))
    
    return () => slots.default?.(unref(data))
  }
})
