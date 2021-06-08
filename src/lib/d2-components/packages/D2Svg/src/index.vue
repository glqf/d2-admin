<template>
  <svg aria-hidden="true">
    <use :xlink:href="href"/>
  </svg>
</template>

<script>
import { computed, inject, ref } from 'vue'
import { configGet } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'
import { injectName } from '../../../utils/provide.js'
import { name as svgGroupName } from '../../D2SvgGroup/src/index.vue'

export const name = makeComponentName('svg')

export default {
  name,
  props: {
    name: { type: String, required: true }
  },
  setup (props) {
    const prefix = configGet('svgPrefix')
    const group = inject(injectName(svgGroupName, 'name'), ref('')).value
    const name = props.name.replace(/\//g, '-')
    const href = computed(() => `#${prefix}${group}${name}`)
    return {
      href
    }
  }
}
</script>
