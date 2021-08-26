<template>
  <button ref="triggerRef">trigger trigger</button>
  <button ref="popperRef">pop</button>
</template>

<script setup>
import { usePopper } from 'd2-projects/d2-use/popper.js'

const {
  triggerRef,
  popperRef
} = usePopper()
</script>
