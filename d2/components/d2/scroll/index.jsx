import makeClassnames from 'classnames'
import { defineComponent, ref, unref, computed, watch, onBeforeUnmount, onMounted } from 'vue'
import { kebabCase, fromPairs, mergeWith } from 'lodash-es'
import { makeName, makeClassName } from 'd2/utils/framework/component.js'
import os from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.css'

export const osCallbacks = [
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

const osCallbackToEmitName = name => kebabCase(name.replace(/^on/, ''))

export const emits = osCallbacks.map(osCallbackToEmitName)

const name = 'scroll'

export const componentName = makeName(name)
export const classname = makeClassName(name)

export default defineComponent({
  name: componentName,
  inheritAttrs: false,
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
  setup (props, { emit, attrs }) {
    const scrollbarTarget = ref(null)

    const scrollbarVertical = ref(null)
    const scrollbarHorizontal = ref(null)

    const instance = ref(null)

    const isValid = () => os.valid(unref(instance))

    const optionsDefault = computed(() => ({
      className: `os-theme-${props.theme}`,
      scrollbars: {
        autoHide: 'leave',
        autoHideDelay: 300
      },
      callbacks: fromPairs(osCallbacks.map(name => {
        const emitName = osCallbackToEmitName(name)
        let callback = () => {}
        switch (name) {
          case 'onScroll':
            callback = event => {
              const info = unref(instance).scroll()
              const ratioY = info.ratio.y
              emit(emitName, event)
              const cordonY = info.max.y - info.position.y
              const cordonX = info.max.x - info.position.x
              if (cordonY <= props.cordonY) emit('in-cordon-y', event)
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
      }
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
        unref(scrollbarTarget),
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
    
    const classnames = computed(() => makeClassnames(classname, attrs.class))

    return {
      scrollbarTarget,
      scrollbarVertical,
      scrollbarHorizontal,
      classnames,
      instance
    }
  },
  render () {
    const {
      classnames
    } = this
    return (
      <div ref="scrollbarTarget" class="os-host" class={ classnames }>
        <div class="os-resize-observer-host"/>
        <div class="os-padding">
          <div class="os-viewport">
            <div class="os-content">
              { this.$slots?.default?.() }
            </div>
          </div>
        </div>
        <div ref="scrollbarHorizontal" class="os-scrollbar os-scrollbar-horizontal">
          <div class="os-scrollbar-track">
            <div class="os-scrollbar-handle"/>
          </div>
        </div>
        <div ref="scrollbarVertical" class="os-scrollbar os-scrollbar-vertical">
          <div class="os-scrollbar-track">
            <div class="os-scrollbar-handle"/>
          </div>
        </div>
        <div class="os-scrollbar-corner"/>
      </div>
    )
  }
})
