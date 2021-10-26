import { useMenuMainStore } from 'd2-admin/store/menu-main.js'
import { makeComponentName } from 'd2-admin/utils/special/d2-components/name.js'
import { defineMenuComponent } from './utils/define.jsx'

export default defineMenuComponent({
  name: makeComponentName('admin/layout/header-aside/menu/vertical'),
  store: useMenuMainStore,
  props: {
    mode: 'vertical'
  }
})
