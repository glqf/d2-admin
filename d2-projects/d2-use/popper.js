import { onBeforeUpdate, watchEffect } from 'vue'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { usePopperOptions } from './popper-options.js'

export function usePopper (props) {
  const triggerRef = $(null)
  const popperRef = $(null)
  const popper = $()
  const popperOptions = usePopperOptions(props)

  function init () {
    const _trigger = findElement($(triggerRef))
    const _popper = $(popperRef)
    const _options = $(popperOptions)
    $(popper, createPopper(_trigger, _popper, _options))
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
