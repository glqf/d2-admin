/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { getCurrentInstance } from 'vue'
import { breakPoints } from '../utils/const.js'

export const configDefault = {
  svgPrefix: '',
  svgNames: [],
  size: '',
  iconCollection: '',
  breakPoints,
  breakPointsWait: 100
}

let $D2COMPONENT = {}

export function configSet (option) {
  $D2COMPONENT = option
}

export function configGet (key) {
  return $D2COMPONENT[key]
}

export function useGlobalConfig () {
  const vm = getCurrentInstance()
  if ('$D2COMPONENT' in vm.proxy) {
    return vm.proxy.$D2COMPONENT
  }
  return {}
}
