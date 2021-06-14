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
  breakPointWait: 100,
  breakPointMin: 'min'
}

export function useGlobalConfig () {
  const vm = getCurrentInstance()
  if ('$D2COMPONENT' in vm.proxy) {
    return vm.proxy.$D2COMPONENT
  }
  return {}
}
