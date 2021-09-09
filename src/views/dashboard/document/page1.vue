<template>
  <p>document / page 1</p>
  <p>{{ count }}</p>
  <p>
    <button @click="countIncrease">click</button>
  </p>
</template>

<script setup>
import { useStoreHook } from 'd2-admin/store/index.js'
import { useCount } from 'd2-admin/store/hooks/use-count.js'

const {
  count,
  countIncrease
} = useStoreHook(useCount)
</script>
