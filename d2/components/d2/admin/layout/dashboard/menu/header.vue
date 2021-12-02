<route>
{}
</route>

<template>
  <a-menu
    mode="horizontal"
    :selected-keys="selectedKeys"
    @select="onSelect"
  >
    <d2-admin-layout-dashboard-menu-render
      v-for="menu of menus"
      :key="getMenuId(menu)"
      :menu="menu"
    />
  </a-menu>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'
import { useD2AdminMenuSecondaryStore } from 'd2/store/menu-secondary.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { compact } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { useMenu } from 'd2/use/menu.js'
import { getMenuId } from 'd2/utils/menu.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const route = useRoute()

    const menu = useMenu()
    const { navigateByMenu } = menu

    const menuStore = useD2AdminMenuSecondaryStore()
    const { menus } = storeToRefs(menuStore)
    const { getMenuById, getMenuByUrl } = menuStore

    function onSelect ({ key }) {
      navigateByMenu(getMenuById(key))
    }

    const selectedKeys = computed(() => compact([getMenuId(getMenuByUrl(route.fullPath))]))

    return {
      menus,
      onSelect,
      selectedKeys,
      getMenuId
    }
  }
}
</script>
