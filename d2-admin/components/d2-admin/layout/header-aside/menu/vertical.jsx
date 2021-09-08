import { defineComponent } from 'vue'
import { menusAside } from '@/menus/index.js'
import { useLayoutMenu } from 'd2-admin/utils/menu.js'
import { renderMenus } from './render.jsx'

export default defineComponent({
  setup () {
    const { onMenuSelect } = useLayoutMenu()

    return {
      onMenuSelect
    }
  },
  render () {
    return renderMenus(menusAside, {
      onSelect: this.onMenuSelect
    })
  }
})
