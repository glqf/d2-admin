import { defineComponent } from 'vue'
import { useStore } from 'd2-admin/store/index.js'
import { useLayoutMenu } from 'd2-admin/utils/menu.js'
import { menuMainStore } from 'd2-admin/store/modules/menu-main.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const { menus } = useStore(menuMainStore)

    const { onMenuSelect } = useLayoutMenu()

    return {
      menus,
      onMenuSelect
    }
  },
  render () {
    return renderMenus(this.menus, {
      onSelect: (index, indexPath, item, routeResult) => this.onMenuSelect(item)
    })
  }
})
