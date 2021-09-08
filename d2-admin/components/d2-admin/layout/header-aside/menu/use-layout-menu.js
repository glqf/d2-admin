import { useRouter } from 'vue-router'

export function useLayoutMenu () {
  const router = useRouter()

  function onMenuSelect (menuLink) {
    router.push(menuLink)
  }

  return {
    onMenuSelect
  }
}
