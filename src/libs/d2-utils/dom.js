import { unref } from 'vue'

export const isDOM = el => {
  return typeof HTMLElement === 'object'
    ? el instanceof HTMLElement
    : el 
        && typeof el === 'object'
        && el.nodeType === 1
        && typeof el.nodeName === 'string'
}

export function clearElementContent (el) {
  const _el = unref(el)
  if (isDOM(_el)) {
    _el.innerHTML = ''
  }
}
