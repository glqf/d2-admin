<template>
  <slot/>
</template>

<script>
import { computed } from 'vue'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('iconGroup')

const provide = provideGenerator(name)

export default {
  name,
  props: {
    collection: { type: String, default: '' }
  },
  setup (props) {
    provide('collection', computed(() => props.collection))
  }
}
</script>
