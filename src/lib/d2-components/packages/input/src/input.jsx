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
  setup (props, context) {
    const $D2COM = useConfigForD2Components()

    function createInputElement ({
      classInner = '',
      disabled
    }) {
      const { emit } = context
      const currentValue = ref(props.value || '')
      watch(() => props.value, (value) => {
        currentValue.value = value
      })
      function onInputElementChange (e) {
        const value = e.target.value
        currentValue.value = value
        emit('update:value', value)
      }
      const inputElementProps = {
        disabled,
        class: classInner,
        value: currentValue.value,
        onInput: onInputElementChange,
        onChange: onInputElementChange
      }
      return <input { ...inputElementProps }/>
    }

    function createInputComponent () {
      const inputDisabled = computed(() => props.disabled)
      const inputSize = computed(() => props.size || $D2COM.size)
      const inputColor = computed(() => props.color)
      const wrapperActive = computed(() => false)
      const classInner = computed(() => classNames(
        mainClassName,
        {
          'is-disabled': inputDisabled.value,
          [`${mainClassName}--${inputSize.value}`]: inputSize.value,
          [`${mainClassName}--${inputColor.value}`]: inputColor.value,
          [context.attrs.class]: context.attrs.class && !wrapperActive.value
        }
      ))
      return () => {
        const input = createInputElement({
          classInner: classInner.value,
          disabled: inputDisabled.value
        })
        return input
      }
    }
    
    return createInputComponent(props, context)
  }
})
