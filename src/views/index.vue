<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <button @click="countIncrease">click | {{ count }}</button>
  <pre>{{ headerMenus }}</pre>
</template>

<script setup>
import { useStore } from 'd2-admin/store/index.js'
import { countStore } from 'd2-admin/store/modules/count.js'
import { headerMenuStore } from 'd2-admin/store/modules/menu-header.js'

const {
  count,
  countIncrease
} = useStore(countStore)

const {
  headerMenus,
  headerMenusUpdate
} = useStore(headerMenuStore)

headerMenusUpdate([
  { name: '1' }
])
</script>
