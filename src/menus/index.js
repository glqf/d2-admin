import { Menu } from 'd2/utils/menu.js'
import { demoMenus, documentMenus, dashboardIndexMenu, indexMenu } from 'd2/menus/index.js'

const helloWorldMenu = new Menu('第一个页面')
  .url('/dashboard/hello-world')
  .icon('icon-park-outline:file-code')
  .value()

export const menus = [
  indexMenu,
  dashboardIndexMenu,
  helloWorldMenu,
  demoMenus,
  documentMenus
]

console.log('menus', menus)
