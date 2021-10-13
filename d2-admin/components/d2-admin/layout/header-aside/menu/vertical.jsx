import { defineComponent } from 'vue'
import { useStore } from 'd2-admin/store/index.js'
import { useMenu } from 'd2-admin/use/menu.js'
import { menuMainStore } from 'd2-admin/store/modules/menu-main.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const { menus, getMenuItemById } = useStore(menuMainStore)

    const { onMenuSelect } = useMenu()

    return {
      menus,
      onMenuSelect,
      getMenuItemById
    }
  },
  render () {
    return renderMenus(this.menus, {
      onSelect: id => {
        this.onMenuSelect(this.getMenuItemById(id))
      }
    })
  }
})
