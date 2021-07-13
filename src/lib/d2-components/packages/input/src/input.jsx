import { defineComponent, computed, ref, watch } from 'vue'
import classNames from 'classnames'
import { useConfigForD2Components } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isSize, isColor } from '../../../utils/const.js'
import D2Icon from '../../icon/src/icon.vue'

export const name = makeComponentName('input')
export const innerClassName = makeComponentClassName('input')
export const outerClassName = makeComponentClassName('input-wrapper')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    value: { type: [String, Number], default: '' },
    disabled: { type: Boolean },
    size: { type: String, default: '', validator: value => isSize(value, true) },
    color: { type: String, default: '', validator: value => isColor(value, true) },
    clearable: { type: Boolean },
    prefix: { type: String },
    suffix: { type: String }
  },
  emits: [
    'update:value'
  ],
  setup (props, { emit, attrs }) {
    const $D2COM = useConfigForD2Components()

    const currentValue = ref(props.value || '')

    const disabled = computed(() => props.disabled)
    const size = computed(() => props.size || $D2COM.size)
    const color = computed(() => props.color)

    const hasPrefix = computed(() => props.prefix)
    const hasSuffix = computed(() => props.suffix || props.clearable)

    const wrapperActive = computed(() => props.clearable)

    const innerClassNames = computed(() => classNames(
      innerClassName,
      {
        'is-disabled': disabled.value,
        [`${innerClassName}--${size.value}`]: size.value,
        [`${innerClassName}--${color.value}`]: color.value,
        [attrs.class]: attrs.class && !wrapperActive.value
      }
    ))

    const outerClassNames = computed(() => classNames(
      outerClassName,
      {
        'is-disabled': disabled.value,
        'is-prefix-has': hasPrefix.value,
        'is-suffix-has': hasSuffix.value,
        [`${outerClassName}--${size.value}`]: size.value,
        [`${outerClassName}--${color.value}`]: color.value,
        [attrs.class]: attrs.class && wrapperActive.value
      }
    ))

    watch(() => props.value, (value) => {
      currentValue.value = value
    })

    function onInputElementChange (e) {
      const value = e.target.value
      currentValue.value = value
      emit('update:value', value)
    }

    function createInputElement () {
      const props = {
        disabled: disabled.value,
        class: innerClassNames.value,
        value: currentValue.value,
        onInput: onInputElementChange,
        onChange: onInputElementChange
      }
      return <input { ...props }/>
    }

    function createClearButton () {
      return <span><D2Icon icon="icon-park-outline:close-one"/></span>
    }

    function createInputWrapper (input) {
      const prefix = <span><D2Icon icon={ props.prefix }/></span>
      const suffix = <span><D2Icon icon={ props.suffix }/></span>
      const clearButton = createClearButton()
      return <span class={ outerClassNames.value }>
        { props.prefix ? prefix : null }
        { input }
        { props.clearable ? clearButton : suffix }
      </span>
    }

    return () => {
      const input = createInputElement({
        innerClassNames: innerClassNames.value,
        disabled: disabled.value
      })
      return wrapperActive.value ? createInputWrapper(input) : input
    }
  }
})
