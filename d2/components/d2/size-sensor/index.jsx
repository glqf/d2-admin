import { defineComponent, getCurrentInstance, onBeforeUnmount, onMounted } from 'vue'
import { bind } from 'size-sensor'
import { makeName } from 'd2/utils/component.js'
import { getStyle } from 'd2/utils/css.js'

const name = 'size-sensor'

export const componentName = makeName(name)

export default defineComponent({
  name: componentName,
  props: {
    tag: { type: String, default: 'div' }
  },
  emits: [
    'resize'
  ],
  setup (props, { emit }) {
    const { ctx } = getCurrentInstance()

    let unbind = () => {}

    function init () {
      const targetElement = ctx.$el
      unbind = bind(targetElement, element => {
        const style = getStyle(element)
        emit('resize', {
          element,
          style
        })
      })
    }

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      unbind()
    })
  },
  render () {
    const Tag = this.tag
    return <Tag>{ this.$slots?.default?.() }</Tag>
  }
})
