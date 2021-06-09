import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isValidFlex } from '../../../utils/is.js'

export const name = makeComponentName('flex')
export const baseClassName = makeComponentClassName('flex')

export default defineComponent({
  name,
  props: {
    dir: { type: String, default: 'left', validator: value => isValidFlex('dir', value) },
    main: { type: String, default: 'left', validator: value => isValidFlex('main', value) },
    cross: { type: String, default: 'top', validator: value => isValidFlex('cross', value) },
    box: { type: String, default: '', validator: value => !value || isValidFlex('box', value) }
  },
  setup (props, { slots }) {
    const flexClassNames = computed(() => classNames(
      baseClassName,
      {
        [`${baseClassName}--dir-${props.dir}`]: props.dir,
        [`${baseClassName}--main-${props.main}`]: props.main,
        [`${baseClassName}--cross-${props.cross}`]: props.cross,
        [`${baseClassName}--box-${props.box}`]: props.box
      }
    ))
    
    return () => <div class={ flexClassNames.value }>
      { slots.default?.() }
    </div>
  }
})
