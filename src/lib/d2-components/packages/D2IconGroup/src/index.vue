<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { camelCase } from 'lodash'

export default {
  name: 'D2IconGroup',
  props: {
    collection: { type: String, default: '' }
  },
  setup (props) {
    provide(camelCase('D2IconGroup-collection'), computed(() => props.collection))
  }
}
</script>
