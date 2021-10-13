import { shallowRef, computed, watchEffect } from 'vue'
import { getFlattenMenus } from 'd2-admin/utils/menu.js'

export function menuStore () {
  const menus = shallowRef([])

  const db = computed(() => getFlattenMenus(menus.value))

  watchEffect(() => {
    console.log(db.value)
  })

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
