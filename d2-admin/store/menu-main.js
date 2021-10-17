import { defineStore } from 'pinia'
import { fromPairs } from 'lodash-es'
import { flattenMenus, getMenuId, getMenuUrl } from 'd2-admin/utils/menu.js'

export const useStoreOfMenuMain = defineStore('menu-main', {
  state: () => ({
    menus: []
  }),
  getters: {
    flatMenus () {
      return flattenMenus(this.menus)
    },
    flatMenusIdIndex () {
      return fromPairs(this.flatMenus.map((e, i) => [getMenuId(e), i]))
    },
    flatMenusUrlIndex () {
      return fromPairs(this.flatMenus.map((e, i) => [getMenuUrl(e), i]))
    }
  },
  actions: {
    setMenus (value) {
      this.menus = value
    },
    getMenuById (id) {
      return this.flatMenus[this.flatMenusIdIndex[id]]
    },
    getMenuByUrl (url) {
      return this.flatMenus[this.flatMenusUrlIndex[url]]
    }
  }
})
