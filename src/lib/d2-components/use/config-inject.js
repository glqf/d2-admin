import { inject } from 'vue'
import { name as configProviderName } from '../packages/config-provider/src/config-provider.jsx'

export function useConfig () {
  const config = inject(configProviderName, {})
  return config
}
