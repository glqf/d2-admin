import { getCurrentInstance } from 'vue'

export const configDefault = {
  svgPrefix: '',
  svgNames: [],
  size: '',
  iconCollection: ''
}

let $D2COMPONENT = {}

export function configSet (option) {
  $D2COMPONENT = option
}

export function configGet (key) {
  return $D2COMPONENT[key]
}

export function useGlobalConfig () {
  const vm = getCurrentInstance()
  if ('$D2COMPONENT' in vm.proxy) {
    return vm.proxy.$D2COMPONENT
  }
  return {}
}
