import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isFlex } from '../../../utils/is.js'

export const name = makeComponentName('flex')
export const baseClassName = makeComponentClassName('flex')

export default defineComponent({
  name,
  props: {
    // flex toggle
    // <d2-flex>                          <-    flex
    //   <d2-flex>...</d2-flex>           <-    block
    //   <d2-flex flex>                   <-    flex
    //     <d2-flex>...</d2-flex>         <-    block
    //     <d2-flex flex>...</d2-flex>    <-    flex
    //   </d2-flex>
    // </d2-flex>
    flex: { type: Boolean },
    // flex attributes
    inline: { type: Boolean },
    wrap: { type: Boolean },
    wrapR: { type: Boolean },
    dir: { type: String, default: '', validator: value => isFlex('dir', value, true) },
    main: { type: String, default: '', validator: value => isFlex('main', value, true) },
    cross: { type: String, default: '', validator: value => isFlex('cross', value, true) },
    box: { type: String, default: '', validator: value => isFlex('box', value, true) },
    content: { type: String, default: '', validator: value => isFlex('content', value, true) },
    // helper
    center: { type: Boolean },
    tag: { type: String, default: 'div' }
  },
  setup (props, { slots }) {
    const flexCenter = computed(() => props.center ? 'center' : '')

    const flexMain = computed(() => flexCenter.value || props.main)

    const flexCross = computed(() => flexCenter.value || props.cross)

    const flexClassNames = computed(() => classNames(
      baseClassName,
      {
        'is-flex': props.flex,
        'is-inline': props.inline,
        'is-wrap': props.wrap,
        'is-wrap-r': props.wrapR,
        [`is-dir-${props.dir}`]: props.dir,
        [`is-main-${flexMain.value}`]: flexMain.value,
        [`is-cross-${flexCross.value}`]: flexCross.value,
        [`is-box-${props.box}`]: props.box,
        [`is-content-${props.content}`]: props.content
      }
    ))
    
    return () => <props.tag class={ flexClassNames.value }>
      { slots.default?.() }
    </props.tag>
  }
})
