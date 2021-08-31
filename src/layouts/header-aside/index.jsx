import makeClassnames from 'classnames'
import { defineComponent } from 'vue'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { fromPairs } from 'lodash-es'
import {
  makeComponentName,
  makeComponentClassName
} from 'd2-projects/d2-utils/special/d2-components/name.js'
import D2Scrollbar from 'd2-projects/d2-scrollbar/index.js'

const name = 'layout-header-aside'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  componentName,
  setup () {
    function bemE (e, b = classname) {
      return `${b}__${e}`
    }
    return {
      bemE
    }
  },
  render () {
    const {
      $slots,
      bemE
    } = this
    const header = (
      <div class={ bemE('header') }>
        header
      </div>
    )
    const aside = (
      <div class={ bemE('aside') }>
        side
      </div>
    )
    const body = (
      <D2Scrollbar class={ bemE('body-scrollbar') }>
        <div class={ bemE('body') }>
          { $slots.default?.() }
        </div>
      </D2Scrollbar>
    )
    return [
      body,
      header,
      aside
    ]
  }
})
