import {
  computed,
  onBeforeUpdate,
  ref,
  unref,
  watchEffect
} from 'vue'
import {
  createPopper
} from '@popperjs/core'
import {
  findElement
} from 'd2-projects/d2-utils/vue.js'

export function usePopper () {
  const trigger = ref(null)
  const pop = ref(null)
  const popper = ref()

  function init () {
    console.log(trigger.value.$el)
    const a = findElement(trigger)
    const b = findElement(pop)
    console.log(a)
    console.log(b)
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
    trigger.value = null
    pop.value = null
  })

  watchEffect(() => {
    init()
  }, {
    flush: 'post'
  })

  return {
    trigger,
    pop,
    popper,
    state,
    destroy,
    update,
    forceUpdate,
    setOptions
  }
}
