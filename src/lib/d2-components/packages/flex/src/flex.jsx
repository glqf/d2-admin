import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'

export const name = makeComponentName('flex')

export default defineComponent({
  name,
  setup () {
    const flexClassNames = computed(() => classNames(makeComponentClassName('flex')))
    
    return () => <div class={ flexClassNames.value }>123</div>
  }
})
