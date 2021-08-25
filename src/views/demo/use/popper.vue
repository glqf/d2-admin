<template>
  <a-button ref="trigger">trigger</a-button>
  <div ref="content">content</div>
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
