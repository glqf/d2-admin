import { computed, ref, unref, defineComponent, onMounted, onUpdated } from 'vue'
import { isNumber } from 'lodash-es'
import classNames from 'classnames'
import { useConfigForD2Components } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { inject } from '../../../utils/provide.js'
import { isValuableString, isTwoCNChar } from '../../../utils/string.js'
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
  props: buttonProps,
  emits: [
    'click'
  ],
  setup (props, { emit, slots }) {
    const $D2COM = useConfigForD2Components()

    const buttonRef = ref(null)

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

    const buttonLoading = computed(() => props.loading || props.loadingRight)

    const buttonRound = computed(() => (props.round || unref(inject(buttonGroupName, 'round'))) && !props.roundLeft && !props.roundRight)
    const buttonRoundLeft = computed(() => props.roundLeft)
    const buttonRoundRight = computed(() => props.roundRight)
    
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
        [`is-ring-offset-width-${buttonRingOffset.value}`]: buttonRing.value,
        [`is-ring-width-${buttonRingWidth.value}`]: buttonRing.value,
        [`${mainClassName}--${buttonSize.value}`]: buttonSize.value,
        [`${mainClassName}--${buttonColor.value}`]: buttonColor.value
      }
    ))

    const handleClick = event => {
      emit('click', event)
    }

    const renderIcon = (loading, name) =>
      loading
        ? <D2Icon icon="mdi:loading" spin/>
        : (
          isValuableString(name)
            ? <D2Icon icon={ name }/>
            : null
        )
    
    function checkContentIsTwoCNChar () {
      console.log(buttonRef.value.textContent)
    }

    onMounted(checkContentIsTwoCNChar)
    onUpdated(checkContentIsTwoCNChar)

    return () => {
      const { loading, loadingRight, icon, iconRight, autofocus, type, href, target } = props
      const content = getValueFromSlotsOrProps(slots, props)
      const slotNull = !content || buttonCircle.value && props.icon || buttonCircle.value && buttonLoading.value
      const buttonProps = {
        class: buttonClassName.value,
        disabled: buttonDisabled.value,
        autofocus: autofocus,
        type: type,
        onClick: handleClick
      }
      const contentNode = [
        renderIcon(loading, icon),
        slotNull ? null : <span>{ content }</span>,
        renderIcon(loadingRight, iconRight)
      ]
      if (isValuableString(href)) {
        return <a {...buttonProps} href={href} target={target} ref={ buttonRef }>{ contentNode }</a>
      }
      return <button {...buttonProps} ref={ buttonRef }>{ contentNode }</button>
    }
  }
})
