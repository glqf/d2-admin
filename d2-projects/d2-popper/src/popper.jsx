import makeClassnames from 'classnames'
import { defineComponent, Teleport, onMounted, onBeforeUnmount, onActivated, onDeactivated } from 'vue'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { throwError } from 'd2-projects/d2-utils/error.js'
import { usePopper, popperEmits } from 'd2-projects/d2-use/use-popper/index.js'
import { popperPropsDefault } from 'd2-projects/d2-use/use-popper/props-default.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'
import { renderTrigger, renderPopper } from './render.jsx'

const name = 'popper'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  name: componentName,
  props: popperPropsDefault,
  emits: [
    ...popperEmits
  ],
  setup (props, { slots, emit }) {
    if (!slots.trigger) {
      throwError(componentName, 'Trigger must be provided')
    }

    const popperStates = usePopper(props, emit)

    const forceDestroy = () => popperStates.doDestroy(true)
    onMounted(popperStates.initializePopper)
    onBeforeUnmount(forceDestroy)
    onActivated(popperStates.initializePopper)
    onDeactivated(forceDestroy)

    const classnames = $(() => makeClassnames(classname, {}))

    return {
      classnames,
      ...popperStates
    }
  },
  render () {
    const {
      // props
      appendToBody,
      // computed
      classnames,
      // usePopper
      events,
      visibility,
      popperStyle
    } = this

    const trigger = renderTrigger(this.$slots.trigger?.(), {
      ref: 'triggerRef',
      ...events
    })

    const popper = renderPopper(this.$slots.default?.(), {
      transitionName: 'fade',
      popperClassnames: classnames,
      popperRef: 'popperRef',
      visibility: visibility,
      popperStyle: popperStyle
    })

    return [
      trigger,
      (
        <Teleport
          to="body"
          disabled={ !appendToBody }
        >
          { popper }
        </Teleport>
      )
    ]
  }
})
