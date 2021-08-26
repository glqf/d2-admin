import {
  computed,
  onBeforeUpdate,
  watchEffect
} from 'vue'
import {
  createPopper
} from '@popperjs/core'
import {
  $,
  findElement
} from 'd2-projects/d2-utils/vue.js'

export function usePopper () {
  const triggerRef = $(null)
  const popperRef = $(null)
  const popper = $()

  function init () {
    popper.value = createPopper(
      findElement($(triggerRef)),
      $(popperRef),
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
    triggerRef.value = null
    popperRef.value = null
  })

  watchEffect(() => {
    init()
  }, {
    flush: 'post'
  })

  return {
    triggerRef,
    popperRef,
    popper,
    state,
    destroy,
    update,
    forceUpdate,
    setOptions
  }
}
