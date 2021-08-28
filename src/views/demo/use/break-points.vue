<template>
  <p>min: {{ min }}</p>
  <p>sm: {{ sm }}</p>
  <p>md: {{ md }}</p>
  <p>lg: {{ lg }}</p>
  <p>xl: {{ xl }}</p>
  <p>xxl: {{ xxl }}</p>
  <p>active: {{ active }}</p>
  <p>width: {{ width }}</p>
  <p>{{ responsive(100, { md: 50, lg: 25 }) }}</p>
</template>

<script setup>
import { useBreakPoint } from 'd2-projects/d2-use/use-break-point.js'

const {
  min, sm, md, lg, xl, xxl,
  active, width,
  responsive
} = useBreakPoint()
</script>
