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
  renderTrigger,
  renderPopper
} from './render.jsx'

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
    const trigger = renderTrigger(this.$slots.trigger?.(), {
      ref: 'triggerRef'
    })

    const popper = renderPopper(this.$slots.default?.(), {
      ref: 'popperRef',
      onClick: () => {
        console.log(1)
      }
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
