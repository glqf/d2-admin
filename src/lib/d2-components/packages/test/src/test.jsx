import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'

export const name = makeComponentName('test')
export const mainClassName = makeComponentClassName('test')

export default defineComponent({
  name,
  props: {},
  setup (props, { slots }) {
    const flexClassName = computed(() => classNames(
      mainClassName,
      {}
    ))
    
    return () =>
      <div class={ flexClassName.value }>
        { slots.default?.() }
      </div>
  }
})
