import { getCurrentInstance } from 'vue'

export function useConfigForD2Components () {
  return getCurrentInstance()?.proxy?.$D2COM || {}
}
