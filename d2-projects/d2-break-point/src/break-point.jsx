import {
  defineComponent,
  computed,
  unref
} from 'vue'
import {
  keys,
  mapValues
} from 'lodash-es'
import {
  makeComponentName
} from 'd2-projects/d2-utils/special/d2-components/name.js'
import {
  useBreakPoint
} from 'd2-projects/d2-use/break-point.js'
import {
  useD2ComponentsConfig
} from 'd2-projects/d2-use/config.js'

const namespace = 'break-point'

export const name = makeComponentName(namespace)

export default defineComponent({
  name,
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
      useD2ComponentsConfig().breakPoints,
      props.breakPoints
    )

    const status = useBreakPoint(_breakPoints)

    const data = computed(() => ({
      ...unref(status),
      data: mapValues(
        props.data,
        (v, k) => unref(status.responsive(...props.data[k]))
      )
    }))
    
    return () => {
      const prop = unref(data)
      return [
        slots.default?.(prop),
        slots.min?.(prop),
        ...keys(_breakPoints).map(e => slots?.[e]?.(prop))
      ]
    }
  }
})
