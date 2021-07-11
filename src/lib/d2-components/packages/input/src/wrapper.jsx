import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isVNode, defineComponent } from 'vue'

export const name = makeComponentName('input-wrapper')
export const mainClassName = makeComponentClassName('input-wrapper')

export default defineComponent({
  name,
  props: {
    element: { type: Object, validator: value => isVNode(value) }
  },
  setup (props) {
    const inputWrapperClassName = computed(() => classNames(
      mainClassName,
      {}
    ))

    return () => <span class={ inputWrapperClassName.value }>{ props.element }</span>
  }
})
