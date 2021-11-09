<template>
  <a-menu
    mode="inline"
    :selected-keys="selectedKeys"
    :open-keys="openKeys"
    @select="onSelect"
  >
    <d2-admin-layout-header-aside-menu-render
      v-for="menu of menus"
      :key="getMenuId(menu)"
      :menu="menu"
    />
  </a-menu>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'
import { useD2AdminMenuMainStore } from 'd2/store/menu-main.js'
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

    const menuStore = useD2AdminMenuMainStore()
    const { menus } = storeToRefs(menuStore)
    const { getMenuById, getMenuByUrl, getMenuPids } = menuStore

    function onSelect ({ key }) {
      navigateByMenu(getMenuById(key))
    }

    const selectedKey = computed(() => getMenuId(getMenuByUrl(route.fullPath)))

    const selectedKeys = computed(() => compact([selectedKey.value]))

    const openKeys = computed(() => getMenuPids(selectedKey.value))

    return {
      menus,
      onSelect,
      selectedKeys,
      openKeys,
      getMenuId
    }
  }
}
</script>
