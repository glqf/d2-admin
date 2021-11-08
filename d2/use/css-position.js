import { ref, computed, unref } from 'vue'
import { cssUnit } from 'd2/utils/css.js'

export function useCssPosition (t = 0, r = 0, b = 0, l = 0) {
  const top = ref(t)
  const right = ref(r)
  const bottom = ref(b)
  const left = ref(l)

  const style = computed(() => ({
    top: cssUnit(top),
    right: cssUnit(right),
    bottom: cssUnit(bottom),
    left: cssUnit(left)
  }))

  return {
    top,
    right,
    bottom,
    left,
    style
  }
}
