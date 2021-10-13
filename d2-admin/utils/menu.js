import { nanoid } from 'nanoid'
import { isArray, cloneDeep } from 'lodash-es'

export const _k_id = '_id'
export const _k_children = 'children'
export const _k_title = 'title'
export const _k_icon = 'icon'
export const _k_url = 'url'

export const getMenuId = menu => menu[_k_id]
export const getMenuTitle = menu => menu[_k_title]
export const getMenuIcon = menu => menu[_k_icon]
export const getMenuUrl = menu => menu[_k_url]
export const getMenuChildren = menu => menu[_k_children] || []
export const hasChildren = menu => isArray(menu[_k_children]) && menu[_k_children].length > 0

export class Menu {
  constructor (title = '') {
    this.data = {
      [_k_id]: nanoid(10),
      [_k_title]: title,
      [_k_icon]: '',
      [_k_url]: ''
    }
    this._scope = ''
    this.prefix = ''
  }
  icon (value) {
    this.data[_k_icon] = value
    return this
  }
  url (value) {
    this.data[_k_url] = value
    return this
  }
  add (item) {
    const k = _k_children
    if (!this.data[k]) {
      this.data[k] = []
    }
    if (item instanceof Menu && this._scope) {
      item.prefix = this._scope
    }
    this.data[k].push(item)
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
      [_k_url]: this.prefix + result[_k_url],
      ...hasChildren(result) ? { [_k_children]: result[_k_children].map(e => e.value()) } : {}
    }
  }
}

export function useLayoutMenu () {
  function onMenuSelect (menu) {
    console.log(menu)
    // router.push(menuLink)
  }

  return {
    onMenuSelect
  }
}
