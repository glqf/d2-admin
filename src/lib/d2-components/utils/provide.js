import { pascalCase } from './string.js'
import { makeComponentName } from './make.js'

/**
 * Generate a new function based on the component name
 * @param {string} name component name
 * @returns function provideName
 */
export function provideNameGenerator (name) {
  /**
   * The value returned should be used for the first parameter of the vue provide method
   * @param {string} name provide name like 'name' or 'first-name'
   * @returns string
   */
  return function provideName (name) {
    return name + pascalCase(name)
  }
}

export function injectName (name, name) {
  return name + pascalCase(name)
}
