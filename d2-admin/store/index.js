import { provide, inject } from 'vue'

function registerHook (hook) {
  !hook.token && (hook.token = Symbol('store'))
  const depends = hook()
  provide(hook.token, depends)
  return depends
}

export const registerStoreHooks = (...hooks) => hooks.map(hook => registerHook(hook))

export function useStoreHook (hook) {
  const injected = inject(hook.token)
  if (injected) return injected
  throw new Error(`hook 函数 ${ hook.name } 未在上层组件通过 registerHook 或 registerStoreHooks 注册`)
}
