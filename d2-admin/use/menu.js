import { useRouter } from 'vue-router'

export function useMenu () {
  const router = useRouter()

  function navigateByMenu (menu) {
    router.push(menu.url)
  }

  return {
    navigateByMenu
  }
}
