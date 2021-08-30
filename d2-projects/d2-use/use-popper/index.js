import { computed, onBeforeUpdate } from 'vue'
import { isBoolean, isArray, uniqueId } from 'lodash-es'
import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { OverlayManager } from 'd2-projects/d2-utils/overlay.js'
import { usePopperOptions } from './popper-options'

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

export function usePopper (props, emit) {
  let popperInstance = null

  const popperId = `d2-popper-${uniqueId()}`

  const triggerRef = $(null)
  const popperRef = $(null)
  const arrowRef = $(null)

  const visibleState = $(!!props.visible)
  const triggerFocusedState = $(false)

  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef
  })

  function isManualMode () {
    return props.manualMode || props.trigger === 'manual'
  }

  const popperStyle = $({
    zIndex: OverlayManager.nextZIndex()
  })

  const hasVisibleProp = $(() => isBoolean(props.visible))

  let showTimer = null
  let hideTimer = null

  const visibility = computed({
    get () {
      return props.disabled
        ? false
        : ($(hasVisibleProp) ? props.visible : $(visibleState))
    },
    set (val) {
      if (isManualMode()) return
      $(hasVisibleProp)
        ? emit(eventUpdateVisible, val)
        : $(visibleState, val)
    },
  })

  const popperInstanceMethod = name => (popperInstance && popperInstance[name] || (() => {}))

  const setOptions = options => popperInstanceMethod('setOptions')(options)

  function initializePopper () {
    if (!$(visibility)) {
      return
    }
    const _trigger = findElement($(triggerRef))
    const _popper = $(popperRef)
    const _options = $(popperOptions)
    popperInstance = createPopper(_trigger, _popper, _options)
    update()
  }

  function _show() {
    if (props.autoClose > 0) {
      hideTimer = setTimeout(() => {
        _hide()
      }, props.autoClose)
    }
    visibility.value = true
  }

  function _hide() {
    visibility.value = false
  }

  function clearTimers() {
    clearTimeout(showTimer)
    clearTimeout(hideTimer)
  }

  const show = () => {
    if (isManualMode() || props.disabled) return
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
    if (isManualMode()) return
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
    if (!popperInstance || ($(visibility) && !force)) return
    detachPopper()
  }

  function detachPopper() {
    popperInstanceMethod('destroy')()
    popperInstance = null
  }

  const events = {}

  function update() {
    if (!$(visibility)) {
      return
    }
    if (popperInstance) {
      popperInstanceMethod('update')()
    } else {
      initializePopper()
    }
  }

  function onVisibilityChange(visible) {
    if (visible) {
      popperStyle.value.zIndex = OverlayManager.nextZIndex()
      initializePopper()
    }
  }

  if (!isManualMode()) {
    const toggleState = () => {
      if ($(visibility)) {
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

  $(popperOptions, options => {
    setOptions(options)
    update()
  })

  $(visibility, onVisibilityChange)

  onBeforeUpdate(() => {
    $(triggerRef, null)
    $(popperRef, null)
  })

  function onAfterEnter () {
    emit(eventAfterEnter)
  }

  function onAfterLeave () {
    detachPopper()
    emit(eventAfterLeave)
  }

  function onBeforeEnter () {
    emit(eventBeforeEnter)
  }

  function onBeforeLeave () {
    emit(eventBeforeLeave)
  }

  return {
    update,
    doDestroy,
    show,
    hide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
    initializePopper,
    isManualMode,
    triggerRef,
    popperRef,
    arrowRef,
    events,
    popperId,
    popperInstance,
    popperStyle,
    visibility
  }
}
