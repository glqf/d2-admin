import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'

export const name = makeComponentName('input')
export const mainClassName = makeComponentClassName('input')

export default defineComponent({
  name,
  props: {},
  setup (props, { slots }) {
    const inputClassName = computed(() => classNames(
      mainClassName,
      {}
    ))
    
    return () =>
      <input class={ inputClassName.value }></input>
  }
})
