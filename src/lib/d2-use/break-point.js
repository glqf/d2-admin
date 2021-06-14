import { ref, watch } from 'vue'
import { keys, values, fromPairs } from 'lodash-es'
import { useWindowSize } from './window-size.js'

export function useBreakPoint ({ config = {}, wait } = {}) {
  const { width } = useWindowSize({ wait })

  const names = keys(config)
  const numbers = values(config).sort((a, b) => a - b)

  const dict = fromPairs(numbers.map((e, i) => [e, names[i]]))
  
  const breakPoint = ref('')

  watch(width, () => {
    const value = numbers.reduce((result, e) => width.value > e ? e : result, 0)
    breakPoint.value = dict[value] || ''
  })

  return {
    breakPoint
  }
}
