import { Transition, createVNode, cloneVNode, withDirectives, withCtx, vShow, openBlock, createBlock, Comment} from 'vue'
import { getFirstValidNode, patchFlags } from 'd2-projects/d2-utils/vnode.js'

export function renderArrow (showArrow) {
  return showArrow
    ? (
      openBlock(),
      createBlock(
        'div',
        {
          ref: 'arrowRef',
          class: 'd2-popper__arrow',
          'data-popper-arrow': '',
        },
        null,
        patchFlags.NEED_PATCH,
      )
    )
    : (
      openBlock(),
      createBlock(Comment, null, '')
    )
}

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
    popperRef = 'popperRef',
    popperClassnames = '',
    popperStyle = {},
    visibility = false
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
            [vShow, visibility]
          ],
        )
      ])
    }
  )
}
