import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMenu } from 'd2-admin/use/menu.js'
import { getMenuId } from 'd2-admin/utils/menu.js'
import { renderMenus } from './render.jsx'

import { storeToRefs } from 'pinia'
import { useStoreOfMenuMain } from 'd2-admin/store/menu-main.js'

export default defineComponent({
  setup () {
    const route = useRoute()
    const store = useStoreOfMenuMain()

    const { menus } = storeToRefs(store)

    console.log(store.getMenuByUrl)

    const { navigateByMenu } = useMenu()

    function onSelect (id) {
      navigateByMenu(store.getMenuById(id))
    }

    const defaultActive = computed(() => getMenuId(store.getMenuByUrl(route.fullPath)))

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
