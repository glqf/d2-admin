<template>
  <div :class="buttonGroupClassNames">
    <slot/>
  </div>
</template>

<script>
import { computed, provide } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import { buttonProps } from '../../D2Button/src/index.vue'

const {
  size
} = buttonProps

export default {
  name: 'D2ButtonGroup',
  props: {
    size
  },
  setup (props) {
    const $D2COMPONENT = useGlobalConfig()

    // provide props
    provide('d2ButtonGroupSize', computed(() => props.size))

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
