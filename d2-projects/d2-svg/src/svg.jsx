import {
  defineComponent,
  computed,
  unref
} from 'vue'
import makeClassnames from 'classnames'
import {
  useConfig
} from 'd2-projects/d2-config/src/config.jsx'
import {
  makeComponentName,
  makeComponentClassName
} from 'd2-projects/d2-utils/special/d2-components/name.js'

const namespace = 'svg'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  props: {
    dir: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  setup (props) {
    const { svgSymbolId, svgDir } = useConfig()

    const dir = computed(() => props.dir || unref(svgDir))

    const href = computed(() => {
      const result = unref(svgSymbolId)
      return '#' + result
        .replace(/\[dir\]/g, unref(dir))
        .replace(/\[name\]/g, props.name)
    })

    const classnames = computed(() => makeClassnames(classname, {}))

    return () => (
      <svg class={ unref(classnames) } aria-hidden="true">
        <use xlink:href={ unref(href) }/>
      </svg>
    )
  }
})
