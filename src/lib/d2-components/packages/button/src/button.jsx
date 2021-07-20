import { computed, unref, defineComponent, markRaw } from 'vue'
import { isNumber } from 'lodash-es'
import classNames from 'classnames'
import { useConfigForD2Components } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { inject } from '../../../utils/provide.js'
import { isValuableString } from '../../../utils/string.js'
import { findFirstDifferent } from '../../../utils/tool.js'
import { getValueFromSlotsOrProps } from '../../../utils/props.js'
import { name as buttonGroupName } from './button-group.jsx'
import D2Icon from '../../icon/src/icon.vue'
import buttonProps from './props.js'

export const name = makeComponentName('button')
export const mainClassName = makeComponentClassName('button')

export default defineComponent({
  name,
  inheritAttrs: false,
  components: {
    D2Icon
  },
  props: buttonProps,
  emits: [
    'click'
  ],
  setup (props, { emit, slots }) {
    const $D2COM = useConfigForD2Components()
    
    const slotActive = computed(() => {
      return !((!slots.default)
        || (buttonCircle.value && props.icon)
        || (buttonCircle.value && buttonLoading.value))
    })

    const buttonRingOffset = computed(() => {
      const offset = props.ringOffset
      return isNumber(offset) ? offset : (offset ? 1 : 0)
    })

    const buttonSize = computed(() => props.size || unref(inject(buttonGroupName, 'size')) || $D2COM.size)

    const buttonColor = computed(() => props.color || unref(inject(buttonGroupName, 'color')))

    const buttonPlain = computed(() => props.plain || unref(inject(buttonGroupName, 'plain')))

    const buttonText = computed(() => props.text || unref(inject(buttonGroupName, 'text')))

    const buttonCircle = computed(() => props.circle || unref(inject(buttonGroupName, 'circle')))

    const buttonRing = computed(() => props.ring || unref(inject(buttonGroupName, 'ring')))
    const buttonRingWidth = computed(() => findFirstDifferent(buttonProps.ringWidth.default, props.ringWidth, unref(inject(buttonGroupName, 'ringWidth'))))
    
    const buttonDisabled = computed(() => props.disabled || unref(inject(buttonGroupName, 'disabled')))

    const buttonActive = computed(() => props.active || unref(inject(buttonGroupName, 'active')))

    const buttonLoadingLeft = computed(() => props.loading)
    const buttonLoadingRight = computed(() => props.loadingRight)
    const buttonLoading = computed(() => buttonLoadingLeft.value || buttonLoadingRight.value)

    const buttonRound = computed(() => (props.round || unref(inject(buttonGroupName, 'round'))) && !props.roundLeft && !props.roundRight)
    const buttonRoundLeft = computed(() => props.roundLeft)
    const buttonRoundRight = computed(() => props.roundRight)

    const buttonIconLeftActive = computed(() => isValuableString(props.icon) && !buttonLoadingLeft.value)
    const buttonIconRightActive = computed(() => isValuableString(props.iconRight)  && !buttonLoadingRight.value)
    
    const buttonClassName = computed(() => classNames(
      mainClassName,
      {
        'is-plain': buttonPlain.value,
        'is-round': buttonRound.value,
        'is-round-left': buttonRoundLeft.value,
        'is-round-right': buttonRoundRight.value,
        'is-circle': buttonCircle.value,
        'is-ring': buttonRing.value,
        'is-disabled': buttonDisabled.value,
        'is-active': buttonActive.value,
        'is-loading': buttonLoading.value,
        'is-text': buttonText.value,
        'is-icon-right': buttonIconRightActive.value,
        [`is-ring-offset-width-${buttonRingOffset.value}`]: buttonRing.value,
        [`is-ring-width-${buttonRingWidth.value}`]: buttonRing.value,
        [`${mainClassName}--${buttonSize.value}`]: buttonSize.value,
        [`${mainClassName}--${buttonColor.value}`]: buttonColor.value
      }
    ))

    const handleClick = event => {
      emit('click', event)
    }

    return () => {
      const children = getValueFromSlotsOrProps(slots, props)
      const node = 
        <button
          class={ buttonClassName.value }
          disabled={ buttonDisabled.value }
          autofocus={ props.autofocus }
          type={ props.type }
          onClick={ handleClick }
        >
          { buttonIconLeftActive.value ? <d2-icon icon={ props.icon }/> : null }
          { buttonLoadingLeft.value ? <d2-icon icon="mdi:loading" spin/> : null }
          { slotActive.value ? <span>{ children }</span> : null }
          { buttonIconRightActive.value ? <d2-icon icon={ props.iconRight.value }/> : null }
          { buttonLoadingRight.value ? <d2-icon icon="mdi:loading" spin/> : null }
        </button>
      return node
    }
  }
})
