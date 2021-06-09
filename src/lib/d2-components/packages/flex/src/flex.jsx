import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isValidFlex } from '../../../utils/is.js'

export const name = makeComponentName('flex')

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
      makeComponentClassName('flex'),
      {
        [`d2-flex--dir-${props.dir}`]: props.dir,
        [`d2-flex--main-${props.main}`]: props.main,
        [`d2-flex--cross-${props.cross}`]: props.cross,
        [`d2-flex--box-${props.box}`]: props.box
      }
    ))
    
    return () => <div class={ flexClassNames.value }>
      { slots.default?.() }
    </div>
  }
})
