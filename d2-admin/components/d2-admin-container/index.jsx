import makeClassnames from 'classnames'
import { computed, defineComponent } from 'vue'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'

const name = 'admin-container'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  name: componentName,
  props: {},
  setup (props) {
    const classnames = computed(() => makeClassnames(classname, {}))
    return {
      classnames
    }
  },
  render () {
    return (
      <div class={ this.classnames }>
        { this.$slots.default() }
      </div>
    )
  }
})
