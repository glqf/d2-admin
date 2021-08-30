import { $ } from 'd2-projects/d2-utils/vue.js'
import buildModifiers from './build-modifiers.js'

export function usePopperOptions (props, state) {
  return $(() => ({
    placement: props.placement,
    ...props.popperOptions,
    modifiers: buildModifiers({
      arrow: state.arrow.value,
      arrowOffset: props.arrowOffset,
      offset: props.offset,
      gpuAcceleration: props.gpuAcceleration,
    }, props.popperOptions?.modifiers),
  }))
}
