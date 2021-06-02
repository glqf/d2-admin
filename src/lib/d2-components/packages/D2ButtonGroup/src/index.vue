<template>
  <div :class="buttonGroupClassNames">
    <slot/>
  </div>
</template>

<script>
import { computed } from 'vue'
import classNames from 'classnames'

export default {
  name: 'D2ButtonGroup',
  setup () {
    const buttonGroupClassNames = computed(() => classNames('d2-button-group'))
    
    return {
      buttonGroupClassNames
    }
  }
}
</script>
