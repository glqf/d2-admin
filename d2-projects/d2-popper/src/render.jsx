import { Transition, cloneVNode } from 'vue'
import { getFirstValidNode } from 'd2-projects/d2-utils/vnode.js'

export function renderTrigger (trigger, props = {}) {
  const {
    ref = 'popperRefTrigger',
    onClick = () => {}
  } = props
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) console.log('trigger expects single rooted node')
  return cloneVNode(firstElement, {
    ref: ref,
    onClick: onClick
  }, true)
}

export function renderPopper (children, props = {}) {
  const {
    ref = 'popperRefPopper',
    classnames = '',
    onClick = () => {}
  } = props
  return (
    <Transition name="fade">
      <div
        ref={ ref }
        class={ classnames }
        onClick={ onClick }
      >
        { children }
      </div>
    </Transition>
  )
}
