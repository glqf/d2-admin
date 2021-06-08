import { pascalCase } from './string.js'
import { makeComponentName } from './make.js'

/**
 * Generate a new function based on the component name
 * @param {string} componentName component name
 * @returns function provideName
 */
export function provideNameGenerator (componentName) {
  /**
   * The value returned should be used for the first parameter of the vue provide method
   * @param {string} name provide name like 'name' or 'first-name'
   * @returns string
   */
  return function provideName (name) {
    return componentName + pascalCase(name)
  }
}

export function injectName (componentName, name) {
  return componentName + pascalCase(name)
}
