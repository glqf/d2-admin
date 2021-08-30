import { cloneVNode } from 'vue'
import { throwError } from 'd2-projects/d2-utils/error.js'
import { getFirstValidNode } from 'd2-projects/d2-utils/vnode.js'

export function renderTrigger(trigger, extraProps) {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) throwError('renderTrigger', 'trigger expects single rooted node')
  return cloneVNode(firstElement, extraProps, true)
}
