<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { provideNameGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'

export const componentName = makeComponentName('svgGroup')

const provideName = provideNameGenerator(componentName)

export default {
  name: componentName,
  props: {
    name: { type: String, default: '' }
  },
  setup (props) {
    provide(provideName('name'), computed(() => props.name))
  }
}
</script>
