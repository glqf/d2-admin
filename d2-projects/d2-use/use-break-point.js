import { $ } from 'v-dollar'
import { keys, values, fromPairs, mapValues } from 'lodash-es'
import { useWindowSize } from './use-window-size.js'
import { useConfig } from 'd2-projects/d2-config/index.js'

const minKey = 'min'
const minWidth = 0

/**
 * Get breakpoint status
 * @param {Object} breakPoints break point setting, if do not set this parameter, use global config
 *                             eg: { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 }
 * @returns {Object} status {String} breakPoint now active break point name
 * @returns {Object} status {String} ...breakPoints.keys active state of each breakpoint
 * @returns {Object} status {String} min less than the minimum breakpoint
 */
export function useBreakPoint (breakPoints) {
  const { width } = useWindowSize()
  
  const _points = Object.assign(
    {
      [minKey]: minWidth
    },
    useConfig().breakPoints,
    breakPoints
  )

  const names = keys(_points)
  const widths = values(_points).sort((a, b) => a - b)
  // eg: { 640: 'sm' }
  const dict = fromPairs(widths.map((w, i) => [w, names[i]]))

  const activeWidth = $(() => widths.reduce((r, e) => $(width) >= e ? e : r, minWidth))
  const activeName = $(() => dict[$(activeWidth)])

  const status = mapValues(_points, (v, k) => $(() => $(activeName) === k))

  /**
   * match data based on breakpoints
   * @param {*} data default data
   * @param {*} dataSet set of datas matched by breakpoints
   * @returns a matched data
   */
  function responsive (data, dataSet = {}) {
    return $(() => {
      const activeName = dict[
        Math.max(
          ...keys(dataSet)
            .map(k => _points[k])
            .filter(w => w <= $(activeWidth))
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
