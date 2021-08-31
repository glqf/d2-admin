import mkCls from 'classnames'
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
    const headerClassnames = $(() => mkCls(`${classname}__header`, {}))
    const asideClassnames = $(() => mkCls(`${classname}__aside`, {}))
    const bodyClassnames = $(() => mkCls(`${classname}__body`, {}))
    return {
      headerClassnames,
      asideClassnames,
      bodyClassnames
    }
  },
  render () {
    const {
      $slots,
      headerClassnames,
      asideClassnames,
      bodyClassnames
    } = this
    const header = (
      <div class={ headerClassnames }>
        header
      </div>
    )
    const aside = (
      <div class={ asideClassnames }>
        side
      </div>
    )
    const body = (
      <div class={ bodyClassnames }>
        { $slots.default?.() }
      </div>
    )
    return [
      body,
      header,
      aside
    ]
  }
})
