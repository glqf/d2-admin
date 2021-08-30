import { withDirectives, Transition, vShow, withCtx, createVNode } from 'vue'
import { NOOP } from '@vue/shared'
import { PatchFlags } from 'd2-projects/d2-utils/vnode.js'
import { stop } from 'd2-projects/d2-utils/dom.js'

export function renderPopper(
  props,
  children,
) {
  const {
    effect,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseenter,
    onMouseleave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = props

  const kls = [
    popperClass,
    'el-popper',
    'is-' + effect,
    pure ? 'is-pure' : '',
  ]
  /**
   * Equivalent to
   * <transition :name="name">
   *  <div v-show="visibility" :aria-hidden="!visibility" :class="kls" ref="popperRef" role="tooltip" @mouseenter="" @mouseleave="" @click="">
   *    <slot />
   *  </div>
   * </transition>
   */

  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP
  return createVNode(
    Transition,
    {
      name,
      'onAfterEnter': onAfterEnter,
      'onAfterLeave': onAfterLeave,
      'onBeforeEnter': onBeforeEnter,
      'onBeforeLeave': onBeforeLeave,
    },
    {
      default: withCtx(() => [withDirectives(
        createVNode(
          'div',
          {
            'aria-hidden': String(!visibility),
            class: kls,
            style: popperStyle ?? {},
            id: popperId,
            ref: popperRef ?? 'popperRef',
            role: 'tooltip',
            onMouseenter,
            onMouseleave,
            onClick: stop,
            onMousedown: mouseUpAndDown,
            onMouseup: mouseUpAndDown,
          },
          children,
          PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.PROPS | PatchFlags.HYDRATE_EVENTS,
          [
            'aria-hidden',
            'onMouseenter',
            'onMouseleave',
            'onMousedown',
            'onMouseup',
            'onClick',
            'id',
          ],
        ),
        [[vShow, visibility]],
      )]),
    },
    PatchFlags.PROPS, ['name', 'onAfterEnter', 'onAfterLeave', 'onBeforeEnter', 'onBeforeLeave'],
  )
}
