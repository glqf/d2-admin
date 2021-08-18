import {
  defineComponent,
  ref,
  unref,
  computed,
  onMounted,
  watch,
  nextTick
} from 'vue'
import makeClassnames from 'classnames'
import iconify from '@iconify/iconify'
import {
  useConfig
} from '../../config/src/config.jsx'
import {
  makeComponentName,
  makeComponentClassName
} from '../../../utils/name.js'
import {
  clearElementContent
} from 'd2-utils/dom.js'

const namespace = 'icon'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  props: {
    collection: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  setup (props) {
    const wrapper = ref(null)

    const { iconCollection } = useConfig()

    const iconComplete = computed(() => {
      const icon = props.icon
      if (icon.indexOf(':') > 0) {
        // like collection:icon
        return icon
      }
      // The icon name does not contain the icon collection name
      // Try to get it from another way
      const collection = props.collection || iconCollection.value
      return collection ? `${collection}:${icon}` : icon
    })

    async function load () {
      clearElementContent(unref(wrapper))
      await nextTick()
      const svg = iconify.renderSVG(unref(iconComplete), {})
      if (svg) {
        unref(wrapper).appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = unref(iconComplete)
        unref(wrapper).appendChild(span)
      }
    }

    const classnames = computed(() => makeClassnames(classname, {}))

    onMounted(load)
    watch(() => props.collection, load, { flush: 'post' })
    watch(() => props.icon, load, { flush: 'post' })

    return () => (
      <span class={ classnames.value } ref={ wrapper }/>
    )
  }
})
