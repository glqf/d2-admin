<template>
  <span :class="iconClassNames" ref="container">
    <slot/>
  </span>
</template>

<script>
import { ref, unref, onMounted, watch, nextTick, computed, inject } from 'vue'
import Iconify from '@iconify/iconify'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'

const componentName = makeComponentName('icon')

export default {
  name: componentName,
  props: {
    collection: { type: String, default: '' },
    icon: { type: String, default: '' },
    spin: { type: Boolean, default: false }
  },
  setup (props, { slots }) {
    const $D2COMPONENT = useGlobalConfig()

    // collection setting from group component
    const iconGroupCollection = inject('d2IconGroupCollection', ref('')).value

    // icon container ref
    const container = ref(null)

    // computed icon name [collection]:[icon]
    const icon = computed(() => {
      const _icon = props.icon || getIconNameFromSlot() || ''
      if (!_icon) {
        console.warn('Please set the icon name')
        return ''
      }
      if (_icon.indexOf(':') < 0) {
        // The icon name does not contain the icon collection name
        // Try to get it from another way
        const collection = props.collection || iconGroupCollection || $D2COMPONENT.iconCollection
        return collection ? `${collection}:${_icon}` : _icon
      }
      return _icon
    })

    // class names for container
    const iconClassNames = computed(() => classNames('d2-icon', {
      'd2-animate-spin': props.spin
    }))

    /**
     * get icon name from slot default
     */
    function getIconNameFromSlot () {
      if (slots.default) {
        return slots.default()?.[0]?.children || ''
      }
      return ''
    }

    /**
     * refresh icon
     */
    async function reload () {
      const _icon = unref(icon)
      // check
      if (!_icon) return innerHTML()
      const dom = unref(container)
      if (!dom) return
      // render
      await nextTick()
      const svg = Iconify.getSVG(_icon, {})
      if (svg) {
        innerHTML(svg)
        // console.info(`Load icon named ${ _icon } from cache`)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = _icon
        innerHTML()
        dom.appendChild(span)
        // console.info(`Can't find svg named ${ _icon } from cache, created span:`, span)
      }
    }

    /**
     * Set the icon content
     * If do not pass parameters, the effect is equivalent to empty the content
     * @param {string} html innerHTML
     */
    function innerHTML (html = '') {
      const dom = unref(container)
      if (dom) {
        dom.innerHTML = html
      }
    }

    // reload on mounted
    onMounted(() => reload())
    // reload on icon changed
    watch(icon, reload, { flush: 'post' })
    // reload on slots changed
    watch(() => slots.default, reload, { flush: 'post' })

    return {
      container,
      iconClassNames
    }
  }
}
</script>
