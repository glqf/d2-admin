import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('flex')

export default defineComponent({
  name,
  setup () {
    const flexClassNames = computed(() => classNames(makeComponentClassName('flex')))
    
    return {
      flexClassNames
    }
  },
  render () {
    return <div>123</div>
  }
})
