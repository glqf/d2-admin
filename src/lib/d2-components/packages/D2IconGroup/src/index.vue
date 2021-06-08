<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { camelCase } from 'lodash'
import { makeComponentName } from '../../../utils/make.js'

const componentName = makeComponentName('iconGroup')

export default {
  name: componentName,
  props: {
    collection: { type: String, default: '' }
  },
  setup (props) {
    provide(camelCase('D2IconGroup-collection'), computed(() => props.collection))
  }
}
</script>
