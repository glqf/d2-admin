<template>
  <svg aria-hidden="true">
    <use :xlink:href="href"/>
  </svg>
</template>

<script>
import { computed, inject, ref } from 'vue'
import { configGet } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'

const componentName = makeComponentName('svg')

export default {
  name: componentName,
  props: {
    name: { type: String, required: true }
  },
  setup (props) {
    const prefix = configGet('svgPrefix')
    const group = inject('d2SvgGroupName', ref('')).value
    const name = props.name.replace(/\//g, '-')
    const href = computed(() => `#${prefix}${group}${name}`)
    return {
      href
    }
  }
}
</script>
