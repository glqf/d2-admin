<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'

export default {
  name: 'D2IconGroup',
  props: {
    collection: { type: String, default: '' }
  },
  setup (props) {
    provide('d2IconGroupCollection', computed(() => props.collection))
  }
}
</script>
