import { onBeforeUpdate, watch, watchPostEffect } from 'vue'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { usePopperOptions } from './popper-options.js'

export function usePopper (props) {
  const triggerRef = $(null)
  const popperRef = $(null)
  const popperInstance = $()
  const popperOptions = usePopperOptions(props)

  function init () {
    const _trigger = findElement($(triggerRef))
    const _popper = $(popperRef)
    const _options = $(popperOptions)
    $(popperInstance, createPopper(_trigger, _popper, _options))
  }

  watch(popperOptions, options => {
    if (!popperInstance) return
    popperSetOptions(options)
    popperUpdate()
  })

  function popperDestroy () {
    return $(popperInstance)?.destroy?.()
  }
  function popperUpdate () {
    return $(popperInstance)?.update?.()
  }
  function popperForceUpdate () {
    return $(popperInstance)?.forceUpdate?.()
  }
  function popperSetOptions (options) {
    return $(popperInstance)?.setOptions?.(options)
  }

  onBeforeUpdate(() => {
    $(triggerRef, null)
    $(popperRef, null)
  })

  watchPostEffect(init)

  return {
    triggerRef,
    popperRef,
    popperInstance,
    popperDestroy,
    popperUpdate,
    popperForceUpdate,
    popperSetOptions
  }
}
