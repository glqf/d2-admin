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
  constructor ({
    title = '',
    icon = '',
    url = ''
  } = {}) {
    this.data = {
      [menuIdKey]: uniqueId(menuIdKey),
      title: title,
      icon: icon,
      url: url
    }
    this._scope = ''
  }
  add (item) {
    if (!this.data[menuChildrenKey]) {
      this.data[menuChildrenKey] = []
    }
    this.data[menuChildrenKey].push(item)
    return this
  }
  value () {
    return this.data
  }
  scope (value) {
    this._scope = value
    return this
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
