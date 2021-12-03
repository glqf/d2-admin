<template>
  <slot v-bind="scope"/>
</template>

<script>
import { unref, reactive, defineComponent, computed } from 'vue'
import { mapValues } from 'lodash-es'
import { makeName } from 'd2/utils/component.js'
import { useBreakPoint } from 'd2/use/break-point.js'

const name = 'break-point'

export const componentName = makeName(name)

export default defineComponent({
  name: componentName,
  props: {
    // example
    //   {
    //     foo: ['foo min', { sm: 'foo sm', md: 'foo md' }],
    //     bar: ['bar min', { sm: 'bar sm', lg: 'bar lg' }]
    //   }
    // return
    //   on min status:
    //     { foo: 'foo min', bar: 'bar min' }
    //   on md status:
    //     { foo: 'foo md', bar: 'bar sm' }
    //   on xl status:
    //     { foo: 'foo md', bar: 'bar lg' }
    data: { type: Object, default: () => ({}) },
    breakPoints: { type: Object, default: () => ({}) }
  },
  setup (props) {
    const breakPoint = useBreakPoint(props.breakPoints)

    const { responsive } = breakPoint

    const data = mapValues(props.data, (_, k) => unref(responsive(...props.data[k])))

    const scope = computed(() => ({
      ...reactive(breakPoint),
      data
    }))
    
    return {
      scope
    }
  }
})
</script>
