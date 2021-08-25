import { onBeforeUpdate, ref, watchEffect } from 'vue'
import { createPopper } from '@popperjs/core'

export function usePopper () {
  const reference = ref(null)
  const popper = ref(null)

  const instance = ref(null)

  onBeforeUpdate(() => {
    reference.value = null
    popper.value = null
  })

  function init () {
    instance.value = createPopper(reference.value, popper.value)
  }

  watchEffect(() => {
    init()
  }, { flush: 'post' })

  return {
    reference,
    popper
  }
}
