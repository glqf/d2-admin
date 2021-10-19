export const isElement = el => {
  return typeof HTMLElement === 'object' ?
    el instanceof HTMLElement :
    el &&
      typeof el === 'object' &&
      el.nodeType === 1 &&
      typeof el.nodeName === 'string'
}

export function clearElement (el) {
  if (isElement(el)) {
    el.innerHTML = ''
  }
}
