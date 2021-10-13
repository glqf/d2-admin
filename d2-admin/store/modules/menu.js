import { fromPairs } from 'lodash-es'
import { shallowRef, computed, watchEffect } from 'vue'
import { getFlattenMenus, getMenuId } from 'd2-admin/utils/menu.js'

export function menuStore () {
  // [ tree, ... ]
  const menus = shallowRef([])

  // [ menu, ... ]
  const menusDatabase = computed(() => getFlattenMenus(menus.value))

  // { id: index, ... }
  const menusDatabaseIndex = computed(() => fromPairs(menusDatabase.value.map((e, i) => [getMenuId(e), i])))

  function menuUpdate (newMenus) {
    menus.value = newMenus
  }

  function menuClear () {
    menus.value = []
  }

  function getMenuItemById (id) {
    return menusDatabase.value[menusDatabaseIndex.value[id]]
  }

  return {
    menus,
    menusDatabase,
    menusDatabaseIndex,
    menuUpdate,
    menuClear,
    getMenuItemById
  }
}
