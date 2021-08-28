import { computed, onBeforeUpdate, watch } from 'vue'
import { isBoolean, isArray } from 'lodash-es'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'

export function usePopper (props, emit) {
  let instance = null

  const popperStyle = $({ zIndex: 1 })

  const refTrigger = $(null)
  const refPopper = $(null)

  const visibleState = $(!!props.visible)
  const triggerFocusedState = $(false)

  const optionsComputed = $(() => ({
    placement: 'top'
  }))

  const isManual = $(() => props.manualMode || props.trigger === 'manual')

  const hasVisibleProp = $(() => isBoolean(props.visible))

  let showTimer = null
  let hideTimer = null

  const popperVisible = computed({
    get () {
      return props.disabled
        ? false
        : ($(hasVisibleProp) ? props.visible : $(visibleState))
    },
    set (val) {
      console.log('popperVisible set', val);
      if ($(isManual)) return
      $(hasVisibleProp)
        ? emit('update:visible', val)
        : $(visibleState, val)
    },
  })

  const instanceMethod = name => instance[name] || (() => {})

  const destroy = () => instanceMethod('destroy')()
  const setOptions = options => instanceMethod('setOptions')(options)

  function init () {
    if (!$(popperVisible)) {
      return
    }
    const _trigger = findElement($(refTrigger))
    const _popper = $(refPopper)
    const _options = $(optionsComputed)
    instance = createPopper(_trigger, _popper, _options)
    update()
  }

  function _show() {
    console.log('_show')
    if (props.autoClose > 0) {
      hideTimer = setTimeout(() => {
        _hide()
      }, props.autoClose)
    }
    popperVisible.value = true
  }

  function _hide() {
    popperVisible.value = false
  }

  function clearTimers() {
    clearTimeout(showTimer)
    clearTimeout(hideTimer)
  }

  const show = () => {
    console.log('show')
    if ($(isManual) || props.disabled) return
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
    if ($(isManual)) return
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
    if (!instance || ($(popperVisible) && !force)) return
    detachPopper()
  }

  function detachPopper() {
    destroy()
    instance = null
  }

  // ----


  const events = {}

  function update() {
    if (!$(popperVisible)) {
      return
    }
    if (instance) {
      instanceMethod('update')()
    } else {
      init()
    }
  }

  function onpopperVisibleChange(toState) {
    if (toState) {
      popperStyle.value.zIndex ++
      init()
    }
  }

  if (!$(isManual)) {
    const toggleState = () => {
      if ($(popperVisible)) {
        hide()
      } else {
        show()
      }
    }

    const popperEventsHandler = (e) => {
      e.stopPropagation()
      switch (e.type) {
        case 'click': {
          if ($(triggerFocusedState)) {
            $(triggerFocusedState, false)
          } else {
            toggleState()
          }
          break
        }
        case 'mouseenter': {
          show()
          break
        }
        case 'mouseleave': {
          hide()
          break
        }
        case 'focus': {
          $(triggerFocusedState, true)
          show()
          break
        }
        case 'blur': {
          $(triggerFocusedState, false)
          hide()
          break
        }
      }
    }

    const triggerTypes = {
      click: ['onClick'],
      hover: ['onMouseenter', 'onMouseleave'],
      focus: ['onFocus', 'onBlur'],
    }

    const mapEvents = type => {
      triggerTypes[type].forEach(event => {
        events[event] = popperEventsHandler
      })
    }

    if (isArray(props.trigger)) {
      Object.values(props.trigger).forEach(mapEvents)
    } else {
      mapEvents(props.trigger)
    }
  }
  // ----

  watch(optionsComputed, options => {
    setOptions(options)
    update()
  })

  watch(popperVisible, onpopperVisibleChange)

  onBeforeUpdate(() => {
    $(refTrigger, null)
    $(refPopper, null)
  })

  // watchPostEffect(init)

  return {
    popperRefTrigger: refTrigger,
    popperRefPopper: refPopper,
    popperInstance: instance,
    popperEvents: events,
    popperVisible,
    popperDestroy: destroy,
    popperUpdate: update,
    popperSetOptions: setOptions
  }
}
