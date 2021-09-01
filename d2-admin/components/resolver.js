import path from 'path'
import { kebabCase } from 'lodash'

const namespace = /^D2Admin/

export function D2AdminComponentsResolver () {
  return function (name) {
    if (namespace.test(name)) {
      return path.resolve(
        process.cwd(),
        `d2-admin/components/${kebabCase(name.replace(namespace, ''))}.vue`
      )
    }
  }
}
