<template>
  <d2-config icon-collection="mdi">
    <router-view/>
  </d2-config>
</template>

<script setup>
import { useStoreOfMenuMain } from 'd2-admin/store/menu-main.js'
import { menusAside } from '@/menus/index.js'

const menuMainStore = useStoreOfMenuMain()

menuMainStore.setMenus(menusAside)
</script>
