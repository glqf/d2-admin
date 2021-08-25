import {
  computed,
  onBeforeUpdate,
  ref,
  watchEffect
} from 'vue'
import {
  createPopper
} from '@popperjs/core'
import {
  findElement
} from 'd2-projects/d2-utils/vue.js'

export function usePopper () {
  const reference = ref(null)
  const pop = ref(null)
  const popper = ref()

  function init () {
    const a = findElement(reference)
    const b = findElement(pop)
    popper.value = createPopper(
      a,
      b,
      {
        placement: 'bottom'
      }
    )
  }

  const state = computed(() => popper.value?.state)

  function destroy () { popper.value?.destroy?.() }
  function update () { popper.value?.update?.() }
  function forceUpdate () { popper.value?.forceUpdate?.() }
  function setOptions (options) { popper.value?.setOptions?.(options) }

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
    popper,
    state,
    destroy,
    update,
    forceUpdate,
    setOptions
  }
}
