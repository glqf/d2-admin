import { fromPairs } from 'lodash'
import { provide, inject } from 'vue'

function registerModule (hook) {
  !hook.token && (hook.token = Symbol('store'))
  const depends = hook()
  provide(hook.token, depends)
  return depends
}

export const registerModules = hooks => fromPairs(
  hooks.map(hook => [
    hook.name,
    registerModule(hook)
  ])
)

export function getModule (hook) {
  const injected = inject(hook.token)
  if (injected) return injected
  throw new Error(`hook 函数 ${ hook.name } 未在上层组件通过 registerModule 或 registerModules 注册`)
}
