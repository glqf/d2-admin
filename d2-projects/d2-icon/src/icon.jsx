import { defineComponent, onMounted, watch, nextTick, onBeforeUpdate } from 'vue'
import makeClassnames from 'classnames'
import iconify from '@iconify/iconify'
import { $ } from 'd2-projects/d2-utils/vue.js'
import { clearElement } from 'd2-projects/d2-utils/dom.js'
import { useConfig } from 'd2-projects/d2-config/index.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'

const name = 'icon'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  name: componentName,
  props: {
    collection: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  setup (props) {
    const wrapper = $(null)

    const { iconCollection } = useConfig()

    const collection = $(() => props.collection || $(iconCollection))

    const iconNameComplete = $(() => {
      // like collection:icon
      if (props.name.indexOf(':') > 0) return props.name
      // The icon name does not contain the icon collection name
      // Try to get it from another way
      return $(collection) ? `${$(collection)}:${props.name}` : props.name
    })

    async function load () {
      clearElement($(wrapper))
      await nextTick()
      const svg = iconify.renderSVG($(iconNameComplete), {})
      if (svg) {
        $(wrapper).appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = $(iconNameComplete)
        $(wrapper).appendChild(span)
      }
    }

    const classnames = $(() => makeClassnames(classname, {}))

    onMounted(load)
    onBeforeUpdate(() => {
      wrapper.value = unll
    })
    watch(() => props.collection, load, { flush: 'post' })
    watch(() => props.icon, load, { flush: 'post' })

    return () => (
      <span class={ $(classnames) } ref={ wrapper }/>
    )
  }
})
