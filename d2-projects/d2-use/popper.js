import { onBeforeUpdate, ref, unref, watchEffect, isVNode } from 'vue'
import { createPopper } from '@popperjs/core'

export function usePopper () {
  const trigger = ref(null)
  const content = ref(null)

  const popper = ref(null)

  onBeforeUpdate(() => {
    trigger.value = null
    content.value = null
  })

  function init () {
    popper.value = createPopper(
      unref(trigger).$el,
      unref(content),
      {
        placement: 'top'
      }
    )
  }

  watchEffect(() => {
    init()
  }, { flush: 'post' })

  return {
    trigger,
    content,
    popper
  }
}
