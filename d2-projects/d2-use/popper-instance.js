import { createPopper } from '@popperjs/core'
import { $, findElement } from 'd2-projects/d2-utils/vue.js'
import { usePopperOptions } from './popper-options.js'

export function usePopperInstance (props) {
  let instance = null

  const refTrigger = $(null)
  const refPopper = $(null)

  const optionsComputed = usePopperOptions(props)

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

  return {
    instance,
    refTrigger,
    refPopper,
    optionsComputed,
    destroy,
    update,
    forceUpdate,
    setOptions,
    init
  }
}
