import makeClassnames from 'classnames'
import { defineComponent } from 'vue'
import { $ } from 'd2-projects/d2-utils/vue.js'
import {
  makeComponentName,
  makeComponentClassName
} from 'd2-projects/d2-utils/special/d2-components/name.js'

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
    const {
      $slots,
      classnames
    } = this
    return (
      <div class={ classnames }>
        layout
        { $slots.default?.() }
      </div>
    )
  }
})
