<template>
  <div :class="buttonGroupClassNames">
    <slot/>
  </div>
</template>

<script>
import { computed } from 'vue'
import classNames from 'classnames'
import { buttonProps } from '../../D2Button/src/index.vue'

const {
  color
} = buttonProps

export default {
  name: 'D2ButtonGroup',
  props: {
    color
  },
  setup () {
    const buttonGroupClassNames = computed(() => classNames('d2-button-group'))
    
    return {
      buttonGroupClassNames
    }
  }
}
</script>
