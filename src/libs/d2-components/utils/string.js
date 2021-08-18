import { isString, camelCase } from 'lodash-es'

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
  let _value = value.trim()
  if (_value.length < 2) return _value.toLocaleUpperCase()
  return _value[0].toLocaleUpperCase() + _value.slice(1)
}
