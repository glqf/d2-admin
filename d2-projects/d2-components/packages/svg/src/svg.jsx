import {
  defineComponent,
  computed
} from 'vue'
import makeClassnames from 'classnames'
import {
  useConfig
} from '../../config/src/config.jsx'
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

    const dir = computed(() => props.dir || svgDir.value)

    const href = computed(() => {
      const result = svgSymbolId.value
      return '#' + result
        .replace(/\[dir\]/g, dir.value)
        .replace(/\[name\]/g, props.name)
    })

    const classnames = computed(() => makeClassnames(classname, {}))

    return () => (
      <svg class={ classnames.value } aria-hidden="true">
        <use xlink:href={ href.value }/>
      </svg>
    )
  }
})
