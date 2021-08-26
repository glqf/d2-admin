import {
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
    $(popper, createPopper(
      findElement($(triggerRef)),
      $(popperRef),
      {
        placement: 'bottom'
      }
    ))
  }

  function popperDestroy () {
    return $(popper)?.destroy?.()
  }
  function popperUpdate () {
    return $(popper)?.update?.()
  }
  function popperForceUpdate () {
    return $(popper)?.forceUpdate?.()
  }
  function popperSetOptions (options) {
    return $(popper)?.setOptions?.(options)
  }

  onBeforeUpdate(() => {
    $(triggerRef, null)
    $(popperRef, null)
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
    popperDestroy,
    popperUpdate,
    popperForceUpdate,
    popperSetOptions
  }
}
