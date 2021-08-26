import { defineComponent, computed, Teleport } from 'vue'
import makeClassnames from 'classnames'
import { usePopper } from 'd2-projects/d2-use/popper.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'
import { renderTrigger, renderPopper } from './render.jsx'

const namespace = 'popper'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  setup (props, { slots }) {
    const popperCtx = usePopper(props)

    const classnames = computed(() => makeClassnames(classname, {}))

    return {
      ...popperCtx,
      classnames
    }
  },
  render () {
    const {
      classnames
    } = this

    const trigger = renderTrigger(this.$slots.trigger?.(), {
      triggerRef: 'triggerRef',
      onClick: () => {
        console.log('renderTrigger click')
      }
    })

    const popper = renderPopper(this.$slots.default?.(), {
      popperRef: 'popperRef',
      classnames: classnames
    })

    return [
      trigger,
      (
        <Teleport to="body">
          { popper }
        </Teleport>
      )
    ]
  }
})
