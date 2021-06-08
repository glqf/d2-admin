import { camelCase } from 'lodash'
import { componentNameSpace } from './const.js'

/**
 * Format component name
 * @param {string} name simple component name has no prefix, example 'buttonGroup' or 'button-group'
 */
export function makeComponentName (name) {
  return camelCase(`${componentNameSpace}-${name}`)
}
