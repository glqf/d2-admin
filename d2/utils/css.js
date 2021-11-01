import { isNumber, isString } from 'lodash-es'

/**
 * Adds CSS unit to the original value passed in
 * @param {string|number} value original value
 * @param {string} unit css unit name
 * @returns {string} css value with unit
 * @example cssUnit(0) => '0px'
 * @example cssUnit('100%') => '100%'
 * @example cssUnit('50') => '50%'
 * @example cssUnit('2', 'em') => '2em'
 */
export function cssUnit (value = 0, unit = 'px') {
  if (isNumber(value)) {
    return value + unit
  }
  if (isString(value)) {
    if (/^\d+(\D+)$/.test(value)) {
      return value
    }
    return value + unit
  }
}
