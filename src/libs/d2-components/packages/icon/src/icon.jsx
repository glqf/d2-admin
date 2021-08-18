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
  clearElementContent
} from 'd2-utils/dom.js'
import {
  useConfig
} from '../../config/src/config.jsx'
import {
  makeComponentName,
  makeComponentClassName
} from '../../../utils/name.js'

const namespace = 'icon'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  props: {
    collection: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  setup (props) {
    const wrapper = ref(null)

    const { iconCollection } = useConfig()

    const collection = computed(() => props.collection || iconCollection.value)

    const iconNameComplete = computed(() => {
      // like collection:icon
      if (props.name.indexOf(':') > 0) return props.name
      // The icon name does not contain the icon collection name
      // Try to get it from another way
      return collection.value ? `${collection.value}:${props.name}` : props.name
    })

    async function load () {
      clearElementContent(unref(wrapper))
      await nextTick()
      const svg = iconify.renderSVG(unref(iconNameComplete), {})
      if (svg) {
        unref(wrapper).appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = unref(iconNameComplete)
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
