import { ref, watch } from 'vue'
import { keys, values, fromPairs } from 'lodash-es'
import { useWindowSize } from './window-size.js'

export function useBreakPoint ({ config = {}, wait } = {}) {
  const { width } = useWindowSize({ wait })

  const configKeys = keys(config)
  const configValues = values(config)

  const dict = fromPairs(configValues.map((value, index) => [value, configKeys[index]]))
  
  const breakPoint = ref('')

  watch(() => {
    const value = configValues.reduce((result, value) => width.value > value ? value : result, 0)
    breakPoint.value = dict[value] || ''
  })

  return {
    breakPoint
  }
}
