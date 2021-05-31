<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'

export default {
  name: 'D2SvgGroup',
  props: {
    name: { type: String, default: '' }
  },
  setup (props) {
    provide('d2SvgGroupName', computed(() => props.name))
  }
}
</script>
