import { isEmptyString } from 'd2/utils/string.js'

export const flexProps = {
  dir: ['top', 'right', 'bottom', 'left'],
  main: ['right', 'left', 'justify', 'center'],
  cross: ['top', 'bottom', 'baseline', 'center', 'stretch'],
  box: ['mean', 'first', 'last', 'justify'],
  content: ['start', 'end', 'center', 'between', 'around', 'stretch'],
  self: ['auto', 'top', 'bottom', 'baseline', 'center', 'stretch']
}

/**
 * Check a flex property is available
 * @param {string} type flex property type
 * @param {string} value flex property
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isFlexProp (type, value, empty) {
  return empty && isEmptyString(value) || flexProps[type] && flexProps[type].includes(value)
}
