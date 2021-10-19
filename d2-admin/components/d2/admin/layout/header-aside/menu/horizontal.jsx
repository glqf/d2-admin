import { useMenuMainStore } from 'd2-admin/store/menu-main.js'
import { defineMenuComponent } from './utils/define.jsx'

export default defineMenuComponent({
  store: useMenuMainStore,
  props: {
    mode: 'horizontal'
  }
})
