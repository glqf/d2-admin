import { camelCase, mapKeys } from 'lodash-es'
import { menuStore } from './menu.js'

export const asideMenuStore = mapKeys(menuStore(), (_, key) => camelCase(`aside-${key}`))
