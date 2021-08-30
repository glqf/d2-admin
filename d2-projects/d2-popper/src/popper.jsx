// import makeClassnames from 'classnames'
import {
  createVNode,
  defineComponent,
  Fragment,
  Teleport,
  onBeforeUnmount,
  onDeactivated,
  onActivated,
  onMounted,
  renderSlot,
  toDisplayString,
  withDirectives
} from 'vue'
import { ClickOutside } from 'd2-projects/d2-directives/click-outside.js'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { throwError } from 'd2-projects/d2-utils/error.js'
import { PatchFlags, renderBlock } from 'd2-projects/d2-utils/vnode.js'
import { usePopper, popperEmits } from 'd2-projects/d2-use/use-popper/index.js'
import { popperPropsDefault } from 'd2-projects/d2-use/use-popper/props-default.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'
import { renderTrigger } from './render/trigger.js'
import { renderPopper } from './render/popper.js'
import { renderArrow } from './render/arrow.js'

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

    // const classnames = $(() => makeClassnames(classname, {}))

    return {
      // classnames,
      ...popperStates
    }
  },
  render () {
    const {
      $slots,
      appendToBody,
      class: kls,
      style,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
      isManualMode,
      events
    } = this

    const isManual = isManualMode()
    const arrow = renderArrow(showArrow)

    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content || '123123')]
        }),
        arrow,
      ],
    )

    const _t = $slots.trigger?.()

    const triggerProps = {
      ariaDescribedby: popperId,
      class: kls,
      style,
      ref: 'triggerRef',
      ...events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    console.log('popper', popper)
    console.log('trigger', trigger)

    return renderBlock(Fragment, null, [
      trigger,
      createVNode(
        Teleport, // Vue did not support createVNode for Teleport
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper],
        PatchFlags.PROPS,
        ['disabled'],
      ),
    ])
  }
})
