/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { isString } from 'lodash-es'
import { colorNames, buttonSizeNames, spaceSizeNames, buttonTypes, flexProps } from './const.js'

/**
 * Check a flex property is available
 * @param {string} type flex property type
 * @param {string} value flex property
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isFlex (type, value, empty) {
  return empty && isEmptyString(value) || flexProps[type] && flexProps[type].includes(value)
}

/**
 * Check a color name is available
 * @param {string} value color name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isColor (value, empty) {
  return empty && isEmptyString(value) || colorNames.includes(value)
}

/**
 * Check a space size name is available
 * @param {string} value size name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
 export function isSpaceSize (value, empty) {
  return empty && isEmptyString(value) || spaceSizeNames.includes(value)
}

/**
 * Check a button size name is available
 * @param {string} value size name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isButtonSize (value, empty) {
  return empty && isEmptyString(value) || buttonSizeNames.includes(value)
}

/**
 * Check a button type is available
 * @param {string} value type name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isButtonTypes (value, empty) {
  return empty && isEmptyString(value) || buttonTypes.includes(value)
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
