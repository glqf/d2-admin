import { unref } from 'vue'
import { isNumber, isString } from 'lodash-es'

/**
 * Adds CSS unit to the original value passed in
 * @param {string|number} value original value
 * @param {string} unit css unit name
 * @returns {string} css value with unit
 * @example cssUnit(0) => '0px'
 * @example cssUnit(ref(0)) => '0px'
 * @example cssUnit('100%') => '100%'
 * @example cssUnit('50') => '50%'
 * @example cssUnit('2', 'em') => '2em'
 */
export function cssUnit (value = 0, unit = 'px') {
  const _value = unref(value)
  if (isNumber(_value)) {
    return _value + unit
  }
  if (isString(_value)) {
    if (/^\d+(\D+)$/.test(_value)) {
      return _value
    }
    return _value + unit
  }
  return ''
}

/**
 * Get element style
 * @param {HTML element} element target element
 * @param {string} styleName css prop name
 * @returns css value
 */
export function getStyle (element, styleName) {
  if (window.getComputedStyle) {
    return getComputedStyle(element, null)[styleName]
  } else {
    return element.currentStyle[styleName]
  }
}

/**
 * Return the value of the specified CSS variable's value
 * @param {string} name css var name
 * @returns css value
 */
export function getCssVar (name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}
