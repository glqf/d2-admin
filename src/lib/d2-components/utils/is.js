/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { isString } from 'lodash-es'
import { colorNames, buttonSizeNames, spaceSizeNames, buttonTypes, flexProps } from './const.js'

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
