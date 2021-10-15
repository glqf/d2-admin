import { fromPairs } from 'lodash-es'
import { shallowRef, unref, computed } from 'vue'
import { flattenMenus, getMenuId, getMenuUrl } from 'd2-admin/utils/menu.js'

export function menuStore () {
  // [ tree, ... ]
  const menus = shallowRef([])

  // [ menu, ... ]
  const flatMenus = computed(() => flattenMenus(unref(menus)))

  // { id: index, ... }
  const flatMenusIdIndex = computed(() => fromPairs(unref(flatMenus).map((e, i) => [getMenuId(e), i])))
  // { url: index, ... }
  const flatMenusUrlIndex = computed(() => fromPairs(unref(flatMenus).map((e, i) => [getMenuUrl(e), i])))

  /**
   * Set menus value
   * @param {array} value menus
   */
  function setMenus (value) {
    menus.value = value
  }

  /**
   * Find menu item by menu id
   * @param {string} id menu id
   * @returns menu item
   */
  function getMenuById (id) {
    return unref(flatMenus)[unref(flatMenusIdIndex)[id]]
  }

  /**
   * Find menu item by menu url
   * @param {string} url menu url
   * @returns menu item
   */
   function getMenuByUrl (url) {
    return unref(flatMenus)[unref(flatMenusUrlIndex)[url]]
  }

  return {
    menus,
    flatMenus,
    flatMenusIdIndex,
    flatMenusUrlIndex,
    setMenus,
    getMenuById,
    getMenuByUrl
  }
}
