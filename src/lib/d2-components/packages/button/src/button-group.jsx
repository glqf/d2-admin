import { defineComponent, computed, provide, reactive, watch } from 'vue'
import classNames from 'classnames'
import { fromPairs, pick } from 'lodash-es'
import { useConfig } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import buttonProps from './props.js'

const propsNames = ['size', 'color', 'disabled', 'plain', 'ring', 'ringWidth', 'round', 'circle', 'text']

export const name = makeComponentName('button-group')
export const mainClassName = makeComponentClassName('button-group')

export default defineComponent({
  name,
  props: pick(buttonProps, propsNames),
  setup (props, { slots }) {
    const config = useConfig()

    const provideData = reactive(fromPairs(propsNames.map(key => [key, props[key]])))

    provide(name, provideData)

    propsNames.forEach(key => {
      watch(
        () => props[key],
        () => {
          provideData[key] = props[key]
        }
      )
    })

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
