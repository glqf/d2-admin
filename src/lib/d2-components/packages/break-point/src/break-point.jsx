import { defineComponent, computed } from 'vue'
import { useGlobalConfig } from '../../../utils/config.js'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  setup (props, { slots }) {
    const $D2COMPONENT = useGlobalConfig()

    provide('name', computed(() => 'hhh'))
    
    return () => slots.default?.()
  }
})
