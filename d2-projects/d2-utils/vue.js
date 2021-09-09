import { isVNode } from 'vue'
import { isElement } from './dom.js'

export function findElementFromInstance (instance) {
  let node = instance && (instance.$el || instance)
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node
}

export function findElement (obj) {
  if (isElement(obj)) return obj
  if (isVNode(obj)) return findElementFromVnode(obj)
  return findElementFromInstance(obj)
}

export function findElementFromVnode (vnode) {
  return vnode?.el
}
