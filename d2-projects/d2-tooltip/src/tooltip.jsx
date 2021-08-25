import {
  defineComponent,
  computed,
  unref,
  Teleport
} from 'vue'
import makeClassnames from 'classnames'
import {
  usePopper
} from 'd2-projects/d2-use/popper.js'
import {
  makeComponentName,
  makeComponentClassName
} from 'd2-projects/d2-utils/special/d2-components/name.js'

const namespace = 'tooltip'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  setup (props, { slots }) {
    const {
      reference,
      pop
    } = usePopper()

    const classnames = computed(() => makeClassnames(classname, {}))

    const slot = slots.default?.()[0]

    reference.value = slot

    console.log(reference.value)

    return () => [
      // <span ref={ reference }>reference</span>,
      slot,
      (
        <Teleport to="body">
          <div ref={ pop } class={ unref(classnames) }>Hello</div>
        </Teleport>
      )
    ]
  }
})
