<template>
  <p>active: {{ active }}</p>
  <p>min: {{ min }}</p>
  <p>sm: {{ sm }}</p>
  <p>md: {{ md }}</p>
  <p>lg: {{ lg }}</p>
  <p>xl: {{ xl }}</p>
  <p>xxl: {{ xxl }}</p>
</template>

<script setup>
import { useBreakPoint } from 'd2-use/break-point.js'

const {
  active,
  min,
  sm,
  md,
  lg,
  xl,
  xxl
} = useBreakPoint()
</script>
