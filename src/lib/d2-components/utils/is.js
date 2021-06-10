/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { colors, sizes, buttonTypes, flex } from './const.js'

/**
 * Check a flex property is available
 * @param {string} type flex property type
 * @param {string} value flex property
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isValidFlex (type, value, empty) {
  return empty && isEmptyString(value) || flex[type] && flex[type].includes(value)
}

/**
 * Check a color name is available
 * @param {string} value color name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isValidColor (value, empty) {
  return empty && isEmptyString(value) || colors.includes(value)
}

/**
 * Check a size name is available
 * @param {string} value size name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isValidSize (value, empty) {
  return empty && isEmptyString(value) || sizes.includes(value)
}

/**
 * Check a button type is available
 * @param {string} value type name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isValidButtonTypes (value, empty) {
  return empty && isEmptyString(value) || buttonTypes.includes(value)
}

/**
 * Check if it is string
 * @param {*} value value to check
 * @returns boolean
 */
export function isString (value) {
  return typeof(value) === 'string'
}

/**
 * Check if it is string and not empty
 * @param {*} value value to check
 * @returns boolean
 */
export function isValuableString (value) {
  return isString(value) && !isEmptyString(value)
}

/**
 * Check if it is empty string
 * @param {*} value value to check
 * @returns boolean
 */
export function isEmptyString (value) {
  return value === ''
}

/**
 * Check if it is boolean
 * @param {*} value value to check
 * @returns boolean
 */
export function isBoolean (value) {
  return value === true || value === false
}

/**
 * Check value is a valid number
 * @param {*} value value to check
 */
export function isFinite (value) {
  return Number.isFinite(value)
}

/**
 * Check whether a value is an integer and less than the given value
 * @param {*} value value to check
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndLessThan (value, max) {
  return isFinite(value) && Number.isInteger(value) && value < max
}

/**
 * Check whether a value is an integer and greater than the given value
 * @param {*} value value to check
 * @param {number} min min value
 * @returns boolean
 */
export function isIntegerAndGreaterThan (value, min) {
  return isFinite(value) && Number.isInteger(value) && value > min
}

/**
 * Check that the value is an integer and within the given range
 * @param {*} value value to check
 * @param {number} min min value
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndBetween (value, min, max) {
  return isFinite(value) && Number.isInteger(value) && value >= min && value <= max
}

//export function isDOM (item) {
//   return (typeof HTMLElement === 'function')
//     ? (item instanceof HTMLElement)
//     : (
//       item
//         && (typeof item === 'object')
//         && (item.nodeType === 1)
//         && (typeof item.nodeName === 'string')
//     )
// }
