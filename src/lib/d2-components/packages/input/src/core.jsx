import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { computed, isVNode, defineComponent } from 'vue'
import classNames from 'classnames'

export const name = makeComponentName('input-core')
export const mainClassName = makeComponentClassName('input-core')

export default defineComponent({
  name,
  props: {
    input: { type: Object, validator: value => isVNode(value) }
  },
  setup (props) {
    const inputCoreClassName = computed(() => classNames(
      mainClassName,
      {}
    ))

    return () => <span class={ inputCoreClassName.value }>{ props.input }</span>
  }
})
