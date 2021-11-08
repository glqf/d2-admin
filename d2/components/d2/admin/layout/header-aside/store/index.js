import { defineStore } from 'pinia'

export const useD2AdminLayoutHeaderAsideStore =  defineStore('d2-admin-layout-header-aside', {
  state: () => {
    return {
      isCustomBody: false
    }
  },
  actions: {
    /**
     * set store isCustomBody value
     * @param {boolean} value setting
     */
    setCustomBody (value) {
      this.isCustomBody = value
    },
    /**
     * activate custom body
     */
    activateCustomBody () {
      this.setCustomBody(true)
    },
    /**
     * disable custom body
     */
    disableCustomBody () {
      this.setCustomBody(false)
    }
  }
})
