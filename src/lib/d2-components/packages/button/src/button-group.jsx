import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { pick } from 'lodash-es'
import { useConfig } from '../../../use/config-inject'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { provideGenerator } from '../../../utils/provide.js'
import buttonProps from './props.js'

const propsNames = ['size', 'color', 'disabled', 'plain', 'ring', 'ringWidth', 'round', 'circle', 'text']

export const name = makeComponentName('button-group')
export const mainClassName = makeComponentClassName('button-group')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: pick(buttonProps, propsNames),
  setup (props, { slots }) {
    const config = useConfig()

    propsNames.forEach(name => provide(name, computed(() => props[name])))

    const buttonGroupSize = computed(() => props.size || config.size)

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
