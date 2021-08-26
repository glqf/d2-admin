import {
  defineComponent,
  computed,
  Teleport
} from 'vue'
import makeClassnames from 'classnames'
import {
  usePopper
} from 'd2-projects/d2-use/popper.js'
import {
  makeComponentName,
  makeComponentClassName
} from 'd2-projects/d2-utils/special/d2-components/name.js'
import {
  renderTrigger
} from './renderers/trigger.js'

const namespace = 'tooltip'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  setup (props, { slots }) {
    const {
      triggerRef,
      popperRef
    } = usePopper()

    const classnames = computed(() => makeClassnames(classname, {}))

    return {
      triggerRef,
      popperRef,
      classnames
    }
  },
  render () {
    const triggerSlot = this.$slots.trigger?.()

    const triggerProps = {
      ref: 'triggerRef'
    }

    const trigger = renderTrigger(triggerSlot, triggerProps)

    return [
      trigger,
      (
        <Teleport to="body">
          <div ref="popperRef" class={ this.classnames }>Hello</div>
        </Teleport>
      )
    ]
  }
})
