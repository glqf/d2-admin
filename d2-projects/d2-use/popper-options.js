import { $ } from 'd2-projects/d2-utils/vue.js'

export function usePopperOptions () {
  return $(() => ({
    placement: 'bottom'
  }))
}
