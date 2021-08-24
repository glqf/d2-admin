import {
  defineComponent,
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue'
import {
  kebabCase,
  fromPairs,
  mergeWith
} from 'lodash-es'
import makeClassnames from 'classnames'
import {
  makeComponentName,
  makeComponentClassName
} from 'd2-projects/d2-utils/special/d2-components/name.js'
import os from 'overlayscrollbars'

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

const namespace = 'scroll'

export const name = makeComponentName(namespace)
export const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
  props: {
    options: { type: Object },
    extensions: { type: [String, Array, Object] },
    theme: { type: String, default: 'dark' },
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

    const isValid = () => os.valid(instance.value)

    const themeClassName = computed(() => `os-theme-${props.theme}`)

    const optionsDefault = computed(() => ({
      className: themeClassName.value,
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
              const information = instance.value.scroll()
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
      }
    }

    function mergeDefaultOption (options) {
      return mergeWith({}, optionsDefault.value, options, customizer)
    }

    const options = computed(() => mergeDefaultOption(props.options))

    function reloadOptions () {
      if (isValid()) {
        instance.value.options(mergeDefaultOption(options))
      }
    }

    function init () {
      instance.value = os(
        target.value,
        options.value,
        props.extensions
      )
    }

    onMounted(init)
    
    onBeforeUnmount(() => {
      if (isValid()) {
        instance.value.destroy()
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
    return (
      <div ref="target" class="os-host" class={ this.classnames }>
        <div class="os-resize-observer-host"/>
        <div class="os-padding">
          <div class="os-viewport">
            <div class="os-content">
              { this.$slots?.default?.() }
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
