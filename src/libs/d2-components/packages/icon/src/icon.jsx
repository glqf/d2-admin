import {
  defineComponent,
  ref,
  unref,
  computed,
  onMounted,
  watch,
  nextTick
} from 'vue'
import Iconify from '@iconify/iconify'
import { clearElementContent } from 'd2-utils/dom.js'

export default defineComponent({
  name: 'D2Icon',
  props: {
    collection: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  setup (props) {
    const wrapper = ref(null)

    const iconComplete = computed(() => {
      const icon = props.icon
      if (!icon) {
        console.warn('Please set the icon name')
        return ''
      }
      if (icon.indexOf(':') < 0) {
        // The icon name does not contain the icon collection name
        // Try to get it from another way
        const collection = props.collection
        return collection ? `${collection}:${icon}` : icon
      }
      // like collection:icon
      return icon
    })

    async function load () {
      clearElementContent(unref(wrapper))
      await nextTick()
      const svg = Iconify.renderSVG(unref(iconComplete), {})
      if (svg) {
        unref(wrapper).appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = unref(iconComplete)
        unref(wrapper).appendChild(span)
      }
    }

    onMounted(load)
    watch(() => props.collection, load, { flush: 'post' })
    watch(() => props.icon, load, { flush: 'post' })

    return () => (
      <span ref={ wrapper }/>
    )
  }
})
