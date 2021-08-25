import {
  onBeforeUpdate,
  ref,
  watchEffect
} from 'vue'
import {
  createPopper
} from '@popperjs/core'
import {
  findElementFromRef
} from 'd2-projects/d2-utils/vue.js'

export function usePopper () {
  const reference = ref(null)
  const pop = ref(null)
  const popper = ref()

  function init () {
    popper.value = createPopper(
      findElementFromRef(reference),
      findElementFromRef(pop),
      {
        placement: 'bottom'
      }
    )
  }

  onBeforeUpdate(() => {
    reference.value = null
    pop.value = null
  })

  watchEffect(() => {
    init()
  }, {
    flush: 'post'
  })

  return {
    reference,
    pop,
    popper
  }
}
