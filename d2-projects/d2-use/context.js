import {
  provide,
  inject
} from 'vue'
import {
  camelCase
} from 'lodash-es'

export function useContext (name = '') {
  const id = Symbol(camelCase(`${name}-symbol`))
  const _provide = value => provide(id, value)
  const _inject = defaultValue => inject(id, defaultValue)
  return {
    provide: _provide,
    inject: _inject
  }
}
