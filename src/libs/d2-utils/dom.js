export const isDOM = el => {
  return typeof HTMLElement === 'object'
    ? el instanceof HTMLElement
    : el 
        && typeof el === 'object'
        && el.nodeType === 1
        && typeof el.nodeName === 'string'
}

export function clearElementContent (el) {
  if (isDOM(el)) {
    el.innerHTML = ''
  }
}
