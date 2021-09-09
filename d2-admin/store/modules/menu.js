import { shallowRef } from 'vue'

export function menuStore () {
  const menus = shallowRef([])

  function menusUpdate (newMenus) {
    menus.value = newMenus
  }

  function menusClear () {
    menus.value = []
  }

  return {
    menus,
    menusUpdate,
    menusClear
  }
}
