import { Transition, createVNode, cloneVNode, withDirectives, withCtx, vShow } from 'vue'
import { getFirstValidNode } from 'd2-projects/d2-utils/vnode.js'

export function renderTrigger (trigger, extraProps = {}) {
  const element = getFirstValidNode(trigger, 1)
  if (!element) {
    console.log('trigger expects single rooted node')
  }
  return cloneVNode(element, extraProps, true)
}

export function renderPopper (children, config = {}) {
  const {
    transitionName = 'fade',
    popperRef = 'popperRefPopper',
    popperClassnames = '',
    popperStyle = {},
    popperVisible = false
  } = config
  return createVNode(
    Transition,
    {
      name: transitionName
    },
    {
      default: withCtx(() => [
        withDirectives(
          createVNode(
            'div',
            {
              ref: popperRef,
              style: popperStyle,
              class: popperClassnames
            },
            children
          ),
          [
            [vShow, popperVisible]
          ],
        )
      ])
    }
  )
}
