import { unref, reactive, defineComponent } from 'vue'
import { keys, mapValues } from 'lodash-es'
import { makeComponentName } from 'd2/utils/component.js'
import { useBreakPoint } from 'd2/use/break-point.js'
import { useConfig } from 'd2/components/d2/config/use.js'

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
  setup (props) {
    const breakPoints = Object.assign(
      {},
      useConfig().breakPoints,
      props.breakPoints
    )
    
    const status = useBreakPoint(breakPoints)

    const data = mapValues(
      props.data,
      (_, k) => unref(status.responsive(...props.data[k]))
    )
    
    return {
      breakPoints,
      status,
      data
    }
  },
  render () {
    const {
      breakPoints,
      status,
      data
    } = this
    const scope = {
      ...reactive(status),
      data
    }
    const slot = name => this.$slots?.[name]?.(scope)
    return [
      slot('default'),
      slot('min'),
      ...keys(breakPoints)
        .map(e => slot(e))
    ]
  }
})
