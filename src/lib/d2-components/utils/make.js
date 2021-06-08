import { componentNameSpace } from './const.js'
import { pascalCase } from './string.js'

/**
 * Format component name
 * @param {string} name simple component name has no prefix, example 'buttonGroup' or 'button-group'
 */
export function makeComponentName (name) {
  return pascalCase(`${componentNameSpace}-${name}`)
}
