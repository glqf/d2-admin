import { colors, sizes, buttonTypes } from './const.js'

/**
 * Check a color name is within the specified range
 * @param {string} color color name
 * @returns boolean
 */
export function isValidColor (color) {
  return colors.includes(color)
}

/**
 * Check a size name is within the specified range
 * @param {string} size size name
 * @returns boolean
 */
 export function isValidSize (size) {
  return sizes.includes(size)
}

/**
 * Check a button type is within the specified range
 * @param {string} type type name
 * @returns boolean
 */
 export function isValidButtonTypes (type) {
  return buttonTypes.includes(type)
}

/**
 * Check if it is String
 * @param {*} value value to check
 * @returns boolean
 */
export function isString (value) {
  return typeof(value) === 'string'
}

/**
 * Check if it is String and not empty
 * @param {*} value value to check
 * @returns boolean
 */
 export function isValuableString (value) {
  return isString(value) && value !== ''
}

/**
 * Check if it is Boolean
 * @param {*} value value to check
 * @returns boolean
 */
export function isBoolean (value) {
  return value === true || value === false
}

function _mustFinite (value, label = 'value') {
  if (!Number.isFinite(value)) throw new Error(`The ${label} passed in should be of numeric type`)
}

/**
 * Check whether a value is an integer and less than the given value
 * @param {*} value value to check
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndLessThan (value, max) {
  _mustFinite(value, 'maximum value')
  return Number.isInteger(value) && value < max
}

/**
 * Check whether a value is an integer and greater than the given value
 * @param {*} value value to check
 * @param {number} min min value
 * @returns boolean
 */
export function isIntegerAndGreaterThan (value, min) {
  _mustFinite(value, 'minimum value')
  return Number.isInteger(value) && value > min
}

/**
 * Check that the value is an integer and within the given range
 * @param {*} value value to check
 * @param {number} min min value
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndBetween (value, min, max) {
  _mustFinite(value, 'minimum value')
  _mustFinite(value, 'maximum value')
  if (min > max) {
    throw new Error('The minimum value should be less than or equal to the maximum value')
  }
  return Number.isInteger(value) && value >= min && value <= max
}

// export function isDOM (item) {
//   return (typeof HTMLElement === 'function')
//     ? (item instanceof HTMLElement)
//     : (
//       item
//         && (typeof item === 'object')
//         && (item.nodeType === 1)
//         && (typeof item.nodeName === 'string')
//     )
// }
