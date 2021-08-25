<template>
  <button ref="trigger">trigger trigger</button>
  <button ref="content">content</button>
</template>

<script setup>
import {
  usePopper
} from 'd2-projects/d2-use/popper.js'

const {
  trigger,
  content
} = usePopper()
</script>
