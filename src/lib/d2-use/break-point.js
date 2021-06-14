import { ref, watch } from 'vue'
import { keys, values } from 'lodash-es'
import { useWindowSize } from './window-size.js'

export function useBreakPoint ({ config = {}, wait } = {}) {
  const { width } = useWindowSize()
  
  const breakPoint = ref('')

  watch(() => {
    console.log(width.value)
  })
  
  return {
    breakPoint
  }
}
