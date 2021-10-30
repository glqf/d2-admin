import { useMenuMainStore } from 'd2/store/menu-main.js'
import { makeComponentName } from 'd2/utils/component.js'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { compact } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { useMenu } from 'd2/use/menu.js'
import { getMenuId, renderMenus } from 'd2/utils/menu.jsx'

export default defineComponent({
  name: makeComponentName('admin/layout/header-aside/menu/aside'),
  setup () {
    const route = useRoute()

    const menu = useMenu()
    const { navigateByMenu } = menu

    const menuStore = useMenuMainStore()
    const { menus } = storeToRefs(menuStore)
    const { getMenuById, getMenuByUrl } = menuStore

    function onSelect ({ key }) {
      navigateByMenu(getMenuById(key))
    }

    const selectedKeys = computed(() => compact([getMenuId(getMenuByUrl(route.fullPath))]))

    return {
      menus,
      onSelect,
      selectedKeys
    }
  },
  render () {
    const {
      menus,
      onSelect,
      selectedKeys
    } = this
    return renderMenus(menus, {
      onSelect,
      selectedKeys,
      mode: 'inline'
    })
  }
})
