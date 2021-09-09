import { camelCase, mapKeys } from 'lodash-es'
import { menuStore } from './menu.js'

export const headerMenuStore = mapKeys(menuStore(), (_, key) => camelCase(`header-${key}`))
