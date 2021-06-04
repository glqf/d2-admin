<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { camelCase } from 'lodash'

export default {
  name: 'D2SvgGroup',
  props: {
    name: { type: String, default: '' }
  },
  setup (props) {
    provide(camelCase('D2SvgGroup-name'), computed(() => props.name))
  }
}
</script>
