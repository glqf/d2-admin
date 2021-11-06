import { Menu } from 'd2/utils/menu.js'
import {
  indexMenu,
  dashboardIndexMenu,
  demoComponentMenus,
  demoLayoutMenus,
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
  demoComponentMenus.value(),
  demoLayoutMenus.value(),
  documentMenus.value()
]

export const menuSecondary = [
  demoComponentMenus.value(),
  documentMenus.value()
]

console.log('menuMain', menuMain)
