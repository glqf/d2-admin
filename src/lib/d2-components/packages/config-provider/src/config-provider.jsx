import { defineComponent } from 'vue'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('config-provider')

export default defineComponent({
  name,
  setup (props, { slots }) {
    return () => <div>{ slots.default() }</div>
  }
})
