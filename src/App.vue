<template>
  <d2-config
    icon-collection="mdi"
    svg-symbol-id="icon-[dir]-[name]"
  >
    <router-view/>
  </d2-config>
</template>

<script setup>
import { useMenuMainStore } from 'd2/store/menu-main.js'
import { useMenuSecondaryStore } from 'd2/store/menu-secondary.js'
import { menuMain, menuSecondary } from '@/menus/index.js'

const menuMainStore = useMenuMainStore()
const menuSecondaryStore = useMenuSecondaryStore()

menuMainStore.setMenus(menuMain)
menuSecondaryStore.setMenus(menuSecondary)
</script>
