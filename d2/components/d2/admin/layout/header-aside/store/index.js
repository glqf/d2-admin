import { defineStore } from 'pinia'

export const useLayoutHeaderAsideStore =  defineStore('d2-admin-layout-header-aside', {
  state: () => {
    return {
      customBody: false
    }
  }
})
