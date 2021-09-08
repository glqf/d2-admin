import { defineComponent } from 'vue'
import { menusAside } from '@/menus/index.js'
import { useLayoutMenu } from 'd2-admin/utils/menu.js'
import { renderMenus } from './render.jsx'

console.log(JSON.stringify(menusAside, null, 2))

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
