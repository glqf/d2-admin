import { defineComponent, computed, ref, watch } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'

export const name = makeComponentName('input')
export const mainClassName = makeComponentClassName('input')

export default defineComponent({
  name,
  props: {
    value: { type: [String, Number], default: '' }
  },
  emits: [
    'update:value'
  ],
  setup (props, { slots, emit }) {
    const currentValue = ref(props.value || '')

    watch(() => props.value, (value) => {
      currentValue.value = value
    })

    const inputClassName = computed(() => classNames(
      mainClassName,
      {}
    ))

    function handleChange (e) {
      const value = e.target.value
      currentValue.value = value
      emit('update:value', value)
    }
    
    return () =>
      <input
        class={ inputClassName.value }
        value={ currentValue.value }
        onInput={ handleChange }
        onChange={ handleChange }
      />
  }
})
