<template>
  <d2-config icon-collection="mdi">
    <router-view/>
  </d2-config>
</template>

<script setup>
import { creatStore } from 'd2-admin/store/index.js'
import { menusAside } from '@/menus/index.js'

const { headerMenuStore } = creatStore()

const { headerMenuUpdate } = headerMenuStore

headerMenuUpdate(menusAside)
</script>
