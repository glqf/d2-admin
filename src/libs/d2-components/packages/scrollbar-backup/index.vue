<template>
  <div ref="el" class="os-host" :style="style">
    <div class="os-resize-observer-host"/>
    <div class="os-padding">
      <div class="os-viewport">
        <div class="os-content">
          <slot/>
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
</template>

<script setup>
import 'overlayscrollbars/css/OverlayScrollbars.css'
import './themes/os-theme-thin-dark.css'
import './themes/os-theme-thin-light.css'
import { computed, onBeforeUnmount, onMounted, ref, watch, defineProps, defineEmit } from 'vue'
import { map, isFunction, assignWith, fromPairs, kebabCase } from 'lodash-es'
import { osCallbacks, callbacksEmits } from './callbacks'
import OverlayScrollbars from 'overlayscrollbars'

const props = defineProps({
  options: { type: Object },
  extensions: { type: [String, Array, Object] },
  theme: { type: String, default: 'thin-dark' },
  cordonX: { type: Number, default: 0 },
  cordonY: { type: Number, default: 0 },
  full: { type: Boolean }
})

const emit = defineEmit([
  ...callbacksEmits,
  'in-cordon-x',
  'in-cordon-y',
  'scroll-top',
  'scroll-bottom'
])

const el = ref()

const osInstance = ref()

const style = computed(() => props.full ? { height: '100%' } : {})

function getOsTarget () {
  return el.value || null
}

function getOsInstance () {
  return osInstance.value
}

function init () {
  const osOptionsDefault = {
    className: `os-theme-${props.theme}`,
    scrollbars: {
      autoHide: 'scroll',
      autoHideDelay: 300
    },
    callbacks: fromPairs(map(osCallbacks, name => {
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
      return assignWith({}, left, right, (leftFn, rightFn) => {
        if (leftFn && rightFn) {
          return (event) => {
            leftFn(event)
            if (isFunction(rightFn)) rightFn(event)
          }
        }
      })
    }
  }
  const osOptionsMerged = assignWith({}, osOptionsDefault, props.options, customizer)
  const osTarget = getOsTarget()
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
</script>
