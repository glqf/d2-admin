import { computed, ref, unref, watch } from 'vue'
import { keys, values, fromPairs, mapKeys } from 'lodash-es'
import { useWindowSize } from './window-size.js'
import { useConfigForD2Components } from './config.js'

/**
 * Get breakpoint status
 * @param {Object} breakPoints break point setting, if do not set this parameter, use global config
 * @returns {Object} status {String} breakPoint now active break point name
 * @returns {Object} status {String} ...breakPoints.keys active state of each breakpoint
 * @returns {Object} status {String} min less than the minimum breakpoint
 */
export function useBreakPoint (breakPoints) {
  const $D2COM = useConfigForD2Components()
  
  const config = breakPoints || $D2COM.breakPoints

  const names = keys(config)
  const widths = values(config).sort((a, b) => a - b)
  const dict = fromPairs(widths.map((e, i) => [e, names[i]]))

  const { width } = useWindowSize()

  const widthActive = computed(() => {
    return widths.reduce((r, e) => width.value >= e ? e : r, 0)
  })

  const breakPoint = computed(() => {
    return dict[widthActive.value] || 'min'
  })

  const isMin = computed(() => breakPoint.value === 'min')

  const status = fromPairs(names.map(e => [e, computed(() => breakPoint.value === e)]))

  function filter (valueDefault, valueBreakPoints = {}) {
    return computed(() => {
      const k = dict[
        Math.max(
          ...keys(valueBreakPoints)
            .map(e => config[e])
            .filter(e => e <= widthActive.value)
        )
      ]
      return valueBreakPoints[k] || valueDefault
    })
  }

  return {
    filter,
    breakPoint,
    min: isMin,
    ...status
  }
}
