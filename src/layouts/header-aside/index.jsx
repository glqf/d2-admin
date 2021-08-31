import { defineComponent } from 'vue'
import makeClassnames from 'classnames'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'

const name = 'layout-header-aside'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  componentName,
  setup () {
    const classnames = $(() => makeClassnames(classname, {}))
    return {
      classnames
    }
  },
  render () {
    return (
      <div class={ classnames }>
        { this.$slots?.default?.() }
      </div>
    )
  }
})
