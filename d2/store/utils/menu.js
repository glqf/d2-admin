import { fromPairs } from 'lodash-es'
import { defineStore } from 'pinia'
import { flattenMenus, getMenuId, getMenuUrl } from 'd2/utils/menu.js'

export function defineMenuStore (namespace) {
  return defineStore(namespace, {
    state: () => {
      return {
        // eg: [ tree, ... ]
        menus: []
      }
    },
    getters: {
      // eg: [ menu, ... ]
      flatMenus: state => {
        return flattenMenus(state.menus)
      },
      // eg: { id: index, ... }
      flatMenusIdIndex () {
        return fromPairs(this.flatMenus.map((e, i) => [getMenuId(e), i]))
      },
      // eg: { url: index, ... }
      flatMenusUrlIndex () {
        return fromPairs(this.flatMenus.map((e, i) => [getMenuUrl(e), i]).filter(e => e[0]))
      }
    },
    actions: {
      /**
       * Set menus value
       * @param {array} value menus
       */
      setMenus (value) {
        this.menus = value
      },
      /**
       * Find menu item by menu id
       * @param {string} id menu id
       * @returns menu item
       */
      getMenuById (id) {
        return this.flatMenus[this.flatMenusIdIndex[id]]
      },
      /**
       * Find menu item by menu url
       * @param {string} url menu url
       * @returns menu item
       */
      getMenuByUrl (url) {
        return this.flatMenus[this.flatMenusUrlIndex[url]]
      }
    }
  })
}
