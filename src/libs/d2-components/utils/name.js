import { kebabCase } from 'lodash-es'
import { namespace } from './const.js'
import { pascalCase } from './string.js'

/**
 * Format component name
 * @param {string} name simple component name has no prefix, example 'fooBar' or 'foo-bar'
 * @returns {string} NamespaceFooBar
 */
export function makeComponentName (name) {
  return pascalCase(`${namespace}-${name}`)
}

/**
 * Format component class name
 * @param {string} name simple component name has no prefix, example 'fooBar' or 'foo-bar'
 * @returns {string} namespace-foo-bar
 */
export function makeComponentClassName (name) {
  return `${namespace}-${kebabCase(name)}`
}
