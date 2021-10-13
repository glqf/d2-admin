import { defineComponent, reactive } from 'vue'
import { menusAside } from '@/menus/index.js'
import { useStore } from 'd2-admin/store/index.js'
import { useLayoutMenu } from 'd2-admin/utils/menu.js'
import { asideMenuStore } from 'd2-admin/store/modules/aside-menu.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const { asideMenus } = reactive(useStore(asideMenuStore))

    console.log(asideMenus)

    const { onMenuSelect } = useLayoutMenu()

    return {
      onMenuSelect
    }
  },
  render () {
    return renderMenus(menusAside, {
      onSelect: (index, indexPath, item, routeResult) => this.onMenuSelect(item)
    })
  }
})
