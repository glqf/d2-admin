import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isValidFlex } from '../../../utils/is.js'

export const name = makeComponentName('flex')
export const baseClassName = makeComponentClassName('flex')

export default defineComponent({
  name,
  props: {
    center: { type: Boolean },
    inline: { type: Boolean },
    tag: { type: String, default: 'div' },
    dir: { type: String, default: '', validator: value => isValidFlex('dir', value, true) },
    main: { type: String, default: '', validator: value => isValidFlex('main', value, true) },
    cross: { type: String, default: '', validator: value => isValidFlex('cross', value, true) },
    box: { type: String, default: '', validator: value => isValidFlex('box', value, true) }
  },
  setup (props, { slots }) {
    const flexCenter = computed(() => props.center ? 'center' : '')

    const flexMain = computed(() => flexCenter.value || props.main)

    const flexCross = computed(() => flexCenter.value || props.cross)

    const flexClassNames = computed(() => classNames(
      baseClassName,
      {
        'is-inline': props.inline,
        [`is-dir-${props.dir}`]: props.dir,
        [`is-main-${flexMain.value}`]: flexMain.value,
        [`is-cross-${flexCross.value}`]: flexCross.value,
        [`is-box-${props.box}`]: props.box
      }
    ))
    
    return () => <props.tag class={ flexClassNames.value }>
      { slots.default?.() }
    </props.tag>
  }
})
