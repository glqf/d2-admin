import makeClassnames from 'classnames'
import { defineComponent } from 'vue'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { fromPairs } from 'lodash-es'
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
    const elements = [
      'header',
      'aside',
      'body'
    ]
    const classnames = fromPairs(elements.map(e => [
      e,
      $(() => makeClassnames(`${classname}__${e}`, {}))
    ]))
    return {
      classnames
    }
  },
  render () {
    const {
      $slots,
      classnames
    } = this
    const header = (
      <div class={ $(classnames.header) }>
        header
      </div>
    )
    const aside = (
      <div class={ $(classnames.aside) }>
        side
      </div>
    )
    const body = (
      <div class={ $(classnames.body) }>
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
