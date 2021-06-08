<template>
  <slot/>
</template>

<script>
import { computed, provide } from 'vue'
import { camelCase } from 'lodash-es'
import { makeComponentName } from '../../../utils/make.js'

const componentName = makeComponentName('iconGroup')

const provideName = provideNameGenerator(componentName)

export default {
  name: componentName,
  props: {
    collection: { type: String, default: '' }
  },
  setup (props) {
    provide(provideName('collection'), computed(() => props.collection))
  }
}
</script>
