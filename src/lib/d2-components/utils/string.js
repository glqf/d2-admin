/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { camelCase } from 'lodash'
import { isString } from './is.js'

/**
 * Convert string to pascalcase
 * @param {string} value string to be processed
 * @returns string
 */
export function pascalCase (value) {
  return titleCase(camelCase(value))
}

/**
 * Convert string to titleCase
 * @param {string} value string to be processed
 * @returns string
 */
export function titleCase (value) {
  if (!isString(value)) return ''
  if (value.length < 2) return value.toLocaleUpperCase()
  return value[0].toLocaleUpperCase() + value.slice(1)
}
