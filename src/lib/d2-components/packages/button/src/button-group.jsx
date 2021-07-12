import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { pick } from 'lodash-es'
import { useConfigForD2Components } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { provideGenerator } from '../../../utils/provide.js'
import buttonProps from './props.js'

const propsName = ['size', 'color', 'disabled', 'plain', 'ring', 'ringWidth', 'round', 'circle', 'text']

export const name = makeComponentName('button-group')
export const mainClassName = makeComponentClassName('button-group')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: pick(buttonProps, propsName),
  setup (props, { slots }) {
    const $D2COM = useConfigForD2Components()

    propsName.forEach(name => provide(name, computed(() => props[name])))

    const buttonGroupSize = computed(() => props.size || $D2COM.size)

    const buttonGroupClassName = computed(() => classNames(
      mainClassName,
      {
        [`${mainClassName}--${buttonGroupSize.value}`]: buttonGroupSize.value
      }
    ))
    
    return () =>
      <div class={ buttonGroupClassName.value }>
        { slots.default?.() }
      </div>
  }
})
