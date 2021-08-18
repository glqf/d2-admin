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
} from '../../../utils/name.js'

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

    const _dir = computed(() => props._dir || svgDir.value)

    const href = computed(() => {
      let result = svgSymbolId.value
      return props.name
    })

    const classnames = computed(() => makeClassnames(classname, {}))

    return () => (
      <svg class={ classnames.value } aria-hidden="true">
        <use xlink:href={ href.value }></use>
      </svg>
    )
  }
})
