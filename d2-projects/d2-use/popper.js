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
  const trigger = ref(null)
  const content = ref(null)
  const popper = ref()

  function init () {
    popper.value = createPopper(
      findElementFromRef(trigger),
      findElementFromRef(content),
      {
        placement: 'bottom'
      }
    )
  }

  onBeforeUpdate(() => {
    trigger.value = null
    content.value = null
  })

  watchEffect(() => {
    init()
  }, {
    flush: 'post'
  })

  return {
    trigger,
    content,
    popper
  }
}
