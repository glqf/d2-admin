import { defineComponent, provide, reactive } from 'vue'
import { makeComponentName } from '../../../utils/make.js'
import { breakPoints } from '../../../utils/const.js'

export const name = makeComponentName('config-provider')

const configDefault = {
  svgPrefix: '',
  svgNames: [],
  size: '',
  iconCollection: '',
  windowResizeThrottleWait: 100,
  breakPoints
}

console.log(JSON.stringify(configDefault, null, 2))

export default defineComponent({
  name,
  props: {

  },
  setup (props, { slots }) {
    const data = reactive({
      ...props
    })
    Object.keys(props).forEach(key => {
      watch(
        () => props[key],
        () => {
          data[key] = props[key]
        }
      )
    })
    provide(name, data)
    return () => slots.default && slots.default()
  }
})
