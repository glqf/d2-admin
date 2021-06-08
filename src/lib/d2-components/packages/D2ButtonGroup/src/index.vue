<template>
  <div :class="buttonGroupClassNames">
    <slot/>
  </div>
</template>

<script>
import { computed, provide } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'
import { provideNameGenerator } from '../../../utils/provide.js'
import { buttonProps } from '../../D2Button/src/index.vue'

const {
  size
} = buttonProps

const componentName = makeComponentName('buttonGroup')

const provideName = provideNameGenerator(componentName)

export default {
  name: componentName,
  props: {
    size
  },
  setup (props) {
    const $D2COMPONENT = useGlobalConfig()

    // provide props
    provide(provideName('size'), computed(() => props.size))

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
