import { kebabCase } from 'lodash-es'
import { pascalCase } from 'd2-utils/string.js'
import { namespace } from './const.js'

/**
 * Format component name
 * @param {string} name simple component name has no prefix, eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__'
 * @returns {string} eg: 'NamespaceFooBar'
 */
export function makeComponentName (name) {
  return pascalCase(`${namespace}-${name}`)
}

/**
 * Format component main class name
 * @param {string} name simple component name has no prefix, example 'Foo Bar' 'fooBar' '__FOO_BAR__'
 * @returns {string} namespace-foo-bar
 */
export function makeComponentClassName (name) {
  return `${namespace}-${kebabCase(name)}`
}
