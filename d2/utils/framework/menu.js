import { nanoid } from 'nanoid'
import { isArray, cloneDeep, omit, get, pick } from 'lodash-es'
import { flattenObjectArray } from 'd2/utils/lang/array.js'
import routes from 'virtual:generated-pages'

export const _k_id = '_id'
export const _k_children = 'children'
export const _k_title = 'title'
export const _k_icon = 'icon'
export const _k_url = 'url'

const _get = (k, d) => m => m?.[k] || d

export const getMenuId = _get(_k_id)
export const getMenuTitle = _get(_k_title)
export const getMenuIcon = _get(_k_icon)
export const getMenuUrl = _get(_k_url)
export const getMenuChildren = _get(_k_children, [])

export const flattenMenus = menus => {
  const result = []
  menus.forEach(menu => {
    result.push(omit(menu, _k_children))
    if (hasChildren(menu)) {
      result.push(...flattenMenus(getMenuChildren(menu)))
    }
  })
  return result
}

export function getMenuPidIndex (menus, pid) {
  const result = {}
  menus.forEach(menu => {
    result[getMenuId(menu)] = pid
    if (hasChildren(menu)) {
      Object.assign(result, getMenuPidIndex(getMenuChildren(menu), getMenuId(menu)))
    }
  })
  return result
}

export const hasChildren = menu => getMenuChildren(menu).length > 0

export class Menu {
  constructor (title = '') {
    this.data = {
      [_k_id]: nanoid(10),
      [_k_title]: title,
      [_k_icon]: '',
      [_k_url]: '',
      [_k_children]: []
    }
    this._scope = ''
    this._prefix = ''
  }
  icon (value) {
    this.data[_k_icon] = value
    return this
  }
  url (value) {
    this.data[_k_url] = value
    return this
  }
  add (data) {
    if (isArray(data)) {
      data.forEach(item => {
        if (item instanceof Menu && this._scope) {
          item._prefix = this._scope
        }
      })
    } else if (data instanceof Menu && this._scope) {
      data._prefix = this._scope
    }
    this.data[_k_children].push(...(isArray(data) ? data : [data]))
    return this
  }
  scope (value) {
    this._scope = value
    return this
  }
  value () {
    const result = cloneDeep(this.data)
    return {
      ...result,
      [_k_url]: this._prefix + result[_k_url],
      [_k_children]: result[_k_children].map(
        item => item instanceof Menu ? item.value() : item
      )
    }
  }
}

const routesFlat = flattenObjectArray(
  routes,
  'children',
  (item, _) => pick(item, ['name', 'path', 'meta'])
)

function filterRoutes (rule) {
  return routesFlat.filter(route => rule.test(route.name))
}

function createRouteMenu (route, baseUrl) {
  const url = baseUrl + route.path
  const title = get(route.meta, 'd2admin.menu.title', route.path)
  const menu = new Menu(title)
  menu.url(url)
  return menu
}

export function createRouteMenus ({
  routeNameExp = /.+/,
  baseUrl = ''
} = {}) {
  return filterRoutes(routeNameExp).map(route => createRouteMenu(route, baseUrl))
}
