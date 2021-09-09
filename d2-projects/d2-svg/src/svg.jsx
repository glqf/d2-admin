import { $ } from 'v-dollar'
import makeClassnames from 'classnames'
import { defineComponent } from 'vue'
import { useConfig } from 'd2-projects/d2-config/index.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'

const name = 'svg'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  name: componentName,
  props: {
    dir: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  setup (props) {
    const { svgSymbolId, svgDir } = useConfig()

    const dir = $(() => props.dir || $(svgDir))

    const href = $(() => {
      const result = $(svgSymbolId)
      return '#' + result
        .replace(/\[dir\]/g, $(dir))
        .replace(/\[name\]/g, props.name)
    })

    const classnames = $(() => makeClassnames(classname, {}))

    return () => (
      <svg class={ $(classnames) } aria-hidden="true">
        <use xlink:href={ $(href) }/>
      </svg>
    )
  }
})
