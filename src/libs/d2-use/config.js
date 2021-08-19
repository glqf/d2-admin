import { inject } from 'vue'

export const provideName = '__D2_COMPONENTS_CONFIG__'

export function useD2ComponentsConfig () {
  return inject(provideName, {})
}
