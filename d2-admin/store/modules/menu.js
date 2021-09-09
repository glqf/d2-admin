import { shallowRef } from 'vue'

export function menuStore () {
  const menus = shallowRef([])

  function menuUpdate (newMenus) {
    menus.value = newMenus
  }

  function menuClear () {
    menus.value = []
  }

  return {
    menus,
    menuUpdate,
    menuClear
  }
}
