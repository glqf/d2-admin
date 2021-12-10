import { ref } from 'vue'
import { throttle } from 'lodash-es'
import { onMounted, onUnmounted, onBeforeMount } from 'vue'

/**
 * Get window size status
 * @param {Number} wait throttle wait
 * @returns {object} status {string} height window height
 * @returns {object} status {string} width window width
 */
export function useWindowSize(wait = 30) {

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
