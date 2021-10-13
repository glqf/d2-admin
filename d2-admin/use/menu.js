import { useRouter } from 'vue-router'

export function useMenu () {
  const router = useRouter()

  function onMenuSelect (menu) {
    router.push(menu.url)
  }

  return {
    onMenuSelect
  }
}
