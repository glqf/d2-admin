import { inject } from 'vue'

export function useD2ComponentsConfig () {
  return inject('__D2_COMPONENTS_CONFIG__', {})
}
