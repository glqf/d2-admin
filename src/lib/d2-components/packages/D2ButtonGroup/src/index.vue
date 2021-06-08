<template>
  <div :class="buttonGroupClassNames">
    <slot/>
  </div>
</template>

<script>
import { computed } from 'vue'
import classNames from 'classnames'
import { pick } from 'lodash-es'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'
import { provideGenerator } from '../../../utils/provide.js'
import buttonProps from '../../D2Button/src/props.js'

const propsName = [
  'size',
  'color',
  'disabled',
  'plain',
  'ring'
]

export const name = makeComponentName('buttonGroup')

const provide = provideGenerator(name)

export default {
  name,
  props: pick(buttonProps, propsName),
  setup (props) {
    const $D2COMPONENT = useGlobalConfig()

    // All props are provide to the button component
    propsName.forEach(name => provide(name, computed(() => props[name])))

    // size
    const buttonGroupSize = computed(() => props.size || $D2COMPONENT.size)

    const buttonGroupClassNames = computed(() => classNames('d2-button-group', {
      [`d2-button-group--${buttonGroupSize.value}`]: buttonGroupSize.value
    }))
    
    return {
      buttonGroupClassNames
    }
  }
}
</script>
