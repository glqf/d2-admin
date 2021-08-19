<template>
  <pre>{{ status }}</pre>
  <p>width: {{ width }}</p>
</template>

<script setup>
import { useBreakPoint } from 'd2-use/break-point.js'

const status = useBreakPoint()

const responsive = status.responsive

const width = responsive(100, {
  md: 50,
  lg: 25
})
</script>
