import { onMounted, onUnmounted, onBeforeMount } from 'vue'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { throttle } from 'lodash-es'

/**
 * Get window size status
 * @param {Number} wait throttle wait
 * @returns {Object} status {String} height window height
 * @returns {Object} status {String} width window width
 */
export function useWindowSize(wait = 30) {

  const width = $(0)
  const height = $(0)

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
