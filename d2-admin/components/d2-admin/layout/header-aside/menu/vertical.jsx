import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMenuMainStore } from 'd2-admin/store/menu-main.js'
import { getMenuId } from 'd2-admin/utils/menu.js'
import { useMenu } from 'd2-admin/use/menu.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const route = useRoute()

    const menu = useMenu()
    const { navigateByMenu } = menu

    const menuMainStore = useMenuMainStore()
    const { menus } = storeToRefs(menuMainStore)
    const { getMenuById, getMenuByUrl } = menuMainStore

    function onSelect (id) {
      navigateByMenu(getMenuById(id))
    }

    const defaultActive = computed(() => getMenuId(getMenuByUrl(route.fullPath)))

    return {
      menus,
      onSelect,
      defaultActive
    }
  },
  render () {
    const {
      menus,
      onSelect,
      defaultActive
    } = this
    return renderMenus(menus, {
      onSelect,
      defaultActive
    })
  }
})
