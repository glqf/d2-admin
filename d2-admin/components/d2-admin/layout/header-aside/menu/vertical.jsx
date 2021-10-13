import { defineComponent, reactive } from 'vue'
import { useStore } from 'd2-admin/store/index.js'
import { useLayoutMenu } from 'd2-admin/utils/menu.js'
import { asideMenuStore } from 'd2-admin/store/modules/aside-menu.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const { asideMenus } = reactive(useStore(asideMenuStore))

    const { onMenuSelect } = useLayoutMenu()

    return {
      asideMenus,
      onMenuSelect
    }
  },
  render () {
    return renderMenus(this.asideMenus, {
      onSelect: (index, indexPath, item, routeResult) => this.onMenuSelect(item)
    })
  }
})
