import { defineComponent } from 'vue'
import { menusAside } from '@/menus/index.js'
import { renderMenus } from './render.jsx'
import { useLayoutMenu } from './use-layout-menu.js'

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
