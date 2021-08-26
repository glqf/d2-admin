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
  props: {
    visible: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: undefined },
    manualMode: { type: Boolean, default: undefined },
    autoClose: { type: Number, default: 0 },
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 0 },
    trigger: { type: [String, Array], default: 'hover' } // click | focus | hover | manual
  },
  setup (props, { emit }) {
    const popperCtx = usePopper(props, emit)

    const classnames = computed(() => makeClassnames(classname, {}))

    return {
      ...popperCtx,
      classnames
    }
  },
  render () {
    const {
      classnames,
      events,
      visibility
    } = this

    console.log('events', events)

    const trigger = renderTrigger(this.$slots.trigger?.(), {
      ref: 'popperRefTrigger',
      ...events
    })

    const popper = renderPopper(this.$slots.default?.(), {
      ref: 'popperRefPopper',
      classnames: classnames,
      visibility: visibility
    })
    
    console.log(visibility)

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
