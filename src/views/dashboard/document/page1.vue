<template>
  <p>document / page 1</p>
  <button @click="countIncrease">click | {{ count }}</button>
</template>

<script setup>
import { useStore } from 'd2-admin/store/index.js'
import { countStore } from 'd2-admin/store/modules/count.js'

const {
  count,
  countIncrease
} = useStore(countStore)
</script>
