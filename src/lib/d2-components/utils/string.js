/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { camelCase } from 'lodash'

export function pascalCase (value) {
  return titleCase(camelCase(value))
}

export function titleCase (value) {
  if (value.length < 2) return value
  return value[0].toLocaleUpperCase() + value.slice(1)
}
