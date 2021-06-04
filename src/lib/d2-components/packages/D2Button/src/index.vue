<template>
  <button
    :class="buttonClassNames"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="type"
    @click="handleClick">
    <d2-icon v-if="iconLeftActive" :icon="icon"/>
    <d2-icon v-if="buttonLoadingLeft" icon="mdi:loading" spin/>
    <span v-if="slotActive">
      <slot/>
    </span>
    <d2-icon v-if="iconRightActive" :icon="iconRight"/>
    <d2-icon v-if="buttonLoadingRight" icon="mdi:loading" spin/>
  </button>
</template>

<script>
import { computed } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import {
  isValidColor,
  isValidSize,
  isValidButtonTypes,
  isBoolean,
  isValuableString,
  isIntegerAndBetween
} from '../../../utils/is.js'
import D2Icon from '../../D2Icon/src/index.vue'

export const buttonProps = {
  icon: { type: String, default: '' },
  iconRight: { type: String, default: '' },
  color: { type: String, default: '', validator: value => !value || isValidColor(value) },
  size: { type: String, default: '', validator: value => !value || isValidSize(value) },
  type: { type: String, default: 'button', validator: value => isValidButtonTypes(value)},
  autofocus: { type: Boolean, default: false },
  text: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  loadingRight: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  roundLeft: { type: Boolean, default: false },
  roundRight: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  ring: { type: Boolean, default: false },
  ringOffset: { type: [Boolean, Number], default: false, validator: value => isBoolean(value) || isIntegerAndBetween(value, 0, 4) },
  ringWidth: { type: Number, default: 2 }
}

export default {
  name: 'D2Button',
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
    const slotActive = computed(() => !((!slots.default) || (props.circle && props.icon) || (props.circle && buttonLoading.value)))

    // ring
    const buttonRingOffset = computed(() => {
      const offset = props.ringOffset
      return Number.isFinite(offset) ? offset : (offset ? 1 : 0)
    })
    
    // size
    const buttonSize = computed(() => props.size || $D2COMPONENT.size)
    
    // disabled
    const buttonDisabled = computed(() => props.disabled)

    // loading
    const buttonLoadingLeft = computed(() => props.loading)
    const buttonLoadingRight = computed(() => props.loadingRight)
    const buttonLoading = computed(() => buttonLoadingLeft.value || buttonLoadingRight.value)

    // icon name and position
    const iconLeftActive = computed(() => isValuableString(props.icon) && !buttonLoadingLeft.value)
    const iconRightActive = computed(() => isValuableString(props.iconRight)  && !buttonLoadingRight.value)

    // round and special
    const round = computed(() => props.round && !props.roundLeft && !props.roundRight)
    const roundLeft = computed(() => props.roundLeft)
    const roundRight = computed(() => props.roundRight)
    
    const buttonClassNames = computed(() => classNames(
      'd2-button',
      {
        'is-plain': props.plain,
        'is-round': round.value,
        'is-round-left': roundLeft.value,
        'is-round-right': roundRight.value,
        'is-circle': props.circle,
        'is-ring': props.ring,
        'is-disabled': buttonDisabled.value,
        'is-loading': buttonLoading.value,
        'is-text': props.text,
        'is-icon-right': iconRightActive.value,
        [`d2-button--${buttonSize.value}`]: buttonSize.value,
        [`d2-button--${props.color}`]: props.color,
        [`is-ring-offset-width-${buttonRingOffset.value}`]: props.ring,
        [`is-ring-width-${props.ringWidth}`]: props.ring
      }
    ))

    const handleClick = event => {
      emit('click', event)
    }
    
    return {
      slotActive,
      iconLeftActive,
      iconRightActive,
      buttonClassNames,
      buttonDisabled,
      buttonLoadingLeft,
      buttonLoadingRight,
      handleClick
    }
  }
}
</script>
