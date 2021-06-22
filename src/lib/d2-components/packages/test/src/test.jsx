import { defineComponent, computed, renderSlot, Fragment } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isFragment } from '../../../utils/vnode.js'

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

    const slotDefault = renderSlot(slots, 'default')

    slotDefault.children.forEach(child => {
      console.log(child)
      console.log('type', child.type)
      console.log('type === Fragment', isFragment(child))
    })
    
    return () =>
      <div class={ flexClassName.value }>
        { slotDefault.children }
      </div>
  }
})
