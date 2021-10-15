import { defineComponent } from 'vue'
import { useStore } from 'd2-admin/store/index.js'
import { useMenu } from 'd2-admin/use/menu.js'
import { menuMainStore } from 'd2-admin/store/modules/menu-main.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const { menus, getMenuById } = useStore(menuMainStore)
    const { navigateByMenu } = useMenu()

    function onSelect (id) {
      navigateByMenu(getMenuById(id))
    }

    return {
      menus,
      onSelect
    }
  },
  render () {
    return renderMenus(this.menus, {
      onSelect: this.onSelect
    })
  }
})
