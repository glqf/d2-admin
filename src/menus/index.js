import { Menu } from 'd2/utils/menu.js'
import { demoMenus, documentMenus } from 'd2/menus/index.js'

export const menus = [
  new Menu('第一个页面')
    .url('/dashboard/hello-world')
    .icon('icon-park-outline:page')
    .value(),
  demoMenus,
  documentMenus
]

console.log('menus', menus)
