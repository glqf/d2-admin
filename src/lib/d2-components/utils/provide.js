
import { provide } from 'vue'
import { pascalCase } from './string.js'

/**
 * Generate provide based on the component name
 * @param {string} componentName component name
 * @returns function provide like vue provide
 */
export function provideGenerator (componentName) {
  /**
   * The value returned should be used for the first parameter of the vue provide method
   * @param {string} name provide name like 'name' or 'first-name'
   * @returns string
   */
  return function (name, value) {
    return provide(componentName + pascalCase(name), value)
  }
}

export function injectName (componentName, name) {
  return componentName + pascalCase(name)
}
