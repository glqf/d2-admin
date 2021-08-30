import { computed, onBeforeUpdate } from 'vue'
import { isBoolean, isArray } from 'lodash-es'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { OverlayManager } from 'd2-projects/d2-utils/overlay.js'

export const eventUpdateVisible = 'update:visible'

export const eventAfterEnter = 'after-enter'
export const eventAfterLeave = 'after-leave'
export const eventBeforeEnter = 'before-enter'
export const eventBeforeLeave = 'before-leave'

export const popperEmits = [
  eventUpdateVisible,
  eventAfterEnter,
  eventAfterLeave,
  eventBeforeEnter,
  eventBeforeLeave
]

export const popperPropsDefault = {
  visible: { type: Boolean, default: undefined },
  enterable: { type: Boolean, default: true },
  disabled: { type: Boolean },
  manualMode: { type: Boolean },
  appendToBody: { type: Boolean, default: true },
  autoClose: { type: Number, default: 0 },
  showAfter: { type: Number, default: 0 },
  hideAfter: { type: Number, default: 0 },
  trigger: { type: [String, Array], default: 'click' } // click | focus | hover | manual
}

export function usePopper (props, emit) {
  let instance = null

  const refTrigger = $(null)
  const refPopper = $(null)

  const visibleState = $(!!props.visible)
  const triggerFocusedState = $(false)

  const optionsComputed = $(() => ({
    placement: 'top'
  }))

  const isManualMode = $(() => props.manualMode || props.trigger === 'manual')

  const popperStyle = $({
    zIndex: OverlayManager.nextZIndex()
  })

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
      if ($(isManualMode)) return
      $(hasVisibleProp)
        ? emit(eventUpdateVisible, val)
        : $(visibleState, val)
    },
  })

  const instanceMethod = name => instance[name] || (() => {})

  const setOptions = options => instanceMethod('setOptions')(options)

  function initializePopper () {
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



  function onPopperMouseEnter () {
    // if trigger is click, user won't be able to close popper when
    // user tries to move the mouse over popper contents
    if (props.enterable && props.trigger !== 'click') {
      clearTimeout(hideTimer)
    }
  }

  function onPopperMouseLeave () {
    const { trigger } = props
    const shouldPrevent =
      (isString(trigger) && (trigger === 'click' || trigger === 'focus'))
        // we'd like to test array type trigger here, but the only case we need to cover is trigger === 'click' or
        // trigger === 'focus', because that when trigger is string
        // trigger.length === 1 and trigger[0] === 5 chars string is mutually exclusive.
        // so there will be no need to test if trigger is array type.
        || (trigger.length === 1 && (trigger[0] === 'click' || trigger[0] === 'focus'))
    if (shouldPrevent) return
    hide()
  }

  function doDestroy(force) {
    if (!instance || ($(popperVisible) && !force)) return
    detachPopper()
  }

  function detachPopper() {
    instanceMethod('destroy')()
    instance = null
  }

  const events = {}

  function update() {
    if (!$(popperVisible)) {
      return
    }
    if (instance) {
      instanceMethod('update')()
    } else {
      initializePopper()
    }
  }

  function onpopperVisibleChange(visible) {
    if (visible) {
      popperStyle.value.zIndex = OverlayManager.nextZIndex()
      initializePopper()
    }
  }

  if (!$(isManualMode)) {
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

  $(optionsComputed, options => {
    setOptions(options)
    update()
  })

  $(popperVisible, onpopperVisibleChange)

  onBeforeUpdate(() => {
    $(refTrigger, null)
    $(refPopper, null)
  })

  return {
    update,
    doDestroy,
    show,
    hide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      emit(eventAfterEnter)
    },
    onAfterLeave: () => {
      detachPopper()
      emit(eventAfterLeave)
    },
    onBeforeEnter: () => {
      emit(eventBeforeEnter)
    },
    onBeforeLeave: () => {
      emit(eventBeforeLeave)
    },
    initializePopper,
    isManualMode,
    //
    popperRefTrigger: refTrigger,
    popperRefPopper: refPopper,
    popperInstance: instance,
    popperEvents: events,
    popperVisible: popperVisible,
    popperStyle: popperStyle,
    popperUpdate: update,
    popperSetOptions: setOptions
  }
}
