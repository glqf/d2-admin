import { Transition, cloneVNode } from 'vue'
import { getFirstValidNode } from 'd2-projects/d2-utils/vnode.js'

export function renderTrigger (trigger, props = {}) {
  const {
    triggerRef = 'triggerRef',
    onClick = () => {}
  } = props
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) console.log('trigger expects single rooted node')
  return cloneVNode(firstElement, {
    ref: triggerRef,
    onClick: onClick
  }, true)
}

export function renderPopper (children, props = {}) {
  const {
    popperRef = 'popperRef',
    classnames = '',
    onClick = () => {}
  } = props
  return (
    <Transition name="fade">
      <div
        ref={ popperRef }
        class={ classnames }
        onClick={ onClick }
      >
        { children }
      </div>
    </Transition>
  )
}
