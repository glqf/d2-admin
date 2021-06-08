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
import { computed, unref } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import { makeComponentName } from '../../../utils/make.js'
import { inject } from '../../../utils/provide.js'
import { isValuableString, isFinite } from '../../../utils/is.js'
import { name as buttonGroupName } from '../../D2ButtonGroup/src/index.vue'
import D2Icon from '../../D2Icon/src/index.vue'
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
    const slotActive = computed(() => !((!slots.default) || (props.circle && props.icon) || (props.circle && buttonLoading.value)))

    // ring
    const buttonRingOffset = computed(() => {
      const offset = props.ringOffset
      return isFinite(offset) ? offset : (offset ? 1 : 0)
    })
    
    // size
    const buttonSize = computed(() => props.size || unref(inject(buttonGroupName, 'size')) || $D2COMPONENT.size)

    // color
    const buttonColor = computed(() => props.color || unref(inject(buttonGroupName, 'color')))
    
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
        [`d2-button--${buttonColor.value}`]: buttonColor.value,
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
