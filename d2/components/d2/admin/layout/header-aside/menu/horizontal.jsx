import { useMenuMainStore } from 'd2/store/menu-main.js'
import { makeComponentName } from 'd2/utils/special/d2-components/name.js'
import { defineMenuComponent } from './utils/define.jsx'

export default defineMenuComponent({
  name: makeComponentName('admin/layout/header-aside/menu/horizontal'),
  store: useMenuMainStore,
  props: {
    mode: 'horizontal'
  }
})
