import {
  isFunction,
  keys,
  mapValues,
  isEqual,
  last,
  isUndefined
} from 'lodash-es'
import {
  defineComponent,
  provide,
  inject,
  reactive,
  watch,
  computed
} from 'vue'
import {
  makeComponentName
} from '../../../utils/name.js'
import {
  breakPoints
} from '../../../utils/const.js'

const namespace = 'config'

const name = makeComponentName(namespace)

export const provideName = '__D2_COMPONENTS_CONFIG__'

export const componentProps = {
  iconCollection: { type: String, default: '' },
  svgSymbolId: { type: String, default: 'icon-[dir]-[name]' },
  svgDir: { type: String, default: '' },
  breakPoints: { type: Object, default: () => breakPoints }
}

export const provideDataDefault = mapValues(
  componentProps,
  (value, key) => getDefault(key)
)

function getDefault (key) {
  const defaultConfig = componentProps?.[key]?.default
  if (isFunction(defaultConfig)) return defaultConfig()
  return defaultConfig
}

function getValid (key, ...values) {
  const defaultValue = getDefault(key)
  return values.find(e => !isEqual(defaultValue, e)) || last(values)
}

function getProvideData (props) {
  if (isUndefined(inject(provideName, undefined))) {
    return reactive({
      ...props
    })
  } else {
    const config = useConfig()
    return reactive(
      mapValues(
        props,
        (value, key) => getValid(key, value, config[key].value)
      )
    )
  }
}

export function useConfig () {
  const config = inject(provideName, provideDataDefault)
  const result = mapValues(
    componentProps,
    (value, key) => computed(() => config[key])
  )
  return result
}

export default defineComponent({
  name,
  props: componentProps,
  setup (props, { slots }) {
    let provideData = getProvideData(props)
    keys(props).forEach(key => {
      watch(
        () => props[key],
        () => {
          provideData[key] = props[key]
        }
      )
    })
    provide(provideName, provideData)
    return () => slots.default?.()
  }
})
