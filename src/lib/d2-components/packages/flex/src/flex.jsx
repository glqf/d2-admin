import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isValidFlex } from '../../../utils/is.js'

export const name = makeComponentName('flex')
export const baseClassName = makeComponentClassName('flex')

export default defineComponent({
  name,
  props: {
    dir: { type: String, default: '', validator: value => isValidFlex('dir', value, true) },
    main: { type: String, default: '', validator: value => isValidFlex('main', value, true) },
    cross: { type: String, default: '', validator: value => isValidFlex('cross', value, true) },
    box: { type: String, default: '', validator: value => isValidFlex('box', value, true) }
  },
  setup (props, { slots }) {
    const flexClassNames = computed(() => classNames(
      baseClassName,
      {
        [`is-dir-${props.dir}`]: props.dir,
        [`is-main-${props.main}`]: props.main,
        [`is-cross-${props.cross}`]: props.cross,
        [`is-box-${props.box}`]: props.box
      }
    ))
    
    return () => <div class={ flexClassNames.value }>
      { slots.default?.() }
    </div>
  }
})
