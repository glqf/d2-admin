import {
  unref
} from 'vue'
import {
  isElement
} from './dom.js'

export function findElement (instance) {
  let node = instance?.vnode?.el || (instance && (instance.$el || instance))
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node
}

export function findElementFromRef (object) {
  const _object = unref(object)
  return isElement(_object) ? _object : findElement(_object)
}
