import { id } from 'd2/utils/helper/id.js'
import { kebabCase } from 'lodash-es'
import { pascalCase } from 'd2/utils/lang/string.js'

/**
 * Format component name
 * @param {string} name simple component name has no prefix
 *                      eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__' 'foo/bar'
 * @returns {string} component name. eg: 'D2FooBar'
 */
export function makeName (name) {
  return pascalCase(`d2-${name}`)
}

/**
 * Randomly generate a component name
 * @returns {string} component name. eg: 'D2Aisjkxuednj'
 */
export function makeRandomName () {
  return makeName(id())
}

/**
 * Format component name by component file url
 * @param {string} url component file url
 * @returns {string} component name. eg: 'D2FooBar'
 */
export function makeNameByUrl (url) {
  const base = 'd2/components/'
  if (import.meta.env.DEV) {
    url = url
      .replace(RegExp(`^${window.location.origin}${import.meta.env.BASE_URL}${base}(d2/)?`), '')
      .replace(/\?import.+$/, '')
      .replace(/\?t=\d+$/, '')
      .replace(/(\/index)?\.(vue|js|jsx)$/, '')
  } else {
    url = url
      .replace(RegExp(`${base}(d2/)?`), '')
      .replace(/(\/index)?\.(vue|js|jsx)$/, '')
  }
  return makeName(url)
}

/**
 * Format component main class name
 * @param {string} name simple component name has no prefix
 *                      eg 'Foo Bar' 'fooBar' '__FOO_BAR__' 'foo/bar'
 * @returns {string} component name. eg: 'd2-foo-bar'
 */
export function makeClassName (name) {
  return `d2-${kebabCase(name)}`
}

/**
 * Format component main class name by component file url
 * @param {string} url component file url
 * @returns {string} component name. eg: 'd2-foo-bar'
 */
export function makeClassNameByUrl (url) {
  return kebabCase(makeNameByUrl(url)).replace(/-(\d)/g, '$1')
}
