import { fromPairs } from 'lodash-es'
import { shallowRef, unref, computed } from 'vue'
import { flattenMenus, getMenuId } from 'd2-admin/utils/menu.js'

export function menuStore () {
  // [ tree, ... ]
  const menus = shallowRef([])

  // [ menu, ... ]
  const _flat = computed(() => flattenMenus(unref(menus)))

  // { id: index, ... }
  const _index = computed(() => fromPairs(unref(_flat).map((e, i) => [getMenuId(e), i])))

  function updateMenus (value) {
    menus.value = value
  }

  function getMenuById (id) {
    return unref(_flat)[unref(_index)[id]]
  }

  return {
    menus,
    updateMenus,
    getMenuById
  }
}
