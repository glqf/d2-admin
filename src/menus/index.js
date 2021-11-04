import { Menu } from 'd2/utils/menu.js'
import {
  indexMenu,
  dashboardIndexMenu,
  demoMenus,
  documentMenus
} from 'd2/menus/index.js'

const startMenu = new Menu('第一个页面')
  .url('/dashboard/hello-world')
  .icon('icon-park-outline:file-code')
  .value()

export const menuMain = [
  indexMenu.value(),
  dashboardIndexMenu.value(),
  startMenu,
  demoMenus.value(),
  documentMenus.value()
]

export const menuSecondary = [
  demoMenus.value(),
  documentMenus.value()
]

console.log('menuMain', menuMain)
