import { defineStore } from 'pinia'

export const useD2AdminLayoutDashboardStore = defineStore('d2-admin-layout-dashboard', {
  state: () => {
    return {
      folded: false
    }
  }
})
