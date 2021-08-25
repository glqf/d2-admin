<style lang="scss">

</style>

<template>
  <button ref="reference">reference reference</button>
  <button ref="pop">pop</button>
</template>

<script setup>
import {
  usePopper
} from 'd2-projects/d2-use/popper.js'

const {
  reference,
  pop
} = usePopper()
</script>
