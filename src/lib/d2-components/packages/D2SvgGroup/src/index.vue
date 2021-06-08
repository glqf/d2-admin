<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { camelCase } from 'lodash-es'
import { makeComponentName } from '../../../utils/make.js'

const componentName = makeComponentName('svgGroup')

export default {
  name: componentName,
  props: {
    name: { type: String, default: '' }
  },
  setup (props) {
    provide(camelCase('D2SvgGroup-name'), computed(() => props.name))
  }
}
</script>
