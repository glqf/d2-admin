export const isDomElement = el => {
  return typeof HTMLElement === 'object'
    ? el instanceof HTMLElement
    : el &&
      typeof el === 'object' &&
      el.nodeType === 1 &&
      typeof el.nodeName === 'string'
}

export function clearElementContent (el) {
  if (isDomElement(el)) {
    el.innerHTML = ''
  }
}
