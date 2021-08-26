<style lang="scss">

</style>

<template>
  <button ref="trigger">trigger trigger</button>
  <button ref="pop">pop</button>
</template>

<script setup>
import {
  usePopper
} from 'd2-projects/d2-use/popper.js'

const {
  trigger,
  pop
} = usePopper()
</script>
