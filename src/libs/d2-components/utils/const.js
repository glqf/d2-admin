import { fromPairs } from 'lodash-es'
import { isEmptyString } from 'd2-utils/string.js'

export const namespace = 'd2'

export const flexProps = {
  dir: ['top', 'right', 'bottom', 'left'],
  main: ['right', 'left', 'justify', 'center'],
  cross: ['top', 'bottom', 'baseline', 'center', 'stretch'],
  box: ['mean', 'first', 'last', 'justify'],
  content: ['start', 'end', 'center', 'between', 'around', 'stretch'],
  self: ['auto', 'top', 'bottom', 'baseline', 'center', 'stretch']
}

export const breakPointsName = ['sm', 'md', 'lg', 'xl', 'xxl']

export const breakPointsWidth = [640, 768, 1024, 1280, 1536]

export const breakPoints = fromPairs(breakPointsName.map((e, i) => [e, breakPointsWidth[i]]))

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
