import { $ } from 'v-dollar'
import { defineComponent } from 'vue'
import { keys, mapValues } from 'lodash-es'
import { makeComponentName } from 'd2-projects/d2-utils/special/d2-components/name.js'
import { useBreakPoint } from 'd2-projects/d2-use/use-break-point.js'
import { useConfig } from 'd2-projects/d2-config/index.js'

const name = 'break-point'

export const componentName = makeComponentName(name)

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
  setup (props, { slots }) {
    const _breakPoints = Object.assign(
      {},
      $(useConfig().breakPoints),
      props.breakPoints
    )
    const status = useBreakPoint(_breakPoints)
    const data = $(() => ({
      ...status,
      data: mapValues(
        props.data,
        (v, k) => $(status.responsive(...props.data[k]))
      )
    }))
    return () => {
      const prop = $(data)
      return [
        slots.default?.(prop),
        slots.min?.(prop),
        ...keys(_breakPoints).map(e => slots?.[e]?.(prop))
      ]
    }
  }
})
