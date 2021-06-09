<template>
  <button
    :class="buttonClassNames"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="type"
    @click="handleClick">
    <d2-icon v-if="buttonIconLeftActive" :icon="icon"/>
    <d2-icon v-if="buttonLoadingLeft" icon="mdi:loading" spin/>
    <span v-if="slotActive">
      <slot/>
    </span>
    <d2-icon v-if="buttonIconRightActive" :icon="iconRight"/>
    <d2-icon v-if="buttonLoadingRight" icon="mdi:loading" spin/>
  </button>
</template>

<script>
import { computed, unref } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { inject } from '../../../utils/provide.js'
import { isValuableString, isFinite } from '../../../utils/is.js'
import { findFirstDifferent } from '../../../utils/tool.js'
import { name as buttonGroupName } from './button-group.jsx'
import D2Icon from '../../icon/src/icon.vue'
import buttonProps from './props.js'

export const name = makeComponentName('button')

export default {
  name,
  components: {
    D2Icon
  },
  props: buttonProps,
  emits: [
    'click'
  ],
  setup (props, { emit, slots }) {
    const $D2COMPONENT = useGlobalConfig()

    // under what circumstances will the slot contents not be displayed
    // slot content is not set
    // circle mode and has icon prop
    const slotActive = computed(() => !((!slots.default) || (buttonCircle.value && props.icon) || (buttonCircle.value && buttonLoading.value)))

    // ring
    const buttonRingOffset = computed(() => {
      const offset = props.ringOffset
      return isFinite(offset) ? offset : (offset ? 1 : 0)
    })
    
    // size
    const buttonSize = computed(() => props.size || unref(inject(buttonGroupName, 'size')) || $D2COMPONENT.size)

    // color
    const buttonColor = computed(() => props.color || unref(inject(buttonGroupName, 'color')))

    // plain
    const buttonPlain = computed(() => props.plain || unref(inject(buttonGroupName, 'plain')))

    // text
    const buttonText = computed(() => props.text || unref(inject(buttonGroupName, 'text')))

    // circle
    const buttonCircle = computed(() => props.circle || unref(inject(buttonGroupName, 'circle')))

    // ring
    const buttonRing = computed(() => props.ring || unref(inject(buttonGroupName, 'ring')))
    const buttonRingWidth = computed(() => findFirstDifferent(buttonProps.ringWidth.default, props.ringWidth, unref(inject(buttonGroupName, 'ringWidth'))))
    
    // disabled
    const buttonDisabled = computed(() => props.disabled || unref(inject(buttonGroupName, 'disabled')))

    // loading
    const buttonLoadingLeft = computed(() => props.loading)
    const buttonLoadingRight = computed(() => props.loadingRight)
    const buttonLoading = computed(() => buttonLoadingLeft.value || buttonLoadingRight.value)

    // round and special
    const buttonRound = computed(() => (props.round || unref(inject(buttonGroupName, 'round'))) && !props.roundLeft && !props.roundRight)
    const buttonRoundLeft = computed(() => props.roundLeft)
    const buttonRoundRight = computed(() => props.roundRight)

    // icon name and position
    const buttonIconLeftActive = computed(() => isValuableString(props.icon) && !buttonLoadingLeft.value)
    const buttonIconRightActive = computed(() => isValuableString(props.iconRight)  && !buttonLoadingRight.value)
    
    const buttonClassNames = computed(() => classNames(
      makeComponentClassName('button'),
      { 
        'is-plain': buttonPlain.value,
        'is-round': buttonRound.value,
        'is-round-left': buttonRoundLeft.value,
        'is-round-right': buttonRoundRight.value,
        'is-circle': buttonCircle.value,
        'is-ring': buttonRing.value,
        'is-disabled': buttonDisabled.value,
        'is-loading': buttonLoading.value,
        'is-text': buttonText.value,
        'is-icon-right': buttonIconRightActive.value,
        [`d2-button--${buttonSize.value}`]: buttonSize.value,
        [`d2-button--${buttonColor.value}`]: buttonColor.value,
        [`is-ring-offset-width-${buttonRingOffset.value}`]: buttonRing.value,
        [`is-ring-width-${buttonRingWidth.value}`]: buttonRing.value
      }
    ))

    const handleClick = event => {
      emit('click', event)
    }
    
    return {
      slotActive,
      buttonIconLeftActive,
      buttonIconRightActive,
      buttonClassNames,
      buttonDisabled,
      buttonLoadingLeft,
      buttonLoadingRight,
      handleClick
    }
  }
}
</script>
