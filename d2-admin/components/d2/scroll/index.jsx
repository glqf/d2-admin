import makeClassnames from 'classnames'
import { defineComponent, ref, unref, computed, watch, onBeforeUnmount, onMounted } from 'vue'
import { kebabCase, fromPairs, mergeWith } from 'lodash-es'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'
import os from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.css'

export const themes = import.meta.globEager('./os-theme/*.css')

export const callbacks = [
  'onInitialized',
  'onInitializationWithdrawn',
  'onDestroyed',
  'onScrollStart',
  'onScroll',
  'onScrollStop',
  'onOverflowChanged',
  'onOverflowAmountChanged',
  'onDirectionChanged',
  'onContentSizeChanged',
  'onHostSizeChanged',
  'onUpdated'
]

export const emits = callbacks.map(name => kebabCase(name.replace(/^on/, '')))

const name = 'scroll'

export const componentName = makeComponentName(name)
export const classname = makeComponentClassName(name)

export default defineComponent({
  name: componentName,
  props: {
    options: { type: Object },
    extensions: { type: [String, Array, Object] },
    theme: { type: String, default: 'thin-dark' },
    cordonX: { type: Number, default: 0 },
    cordonY: { type: Number, default: 0 },
    full: { type: Boolean }
  },
  emits: [
    ...emits,
    'in-cordon-x',
    'in-cordon-y',
    'scroll-top',
    'scroll-bottom'
  ],
  setup (props, { emit }) {
    const target = ref(null)

    const instance = ref(null)

    const isValid = () => os.valid(unref(instance))

    const themeClassName = computed(() => `os-theme-${props.theme}`)

    const optionsDefault = computed(() => ({
      className: unref(themeClassName),
      scrollbars: {
        autoHide: 'scroll',
        autoHideDelay: 300
      },
      callbacks: fromPairs(callbacks.map(name => {
        const emitName = kebabCase(name.replace(/^on/, ''))
        let callback = () => {}
        switch (name) {
          case 'onScroll':
            callback = event => {
              const information = unref(instance).scroll()
              const ratioY = information.ratio.y
              emit(emitName, event)
              const cordonY = information.max.y - information.position.y
              const cordonX = information.max.x - information.position.x
              if (cordonY <= -props.cordonY) emit('in-cordon-y', event)
              if (cordonX <= props.cordonX) emit('in-cordon-x', event)
              if (ratioY === 0) emit('scroll-top', event)
              if (ratioY === 1) emit('scroll-bottom', event)
            }
            break
          default:
            callback = event => emit(emitName, event)
            break
        }
        return [
          name,
          callback
        ]
      }))
    }))

    function customizer (left, right, key) {
      if (key === 'callbacks') {
        return mergeWith({}, left, right, (leftFn, rightFn) => {
          if (leftFn && isFunction(leftFn) && rightFn && isFunction(rightFn)) {
            return event => {
              leftFn(event)
              rightFn(event)
            }
          }
        })
      }``
    }

    const merge = options => mergeWith({}, unref(optionsDefault), options, customizer)

    const options = computed(() => merge(props.options))

    function reloadOptions () {
      if (isValid()) {
        unref(instance).options(merge(options))
      }
    }

    function init () {
      instance.value = os(
        unref(target),
        unref(options),
        props.extensions
      )
    }

    onMounted(init)
    
    onBeforeUnmount(() => {
      if (isValid()) {
        unref(instance).destroy()
        instance.value = null
      }
    })
    
    watch(options, reloadOptions)
    
    const classnames = computed(() => makeClassnames(classname, {}))

    return {
      target,
      classnames
    }
  },
  render () {
    const {
      classnames
    } = this
    return (
      <div ref="target" class="os-host" class={ classnames }>
        <div class="os-resize-observer-host"/>
        <div class="os-padding">
          <div class="os-viewport">
            <div class="os-content">
              { this.$slots?.default?.() }
            </div>
          </div>
        </div>
        <div class="os-scrollbar os-scrollbar-horizontal">
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
