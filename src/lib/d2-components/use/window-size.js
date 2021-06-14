import { onMounted, onUnmounted, ref, onBeforeMount } from 'vue'
import { throttle } from 'lodash-es'

export function useWindowSize({ wait = 100 } = {}) {

  const width = ref(0)
  const height = ref(0)

  function update() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  const _update = throttle(update, wait)
  
  onBeforeMount(() => {
    update()
  })

  onMounted(() => {
    window.addEventListener('resize', _update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', _update)
  })

  return {
    height,
    width
  }
}
