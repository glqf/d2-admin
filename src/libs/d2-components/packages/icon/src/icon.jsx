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
import { clearElement } from 'd2-utils/dom.js'

export default defineComponent({
  name: 'D2Icon',
  props: {
    collection: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  setup (props) {
    const wrapper = ref(null)

    // like [collection]:[icon]
    const iconForIconify = computed(() => {
      const _i = props.icon
      if (!_i) {
        console.warn('Please set the icon name')
        return ''
      }
      if (_i.indexOf(':') < 0) {
        // The icon name does not contain the icon collection name
        // Try to get it from another way
        const _c = props.collection
        return _c ? `${_c}:${_i}` : _i
      }
      return _i
    })

    /**
     * refresh icon
     */
     async function load () {
      clearElement(wrapper)
      // check icon
      const _i = unref(iconForIconify)
      if (!_i) return clearElement(wrapper)
      // render
      await nextTick()
      const svg = Iconify.renderSVG(_i, {})
      if (svg) {
        unref(wrapper).appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = _i
        unref(wrapper).appendChild(span)
      }
    }

    // load on mounted
    onMounted(load)
    // load on icon changed
    watch(iconForIconify, load, { flush: 'post' })

    return () => {
      return (
        <span ref={ wrapper }/>
      )
    }
  }
})
