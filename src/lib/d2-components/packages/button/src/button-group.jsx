import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { pick } from 'lodash-es'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { provideGenerator } from '../../../utils/provide.js'
import buttonProps from './props.js'

const propsName = ['size', 'color', 'disabled', 'plain', 'ring', 'ringWidth', 'round', 'circle', 'text']

export const name = makeComponentName('button-group')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: pick(buttonProps, propsName),
  setup (props, { slots }) {
    const $D2COMPONENT = useGlobalConfig()

    // All props are provide to the button component
    propsName.forEach(name => provide(name, computed(() => props[name])))

    // size
    const buttonGroupSize = computed(() => props.size || $D2COMPONENT.size)

    const buttonGroupClassNames = computed(() => classNames(
      makeComponentClassName('button-group'),
      {
        [`d2-button-group--${buttonGroupSize.value}`]: buttonGroupSize.value
      }
    ))
    
    return () =>
      <div class={ buttonGroupClassNames.value }>
        { slots.default?.() }
      </div>
  }
})
