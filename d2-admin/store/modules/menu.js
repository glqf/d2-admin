import { fromPairs } from 'lodash-es'
import { shallowRef, unref, computed } from 'vue'
import { flattenMenus, getMenuId } from 'd2-admin/utils/menu.js'

export function menuStore () {
  // [ tree, ... ]
  const menus = shallowRef([])

  // [ menu, ... ]
  const flatMenus = computed(() => flattenMenus(unref(menus)))

  // { id: index, ... }
  const flatMenusIndex = computed(() => fromPairs(unref(flatMenus).map((e, i) => [getMenuId(e), i])))

  function updateMenus (value) {
    menus.value = value
  }

  function getMenuById (id) {
    return unref(flatMenus)[unref(flatMenusI)[id]]
  }

  return {
    menus,
    flatMenus,
    flatMenusIndex,
    updateMenus,
    getMenuById
  }
}
