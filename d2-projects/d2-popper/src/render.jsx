import { Transition, cloneVNode } from 'vue'
import { getFirstValidNode } from 'd2-projects/d2-utils/vnode.js'

export function renderTrigger (trigger, props = {}) {
  const element = getFirstValidNode(trigger, 1)
  if (!element) {
    console.log('trigger expects single rooted node')
  }
  return cloneVNode(element, props, true)
}

export function renderPopper (children, props = {}) {
  const {
    ref = 'popperRefPopper',
    classnames = '',
    visibility = false
  } = props
  return (
    <Transition name="fade">
      <div
        ref={ ref }
        class={ classnames }
        style={
          {
            display: visibility ? 'block' : 'none'
          }
        }
      >
        { children }
      </div>
    </Transition>
  )
}
