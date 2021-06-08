/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { provide as vueProvide, inject as vueInject } from 'vue'
import { pascalCase } from './string.js'

/**
 * Generate provide based on the component name
 * @param {string} componentName component name should be returned by the makeComponentName function
 * @returns function provide like vue provide
 * @example
 *          const name = makeComponentName('buttonGroup')
 *          const provide = provideGenerator(name)
 *          provide('size', computed(() => props.size))
 *          equivalent:
 *          vue.provide('D2ButtonGroupSize', computed(() => props.size))
 */
export function provideGenerator (componentName) {
  /**
   * The value returned should be used for the first parameter of the vue provide method
   * @param {string} name provide name like 'foo' or 'foo-bar'
   * @param {value} value vue provide value
   */
  return function provide (name, value) {
    vueProvide(componentName + pascalCase(name), value)
  }
}

/**
 * 
 * @param {string} componentName component name should be returned by the makeComponentName function
 * @param {string} name provide name like 'foo' or 'foo-bar'
 * @param {*} defaultValue vue inject defaultValue
 * @returns same as vue inject function return
 * @example const injectCollectionFromIconGroup = inject(iconGroupName, 'collection', ref('')).value
 */
export function inject (componentName, name, defaultValue) {
  return vueInject(componentName + pascalCase(name), defaultValue)
}
