import { shallowReactive } from 'vue'

export function menuStore () {
  const menus = shallowReactive([])

  function setMenus (newMenus) {
    menus = newMenus
  }

  return {
    menus,
    setMenus
  }
}
