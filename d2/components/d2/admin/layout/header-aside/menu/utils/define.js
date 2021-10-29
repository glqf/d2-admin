import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { compact } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { useMenu } from 'd2/use/menu.js'
import { getMenuId } from 'd2/utils/menu.js'
import { renderMenus } from './render.jsx'

export function defineMenuComponent ({
  name,
  store,
  props = {}
} = {}) {
  return defineComponent({
    name,
    setup () {
      const route = useRoute()
  
      const menu = useMenu()
      const { navigateByMenu } = menu
  
      const menuStore = store()
      const { menus } = storeToRefs(menuStore)
      const { getMenuById, getMenuByUrl } = menuStore
  
      function onSelect ({ item, key, selectedKeys }) {
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
        ...props
      })
    }
  })
}
