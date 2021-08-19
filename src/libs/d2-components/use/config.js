import {
  inject,
  computed
} from 'vue'
import {
  mapValues
} from 'lodash-es'
import {
  componentProps,
  provideName,
  provideDataDefault
} from '../packages/config/src/config.jsx'

export function useConfig () {
  const config = inject(provideName, provideDataDefault)
  const result = mapValues(
    componentProps,
    (value, key) => computed(() => config[key])
  )
  return result
}
