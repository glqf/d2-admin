import { defineComponent, getCurrentInstance, onBeforeUnmount, onMounted } from 'vue'
import { bind, clear } from 'size-sensor'
import { makeName } from 'd2/utils/component.js'

const name = 'size-sensor'

export const componentName = makeName(name)

export default defineComponent({
  name: componentName,
  props: {
    tag: { type: String, default: 'div' }
  },
  setup () {
    const { ctx } = getCurrentInstance()

    function init () {
      const targetElement = ctx.$el
      bind(targetElement, element => {
        console.log(element)
      })
    }

    function destroy () {
      clear(ctx.$el)
    }

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      destroy()
    })
  },
  render () {
    const Tag = this.tag
    return <Tag>{ this.$slots?.default?.() }</Tag>
  }
})
