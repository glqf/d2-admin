import { onBeforeUpdate, watch, watchPostEffect } from 'vue'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { usePopperOptions } from './popper-options.js'

export function usePopper (props) {
  let instance = null

  const refTrigger = $(null)
  const refPopper = $(null)
  
  const optionsComputed = usePopperOptions(props)

  function init () {
    const _trigger = findElement($(refTrigger))
    const _popper = $(refPopper)
    const _options = $(optionsComputed)
    instance = createPopper(_trigger, _popper, _options)
  }

  watch(optionsComputed, options => {
    if (!instance) return
    setOptions(options)
    update()
  })

  const destroy = () => instance?.destroy?.()
  const update = () => instance?.update?.()
  const forceUpdate = () => instance?.forceUpdate?.()
  const setOptions = options => instance?.setOptions?.(options)

  onBeforeUpdate(() => {
    $(refTrigger, null)
    $(refPopper, null)
  })

  watchPostEffect(init)

  return {
    popperRefTrigger: refTrigger,
    popperRefPopper: refPopper,
    popperInstance: instance,
    popperDestroy: destroy,
    popperUpdate: update,
    popperForceUpdate: forceUpdate,
    popperSetOptions: setOptions
  }
}
