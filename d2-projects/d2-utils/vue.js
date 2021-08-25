import {
  unref,
  isVNode,
  Fragment,
  Comment,
  Text
} from 'vue'
import {
  isElement
} from './dom.js'

export function findElementFromInstance (instance) {
  let node = instance && (instance.$el || instance)
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node
}

export function findElement (object) {
  const obj = unref(object)
  if (isElement(obj)) return obj
  if (isVNode(obj)) return findElementFromVnode(obj)
  return findElementFromInstance(obj)
}

export function findElementFromVnode (vnode) {
  return vnode?.el
}
