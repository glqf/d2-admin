import { provide, inject } from 'vue'

export function useProvider (fn) {
  !fn.token && (fn.token = Symbol('store'))
  const depends = fn()
  provide(fn.token, depends)
  return depends
}

export const useProviders = (...fns) => fns.map(func => useProvider(func))

export function useInjector (fn) {
  const token = fn.token
  const injected = inject(token)
  if (injected) return injected
  throw new Error(`状态钩子函数 ${ fn.name } 未在上层组件通过调用 useProvider 提供`)
}
