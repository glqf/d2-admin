import { onBeforeUpdate, watch, watchPostEffect } from 'vue'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { usePopperOptions } from './popper-options.js'

export function usePopper (props) {
  const popperRefTrigger = $(null)
  const popperRefPopper = $(null)
  const popperInstance = $()
  const popperOptions = usePopperOptions(props)

  function init () {
    const _trigger = findElement($(popperRefTrigger))
    const _popper = $(popperRefPopper)
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
    $(popperRefTrigger, null)
    $(popperRefPopper, null)
  })

  watchPostEffect(init)

  return {
    popperRefTrigger,
    popperRefPopper,
    popperInstance,
    popperDestroy,
    popperUpdate,
    popperForceUpdate,
    popperSetOptions
  }
}
