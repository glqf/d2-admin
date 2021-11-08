import { onUnmounted } from 'vue'
import { useD2AdminLayoutHeaderAsideStore } from 'd2/components/d2/admin/layout/header-aside/store/index.js'

export function useD2AdminLayoutHeaderAside () {
  const d2AdminLayoutHeaderAsideStore = useD2AdminLayoutHeaderAsideStore()

  function activateCustomBody () {
    d2AdminLayoutHeaderAsideStore.activateCustomBody()
  }
  onUnmounted(() => {
    d2AdminLayoutHeaderAsideStore.disableCustomBody()
  })
  return {
    activateCustomBody
  }
}
