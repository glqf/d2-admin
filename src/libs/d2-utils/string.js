import { isString, camelCase } from 'lodash-es'

/**
 * Convert string to pascalcase
 * @param {string} value string to be processed eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__'
 * @returns string eg: 'FooBar'
 */
export function pascalCase (value) {
  return titleCase(camelCase(value))
}

/**
 * Converts the first letter of the input string to uppercase
 * @param {string} value string to be processed eg: 'foo-bar'
 * @returns string eg: 'Foo-bar'
 */
export function titleCase (value) {
  if (!isString(value)) return ''
  let _value = value.trim()
  if (_value.length < 2) return _value.toLocaleUpperCase()
  return _value[0].toLocaleUpperCase() + _value.slice(1)
}
