import {
  defineComponent,
  ref,
  computed
} from 'vue'
import makeClassnames from 'classnames'
import {
  makeComponentName,
  makeComponentClassName
} from '../../../utils/name.js'

const namespace = 'scrollbar'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  props: {},
  setup (props, { slots }) {
    const host = ref(null)

    const style = computed(() => ({}))
    const classnames = computed(() => makeClassnames(classname, {}))

    return () => (
      <div ref={ host } class="os-host" class={ classnames.value } style={ style.value }>
        <div class="os-resize-observer-host"/>
        <div class="os-padding">
          <div class="os-viewport">
            <div class="os-content">
              { slots.default?.() }
            </div>
          </div>
        </div>
        <div class="os-scrollbar os-scrollbar-horizontal ">
          <div class="os-scrollbar-track">
            <div class="os-scrollbar-handle"/>
          </div>
        </div>
        <div class="os-scrollbar os-scrollbar-vertical">
          <div class="os-scrollbar-track">
            <div class="os-scrollbar-handle"/>
          </div>
        </div>
        <div class="os-scrollbar-corner"/>
      </div>
    )
  }
})
