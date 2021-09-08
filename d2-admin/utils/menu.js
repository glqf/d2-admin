import { uniqueId, isArray } from 'lodash-es'
import { useRouter } from 'vue-router'

export const menuIdKey = '_d2AdminMenuId'
export const menuChildrenKey = 'children'

export function menuValue (source) {
  if (isArray(source)) {
    return source.map(item => menuValue(item))
  }
  if (source instanceof Menu) {
    const value = source.value()
    const children = value[menuChildrenKey]
    if (isArray(children)) {
      value[menuChildrenKey] = menuValue(children)
    }
    return value
  }
  return source
}

export class Menu {
  constructor (title = '') {
    this.data = {
      [menuIdKey]: uniqueId(menuIdKey),
      title: title,
      icon: '',
      url: ''
    }
    this._scope = ''
    this.__scope = ''
  }
  icon (value) {
    this.data.icon = value
    return this
  }
  url (value) {
    this.data.url = value
    return this
  }
  add (item) {
    const k = menuChildrenKey
    if (!this.data[k]) {
      this.data[k] = []
    }
    if (item instanceof Menu && this._scope) {
      item.__scope = this._scope
    }
    this.data[k].push(item)
    return this
  }
  scope (value) {
    this._scope = value
    return this
  }
  value () {
    const value = this.data
    if (this.__scope) {
      value.url = this.__scope + value.url
    }
    return value
  }
}

export function useLayoutMenu () {
  const router = useRouter()

  function onMenuSelect (menuLink) {
    router.push(menuLink)
  }

  return {
    onMenuSelect
  }
}
