import { ref, computed, unref } from 'vue'

export function useCssPosition (t = 0, r = 0, b = 0, l = 0) {
  const top = ref(t)
  const right = ref(r)
  const bottom = ref(b)
  const left = ref(l)

  const px = refValue => unref(refValue) + 'px'

  const position = computed(() => ({
    top: px(top),
    right: px(right),
    bottom: px(bottom),
    left: px(left)
  }))

  return {
    top,
    right,
    bottom,
    left,
    position
  }
}
