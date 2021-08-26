import { computed, onBeforeUpdate, watch, watchPostEffect } from 'vue'
import { isBoolean } from 'lodash-es'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'

/**
 * @param {boolean} props.visible
 * @param {boolean} props.disabled
 * @param {boolean} props.manualMode
 * @param {number} props.autoClose
 * @param {number} props.showAfter
 * @param {number} props.hideAfter
 * @param {string} props.trigger click | focus | hover | manual
 */
export function usePopper (props) {
  let instance = null

  const refTrigger = $(null)
  const refPopper = $(null)

  const optionsComputed = $(() => ({
    placement: 'bottom'
  }))

  const isManualMode = $(() => props.manualMode || props.trigger === 'manual')

  const hasVisibleProp = $(() => isBoolean(props.visible))
  const visible = $(!!props.visible)

  let showTimer = null
  let hideTimer = null

  const visibleComputed = computed({
    get () {
      return props.disabled
        ? false
        : (
            $(hasVisibleProp)
              ? props.visible
              : $(visible)
          )
    },
    set (val) {
      if ($(isManualMode)) return
      $(hasVisibleProp)
        ? emit('update:visible', val)
        : $(visible, val)
    },
  })

  const instanceMethod = name => instance[name] || (() => {})

  const destroy = () => instanceMethod('destroy')()
  const update = () => instanceMethod('update')()
  const forceUpdate = () => instanceMethod('forceUpdate')()
  const setOptions = options => instanceMethod('setOptions')(options)

  function init () {
    const _trigger = findElement($(refTrigger))
    const _popper = $(refPopper)
    const _options = $(optionsComputed)
    instance = createPopper(_trigger, _popper, _options)
  }

  function _show() {
    if (props.autoClose > 0) {
      hideTimer = setTimeout(() => {
        _hide()
      }, props.autoClose)
    }
    visibleComputed.value = true
  }

  function _hide() {
    visibleComputed.value = false
  }

  function clearTimers() {
    clearTimeout(showTimer)
    clearTimeout(hideTimer)
  }

  const show = () => {
    if ($(isManualMode) || props.disabled) return
    clearTimers()
    if (props.showAfter === 0) {
      _show()
    } else {
      showTimer = setTimeout(() => {
        _show()
      }, props.showAfter)
    }
  }

  const hide = () => {
    if ($(isManualMode)) return
    clearTimers()
    if (props.hideAfter > 0) {
      hideTimer = setTimeout(() => {
        close()
      }, props.hideAfter)
    } else {
      close()
    }
  }

  const close = () => {
    _hide()
    if (props.disabled) {
      doDestroy(true)
    }
  }

  function doDestroy(force) {
    if (!instance || ($(visibleComputed) && !force)) return
    detachPopper()
  }

  function detachPopper() {
    destroy()
    instance = null
  }

  watch(optionsComputed, options => {
    setOptions(options)
    update()
  })

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
