import { uniqueId } from 'lodash-es'

export function routesToMenus (routes) {
  function getItem (item) {
    const result = {
      label: item.meta?.title || 'label',
      index: uniqueId()
    }
    if (item.children) {
      result.children = item.children.map(getItem)
    } else {
      result.name = item.name
    }
    return result
  }
  return routes.map(getItem)
}
