import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { pickBy, isUndefined } from 'lodash-es'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isFlex } from '../../../utils/is.js'

export const name = makeComponentName('flex')
export const mainClassName = makeComponentClassName('flex')

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
    // flex parent attributes
    inline: { type: Boolean },
    wrap: { type: Boolean },
    wrapR: { type: Boolean },
    dir: { type: String, default: '', validator: value => isFlex('dir', value, true) },
    main: { type: String, default: '', validator: value => isFlex('main', value, true) },
    cross: { type: String, default: '', validator: value => isFlex('cross', value, true) },
    box: { type: String, default: '', validator: value => isFlex('box', value, true) },
    content: { type: String, default: '', validator: value => isFlex('content', value, true) },
    // flex child attributes
    order: { type: Number },
    grow: { type: Number },
    shrink: { type: Number },
    self: { type: String, default: '', validator: value => isFlex('self', value, true) },
    // helper
    center: { type: Boolean },
    tag: { type: String, default: 'div' }
  },
  setup (props, { slots }) {
    const flexCenter = computed(() => props.center ? 'center' : '')

    const flexMain = computed(() => flexCenter.value || props.main)

    const flexCross = computed(() => flexCenter.value || props.cross)

    const flexClassName = computed(() => classNames(
      mainClassName,
      {
        'is-flex': props.flex,
        'is-inline': props.inline,
        'is-wrap': props.wrap,
        'is-wrap-r': props.wrapR,
        [`is-dir-${props.dir}`]: props.dir,
        [`is-main-${flexMain.value}`]: flexMain.value,
        [`is-cross-${flexCross.value}`]: flexCross.value,
        [`is-box-${props.box}`]: props.box,
        [`is-content-${props.content}`]: props.content,
        [`is-self-${props.self}`]: props.self
      }
    ))

    const flexStyle = computed(() => pickBy({
      order: props.order,
      flexGrow: props.grow,
      flexShrink: props.shrink
    }, value => !isUndefined(value)))
    
    return () =>
      <props.tag class={ flexClassName.value } style={ flexStyle.value }>
        { slots.default?.() }
      </props.tag>
  }
})
