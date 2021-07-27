<template>
  <svg aria-hidden="true">
    <use :xlink:href="href"/>
  </svg>
</template>

<script>
import { computed, ref, unref } from 'vue'
import { useConfig } from '../../../use/config-inject'
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
    const config = useConfig()

    const prefix = config.svgPrefix

    const name = props.name.replace(/\//g, '-')

    const injectNameFromSvgGroup = inject(svgGroupName, 'name')
    
    const href = computed(() => `#${prefix}${unref(injectNameFromSvgGroup)}${name}`)

    return {
      href
    }
  }
}
</script>
