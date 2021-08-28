import { defineComponent, computed, Teleport } from 'vue'
import makeClassnames from 'classnames'
import { usePopper, popperPropsDefault } from 'd2-projects/d2-use/use-popper.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'
import { renderTrigger, renderPopper } from './render.jsx'

const namespace = 'popper'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  props: popperPropsDefault,
  setup (props, { emit }) {
    const popperCtx = usePopper(props, emit)

    const classnames = computed(() => makeClassnames(classname, {}))

    return {
      classnames,
      ...popperCtx
    }
  },
  render () {
    const {
      // props
      appendToBody,
      // computed
      classnames,
      // usePopper
      popperEvents,
      popperVisible
    } = this

    const trigger = renderTrigger(this.$slots.trigger?.(), {
      ref: 'popperRefTrigger',
      ...popperEvents
    })

    const popper = renderPopper(this.$slots.default?.(), {
      transitionName: 'fade',
      popperClassnames: classnames,
      popperRef: 'popperRefPopper',
      popperVisible: popperVisible
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
