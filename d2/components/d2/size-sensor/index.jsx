import { defineComponent, getCurrentInstance, onBeforeUnmount, onMounted } from 'vue'
import { bind } from 'size-sensor'
import { makeName } from 'd2/utils/component.js'
import { getStyle, convertCssUnit } from 'd2/utils/css.js'

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
        const { height, width } = style
        emit('resize', {
          element,
          style,
          height: convertCssUnit(height),
          width: convertCssUnit(width)
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
