import { defineComponent } from 'vue'
import { makeName } from 'd2/utils/component.js'

const name = 'size-sensor'

export const componentName = makeName(name)

export default defineComponent({
  name: componentName,
  props: {
    tag: { type: String, default: 'div' }
  },
  render () {
    const Tag = this.tag
    return (
      <Tag>
        { this.$slots?.default?.() }
      </Tag>
    )
  }
})
