<template>
  <div :class="buttonGroupClassNames">
    <slot/>
  </div>
</template>

<script>
import { computed } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'
import { provideGenerator } from '../../../utils/provide.js'
import { buttonProps } from '../../D2Button/src/index.vue'

const {
  size
} = buttonProps

export const name = makeComponentName('buttonGroup')

const provide = provideGenerator(name)

export default {
  name,
  props: {
    size
  },
  setup (props) {
    const $D2COMPONENT = useGlobalConfig()

    // provide props
    provide('size', computed(() => props.size))

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
