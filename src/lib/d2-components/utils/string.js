import { camelCase } from 'lodash'

export function pascalCase (value) {
  return titleCase(camelCase(value))
}

export function titleCase (value) {
  return value[0].toLocaleUpperCase() + value.slice(1)
}
