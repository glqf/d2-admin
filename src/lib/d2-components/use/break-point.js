import { ref, watch } from 'vue'
import { keys, values, fromPairs, mapKeys } from 'lodash-es'
import { useWindowSize } from './window-size.js'
import { useConfigForD2Components } from './config.js'

export function useBreakPoint (config) {
  const $D2COM = useConfigForD2Components()

  console.log($D2COM)

  const names = keys(config)
  const numbers = values(config).sort((a, b) => a - b)

  const { width } = useWindowSize()
  
  const breakPoint = ref('')

  const status = fromPairs(names.map(e => [e, ref(false)]))

  const isMin = ref(false)

  function statusUpdate (name) {
    mapKeys(status, e => e.value = false)
    isMin.value = false
    if (names.includes(name)) {
      status[name].value = true
    } else {
      isMin.value = true
    }
  }

  const dict = fromPairs(numbers.map((e, i) => [e, names[i]]))

  watch(width, () => {
    const value = numbers.reduce((r, e) => width.value >= e ? e : r, 0)
    breakPoint.value = dict[value] || 'min'
    statusUpdate(breakPoint.value)
  })

  return {
    breakPoint,
    ...status,
    min: isMin
  }
}
