import { defineComponent, provide, reactive, watch } from 'vue'
import { getSlot } from 'd2-utils/vue.js'

export const provideKey = '__D2_COMPONENTS_CONFIG__'

export default defineComponent({
  name: 'D2ComponentsConfig',
  props: {
    iconCollection: { type: String, default: '' }
  },
  setup (props) {
    const provideData = reactive({
      ...props
    })
    Object.keys(props).forEach(key => {
      watch(
        () => props[key],
        () => {
          provideData[key] = props[key]
        }
      )
    })
    provide(provideKey, provideData)
  },
  render () {
    return getSlot(this)
  }
})
