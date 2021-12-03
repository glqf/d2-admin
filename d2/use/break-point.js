import { unref, computed } from 'vue'
import { keys, values, mapValues, invert } from 'lodash-es'
import { useWindowSize } from 'd2/use/window-size.js'
import { useConfig } from 'd2/components/d2/config/use.js'
import { breakPoints } from 'd2/utils/const/break-point.js'

/**
 * Get breakpoint status
 * @param {Object} breakPointsParam break point setting, if do not set this parameter, use global config
 *                             eg: { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 }
 * @returns {Object} status {String} breakPoint now active break point name
 * @returns {Object} status {String} ...breakPointsParam.keys active state of each breakpoint
 * @returns {Object} status {String} min less than the minimum breakpoint
 */
export function useBreakPoint (breakPointsParam) {
  const { width } = useWindowSize()

  const { breakPoints: breakPointsConfig } = useConfig()
  
  const _points = Object.assign(
    {},
    breakPoints,
    breakPointsConfig,
    breakPointsParam,
    { min: 0 }
  )

  const widths = values(_points).sort((a, b) => a - b)
  const dict = invert(_points)

  const activeWidth = computed(() => widths.reduce((r, e) => unref(width) >= e ? e : r, 0))
  const activeName = computed(() => dict[unref(activeWidth)])

  const status = mapValues(_points, (v, k) => computed(() => unref(activeName) === k))

  /**
   * match data based on size
   * @param {*} data default data
   * @param {*} dataSet set of datas matched by size
   * @returns a matched data
   */
  function responsive (data, dataSet = {}) {
    return computed(() => {
      const activeName = dict[
        Math.max(
          ...keys(dataSet)
            .map(k => _points[k])
            .filter(w => w <= unref(activeWidth))
        )
      ]
      return dataSet[activeName] || data
    })
  }

  return {
    responsive,
    width,
    active: activeName,
    ...status
  }
}
