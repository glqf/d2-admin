import {
  fromPairs,
  isFunction,
  keys,
  mapValues,
  isEqual
} from 'lodash-es'
import {
  defineComponent,
  provide,
  inject,
  computed,
  reactive,
  watch
} from 'vue'
import { makeComponentName } from '../../../utils/name.js'

const namespace = 'config'

const name = makeComponentName(namespace)

export const provideKey = '__D2_COMPONENTS_CONFIG__'

export const provideDataDefault = {}

const componentProps = {
  iconCollection: { type: String, default: '' }
}

function propDefault (key) {
  const defaultConfig = componentProps?.[key]?.default
  if (isFunction(defaultConfig)) return defaultConfig()
  return defaultConfig
}

function validProp (key, ...values) {
  const defaultValue = propDefault(key)
  return values.find(e => !isEqual(defaultValue, e))
}

export function useConfig () {
  const config = inject(provideKey, provideDataDefault)
  const result = fromPairs(
    keys(componentProps).map(key => [
      key,
      computed(() => config[key])
    ])
  )
  return result
}

export default defineComponent({
  name,
  props: componentProps,
  setup (props, { slots }) {
    const config = useConfig()
    const provideData = reactive(
      mapValues(
        props,
        (value, key) => validProp(key, value, config[key].value)
      )
    )
    keys(props).forEach(key => {
      watch(
        () => props[key],
        () => {
          provideData[key] = props[key]
        }
      )
    })
    provide(provideKey, provideData)
    return () => slots.default?.()
  }
})
