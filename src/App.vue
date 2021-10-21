<template>
  <d2-config
    icon-collection="mdi"
    svg-symbol-id="icon-[dir]-[name]"
  >
    <router-view/>
  </d2-config>
</template>

<script setup>
import { useMenuMainStore } from 'd2-admin/store/menu-main.js'
import { menusAside } from '@/menus/index.js'

const menuMainStore = useMenuMainStore()

menuMainStore.setMenus(menusAside)
</script>
