import { Menu } from 'd2/utils/menu.js'
import {
  indexMenu,
  dashboardIndexMenu,
  dashboardDemoComponentMenus,
  dashboardDemoLayoutMenus,
  dashboardDocumentMenus
} from 'd2/menus/index.js'

const startMenu = new Menu('第一个页面')
  .url('/dashboard/hello-world')
  .icon('icon-park-outline:file-code')
  .value()

export const menuMain = [
  indexMenu.value(),
  dashboardIndexMenu.value(),
  startMenu,
  dashboardDemoComponentMenus.value(),
  dashboardDemoLayoutMenus.value(),
  dashboardDocumentMenus.value()
]

export const menuSecondary = [
  dashboardDemoComponentMenus.value(),
  dashboardDocumentMenus.value()
]

console.log('menuMain', menuMain)
