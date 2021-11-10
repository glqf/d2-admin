import { defineStore } from 'pinia'

export const useD2AdminLayoutHeaderAsideStore = defineStore('d2-admin-layout-header-aside', {
  state: () => {
    return {
      fold: false
    }
  },
  actions: {
    /**
     * set side menu fold value
     * @param {boolean} value setting
     */
    setCustomBody (value) {
      this.fold = value
    }
  }
})
