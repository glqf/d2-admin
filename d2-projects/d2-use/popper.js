import { onBeforeUpdate, watch, watchPostEffect } from 'vue'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { usePopperInstance } from './popper-instance.js'
import { usePopperVisible } from './popper-visible.js'

/**
 * @param {boolean} props.visible
 * @param {boolean} props.disabled
 * @param {boolean} props.manualMode
 * @param {string} props.trigger click | focus | hover | manual
 */
export function usePopper (props) {
  const {
    instance,
    refTrigger,
    refPopper,
    optionsComputed,
    destroy,
    update,
    forceUpdate,
    setOptions,
    init
  } = usePopperInstance(props)

  const {
    visible,
    visibleComputed
  } = usePopperVisible(props)

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
