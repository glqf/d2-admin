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
  reactive,
  watch,
  computed
} from 'vue'
import {
  useContext
} from 'd2-projects/d2-use/context.js'
import {
  makeComponentName
} from 'd2-projects/d2-utils/special/d2-components/name.js'
import {
  breakPoints
} from 'd2-projects/d2-utils/special/d2-components/const.js'

const namespace = 'config'

const name = makeComponentName(namespace)

const {
  provide,
  inject
} = useContext(namespace)

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
  if (isUndefined(inject())) {
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
  const config = inject(provideDataDefault)
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
    provide(provideData)
    return () => slots.default?.()
  }
})
