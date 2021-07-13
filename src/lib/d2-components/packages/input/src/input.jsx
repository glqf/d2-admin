import { defineComponent, computed, ref, watch } from 'vue'
import classNames from 'classnames'
import { useConfigForD2Components } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isSize, isColor } from '../../../utils/const.js'

export const name = makeComponentName('input')
export const mainClassName = makeComponentClassName('input')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    value: { type: [String, Number], default: '' },
    disabled: { type: Boolean },
    size: { type: String, default: '', validator: value => isSize(value, true) },
    color: { type: String, default: '', validator: value => isColor(value, true) },
    clearable: { type: Boolean }
  },
  emits: [
    'update:value'
  ],
  setup (props, { attrs, slots, emit }) {
    const $D2COM = useConfigForD2Components()

    const currentValue = ref(props.value || '')

    const inputDisabled = computed(() => props.disabled)

    const inputSize = computed(() => props.size || $D2COM.size)

    const inputColor = computed(() => props.color)

    const wrapperActive = computed(() => false)

    watch(() => props.value, (value) => {
      currentValue.value = value
    })

    const inputClassName = computed(() => classNames(
      mainClassName,
      {
        'is-disabled': inputDisabled.value,
        [`${mainClassName}--${inputSize.value}`]: inputSize.value,
        [`${mainClassName}--${inputColor.value}`]: inputColor.value,
        [attrs.class]: attrs.class && !wrapperActive.value
      }
    ))

    function handleChange (e) {
      const value = e.target.value
      currentValue.value = value
      emit('update:value', value)
    }

    function createInputElement () {
      const props = {
        class: inputClassName.value,
        value: currentValue.value,
        disabled: inputDisabled.value,
        onInput: handleChange,
        onChange: handleChange
      }
      return <input { ...props }/>
    }

    function createInputComponent () {
      return () => {
        const input = createInputElement()
        return input
      }
    }
    
    return createInputComponent()
  }
})
