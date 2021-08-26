import { isBoolean } from 'lodash-es'
import { $ } from 'd2-projects/d2-utils/vue.js'

export function usePopperVisible (props) {
  const isManualMode = $(() => props.manualMode || props.trigger === 'manual')

  const visible = $(!!props.visible)

  const visibleComputed = computed({
    get () {
      if (props.disabled) {
        return false
      } else {
        return isBoolean(props.visible) ? props.visible : $(visible)
      }
    },
    set (val) {
      if ($(isManualMode)) return
      isBoolean(props.visible)
        ? emit('update:visible', val)
        : $(visible, val)
    },
  })

  return {
    visible,
    visibleComputed
  }
}
