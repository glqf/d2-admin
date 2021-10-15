import { defineComponent, computed, unref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'd2-admin/store/index.js'
import { menuMainStore } from 'd2-admin/store/modules/menu-main.js'
import { useMenu } from 'd2-admin/use/menu.js'
import { getMenuId } from 'd2-admin/utils/menu.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const route = useRoute()

    const { menus, getMenuById, getMenuByUrl } = useStore(menuMainStore)
    const { navigateByMenu } = useMenu()

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
