import {
  provide,
  inject
} from 'vue'
import {
  camelCase
} from 'lodash-es'

export function useContext (name = '') {
  const id = Symbol(camelCase(`${name}-symbol`))
  const post = value => {
    provide(id, value)
  }
  const get = value => inject(id, value)
  return {
    provide: post,
    inject: get
  }
}
