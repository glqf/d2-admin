import { $ } from 'v-dollar'

export function useCssPosition (t = 0, r = 0, b = 0, l = 0) {
  const top = $(t)
  const right = $(r)
  const bottom = $(b)
  const left = $(l)

  const px = refValue => $(refValue) + 'px'

  const positionStyle = $(() => ({
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
    positionStyle
  }
}
