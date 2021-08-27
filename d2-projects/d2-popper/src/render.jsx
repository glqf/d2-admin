import { Transition, createVNode, cloneVNode, withDirectives, withCtx, vShow } from 'vue'
import { getFirstValidNode } from 'd2-projects/d2-utils/vnode.js'

export function renderTrigger (trigger, props = {}) {
  const element = getFirstValidNode(trigger, 1)
  if (!element) {
    console.log('trigger expects single rooted node')
  }
  return cloneVNode(element, props, true)
}

export function renderPopper (children, config = {}) {
  const {
    ref = 'popperRefPopper',
    classnames = '',
    style = {},
    visibility = false
  } = config
  return createVNode(
    Transition,
    {
      name: 'fade'
    },
    {
      default: withCtx(() => [
        withDirectives(
          createVNode(
            'div',
            {
              ref,
              style,
              class: classnames
            },
            children
          ),
          [[vShow, visibility]],
        )
      ])
    }
  )
}
