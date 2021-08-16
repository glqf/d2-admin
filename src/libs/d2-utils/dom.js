import { unref } from 'vue'

export function clearElement (target) {
  const ele = unref(target)
  ele.innerHTML = ''
}
