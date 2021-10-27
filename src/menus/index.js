import { Menu } from 'd2/utils/menu.js'
import { demoMenus, documentMenus } from 'd2/menus/index.js'

export const menus = [
  new Menu('Hello World').url('/dashboard/hello-world').value(),
  demoMenus,
  documentMenus
]

console.log('menus', menus)
