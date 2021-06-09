<template>
  <svg aria-hidden="true">
    <use :xlink:href="href"/>
  </svg>
</template>

<script>
import { computed, ref } from 'vue'
import { configGet } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'
import { inject } from '../../../utils/provide.js'
import { name as svgGroupName } from './svg-group.vue'

export const name = makeComponentName('svg')

export default {
  name,
  props: {
    name: { type: String, required: true }
  },
  setup (props) {
    const prefix = configGet('svgPrefix')

    const injectNameFromSvgGroup = inject(svgGroupName, 'name', ref('')).value

    const name = props.name.replace(/\//g, '-')
    
    const href = computed(() => `#${prefix}${injectNameFromSvgGroup}${name}`)

    return {
      href
    }
  }
}
</script>
