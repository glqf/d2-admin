import {
  defineComponent,
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue'
import makeClassnames from 'classnames'
import OverlayScrollbars from 'overlayscrollbars'
import {
  makeComponentName,
  makeComponentClassName
} from '../../../utils/name.js'
import {
  kebabCase,
  fromPairs,
  mergeWith
} from 'lodash-es'

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

const namespace = 'scrollbar'

const name = makeComponentName(namespace)
const classname = makeComponentClassName(namespace)

export default defineComponent({
  name,
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
  setup (props, { slots, emit }) {
    const target = ref(null)

    const osInstance = ref(null)

    function init () {
      const osOptionsDefault = {
        className: `os-theme-${props.theme}`,
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
                const information = osInstance.value.scroll()
                const ratioY = information.ratio.y
                emit(emitName, event)
                const cordonY = information.max.y - information.position.y
                const cordonX = information.max.x - information.position.x
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
      }
      const customizer = (left, right, key) => {
        if (key === 'callbacks') {
          return mergeWith({}, left, right, (leftFn, rightFn) => {
            if (leftFn && rightFn) {
              return (event) => {
                leftFn(event)
                if (isFunction(rightFn)) rightFn(event)
              }
            }
          })
        }
      }
      const osOptionsMerged = mergeWith({}, osOptionsDefault, props.options, customizer)
      const osTarget = target.value
      // https://kingsora.github.io/OverlayScrollbars/#!documentation/options
      osInstance.value = OverlayScrollbars(
        osTarget,
        osOptionsMerged,
        props.extensions
      )
    }

    onMounted(() => {
      init()
    })
    
    watch(() => props.options, (options) => {
      if (OverlayScrollbars.valid(osInstance.value)) {
        osInstance.value.options(options)
      }
    })
    
    onBeforeUnmount(() => {
      if (OverlayScrollbars.valid(osInstance.value)) {
        osInstance.value.destroy()
        osInstance.value = null
      }
    })

    const style = computed(() => ({}))
    const classnames = computed(() => makeClassnames(classname, {}))

    return () => (
      <div ref={ target } class="os-host" class={ classnames.value } style={ style.value }>
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
