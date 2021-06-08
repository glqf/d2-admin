<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { provideNameGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('svgGroup')

const provideName = provideNameGenerator(name)

export default {
  name,
  props: {
    name: { type: String, default: '' }
  },
  setup (props) {
    provide(provideName('name'), computed(() => props.name))
  }
}
</script>
