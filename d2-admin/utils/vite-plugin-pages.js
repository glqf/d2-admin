import { uniqueId } from 'lodash-es'

export function routesToMenus (routes) {
  function getItem (item) {
    const result = {
      label: item.meta?.title || item.name || item.path,
      index: uniqueId()
    }
    if (item.children) {
      result.children = item.children.map(r => getItem(r))
    } else {
      result.name = item.name
    }
    return result
  }
  
  const menus = routes.map(r => getItem(r))
  return menus
}
