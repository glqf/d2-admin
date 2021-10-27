import path from 'path'
import { kebabCase } from 'lodash'

const namespace = /^D2Admin/

export function D2AdminComponentsResolver ({
  prefix = 'd2/components/',
  suffix = '/index.js'
} = {}) {
  return function (name) {
    if (namespace.test(name)) {
      return path.resolve(
        process.cwd(),
        path.join(prefix, `${kebabCase(name.replace(namespace, ''))}`, suffix)
      )
    }
  }
}
