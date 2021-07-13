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
    const clearActive = computed(() => props.clearable && currentValue.value)
    const prefix = computed(() => props.prefix)
    const suffix = computed(() => clearActive.value ? 'icon-park-outline:close-one' : props.suffix)
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
    function createIcon (icon) {
      return <span>
        <D2Icon icon={ icon.value }/>
      </span>
    }
    function createInputWrapper (input) {
      const suffixIcon = createIcon(suffix)
      return <span class={ outerClassNames.value }>
        { input }
        { suffixIcon }
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
