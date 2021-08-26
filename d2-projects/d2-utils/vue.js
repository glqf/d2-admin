import {
  ref,
  unref,
  isRef,
  isVNode,
  computed,
  watch
} from 'vue'
import {
  isElement
} from './dom.js'

export function $ (r, v, options) {
  // watch
  if (arguments.length >= 2 && typeof v === 'function') {
    return watch(r, v, options)
  }
  // set / copy
  else if (arguments.length === 2 && isRef(r)) {
    r.value = unref(v)
    return
  }
  else if (arguments.length === 1) {
    // computed
    if (typeof r === 'function') return computed(r)
    // unref
    else if (isRef(r)) return r.value
    // ref
    else return ref(r)
  }
  throw new Error('unexpected')
}

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
