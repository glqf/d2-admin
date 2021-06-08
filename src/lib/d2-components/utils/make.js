/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { nameSpace } from './const.js'
import { pascalCase } from './string.js'

/**
 * Format component name
 * @param {string} name simple component name has no prefix, example 'buttonGroup' or 'button-group'
 */
export function makeComponentName (name) {
  return pascalCase(`${nameSpace}-${name}`)
}
