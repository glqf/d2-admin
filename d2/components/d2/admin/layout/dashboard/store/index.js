import { defineStore } from 'pinia'

export const useD2AdminLayoutDashboardStore = defineStore('d2-admin-layout-dashboard', {
  state: () => {
    return {
      collapsed: false,
      showUserName: true,
      showUserAvatar: true
    }
  },
  actions: {
    collapsedToggle () {
      this.collapsed = !this.collapsed
    }
  }
})
