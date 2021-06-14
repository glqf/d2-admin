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

export function useD2ComponentsConfig () {
  return getCurrentInstance()?.proxy?.$D2COMPONENT || {}
}
